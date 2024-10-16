import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "./Button";
import {InputWithSpan} from "./InputWithSpan";
import {useDispatch} from "react-redux";
import {addErrorMessage} from "../features/errorSlice";

type CounterType = {
    minValue: number
    maxValue: number
    setCount: (min: number, max: number) => void
    counter: number
    // setErrorMessage: (title: string) => void
    error: string
}

export const SetCounter = ({maxValue, minValue, setCount}: CounterType) => {
    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)
    const [disable, setDisable] = useState(true)


    const dispatch = useDispatch()



    if (max === min) {
        dispatch(addErrorMessage('Числа одинаковые'))
    }

    let disableForSet = min <= 0 || max <= 0 || max === min || min >= max

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (max < 1 || max <= min) {
            dispatch(addErrorMessage('max value error'))
        } else {
            dispatch(addErrorMessage('Произошел сет'))
        }
        setMax(value)
        setDisable(false)

    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (min < 1 || min >= max) {
            debugger
            dispatch(addErrorMessage('min value error'))
        } else {
            dispatch(addErrorMessage('Произошел сет'))
        }
        const value = Number(e.currentTarget.value);
        setMin(value);
        setDisable(false)
    }

    const setCounterHandler = () => {
        localStorage.setItem('minValue', JSON.stringify(min))
        localStorage.setItem('maxValue', JSON.stringify(max))
        setCount(min, max)
        setDisable(true)

    }

    useEffect(() => {
        getMinValueLocalStorage()
        getMaxValueLocalStorage()
    }, []);
    // ---Помещение значений в LocalStorage



    const getMinValueLocalStorage = () => {
        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newValue = JSON.parse(minValueAsString)
            setMin(newValue)
        }
    }

    const getMaxValueLocalStorage = () => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMax(newValue)
        }
    }

    return (
        <StyledDiv>

            <InputWithSpan title={'MAX VALUE'} onChange={maxValueHandler} value={max > -1 ? max : -1}/>
            <InputWithSpan title={'MIN VALUE'} onChange={minValueHandler} value={min > -1 ? min : -1}/>

            <StyledButtons>
                <Button title={'set'} onclick={setCounterHandler} disabled={disable || disableForSet}/>
            </StyledButtons>
        </StyledDiv>
    );
};


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 5px solid #279eea;
  border-radius: 20px;
  gap: 20px;
  padding:50px;
`


const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid #279eea;
  padding: 10px;
  border-radius: 20px;
  font-family:'Montserrat', sans-serif; 
`

const StyledCounterSpan = styled.span`
  font-size:25px;
`

const StyledInput = styled.input`
  border:0;
  border-radius:5px;
  padding:5px;
`


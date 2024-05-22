import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "./Button";
import {InputWithSpan} from "./InputWithSpan";

type CounterType = {
    minValue: number
    maxValue: number
    setCount: (min: number, max: number) => void
    counter: number
    setError: (title: string) => void
    error: string
}

export const SetCounter = ({maxValue, minValue, setCount, setError}: CounterType) => {
    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)

    if (max === min) {
        setError('Числа одинаковые')
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (max < 1) {
            setError('MAX VALUE error')
        } else {
            setError('')
        }
        setMax(value)

    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (min < 1) {
            setError('incorrect value')
        } else {
            setError('')
        }
        const value = Number(e.currentTarget.value);
        setMin(value);
    }

    const setCounterHandler = () => {
        localStorage.setItem('minValue', JSON.stringify(min))
        localStorage.setItem('maxValue', JSON.stringify(max))
        setCount(min, max)

    }

    useEffect(() => {
        getMinValueLocalStorage()
        getMaxValueLocalStorage()
    }, []);
    // ---Помещение значений в LocalStorage

    const disabled = min <= 0 || max <= 0 || max === min

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
                <Button title={'set'} onclick={setCounterHandler} disabled={disabled}/>
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


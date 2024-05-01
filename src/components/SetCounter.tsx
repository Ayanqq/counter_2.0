import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "./Button";

type CounterType = {
    minValue:number
    maxValue:number
    setCount: (min: number, max: number)=>void
}

export const SetCounter = ({maxValue, minValue, setCount}: CounterType) => {
    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)

    // const [error, setError] = useState(false)

    //где надо размещать error

    const maxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        setMax(value)
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        setMin(value);
    }

    const setCounterHandler = () => {
        setCount(min, max)
        localStorage.setItem('minValue', JSON.stringify(min))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }

    useEffect(() => {
        if (min == -1) {
            setMin(-1)
        }
    }, [min]);


    // useEffect(() => {
    //     if (min == -1 || max == -1) {
    //         setMin(-1)
    //         setMax(-1)
    //     }
    // }, [min, max]);

    useEffect(() => {
        getMinValueLocalStorage()
        getMaxValueLocalStorage()
    }, []);

    const disabled = min < 0 || max < 0

    const setToLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(min))
    }

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
                <span>
                    max value
                    <input
                        value={max}
                        onChange={maxValueHandler}
                        type='number'/>
                </span>
            <span>
                    min value
                    <input
                        value={min}
                        onChange={minValueHandler}
                        type='number'/>
                </span>
            <StyledButtons>
                <Button title={'set'} onclick={setCounterHandler} disabled={disabled}/>
            </StyledButtons>
        </StyledDiv>
    );
};


const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    border:5px solid #279eea;
    border-radius:20px;
    gap:20px;
`


const StyledButtons = styled.div`
  display:flex;
  justify-content:center;
  border:5px solid #279eea;
  padding:10px;
  border-radius:20px;
`


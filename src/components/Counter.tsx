import React from 'react';
import styled from "styled-components";
import {Button} from "./Button";

type CounterType = {
    counter: number
    maxValue: number
    onIncreaseHandler: () => void;
    resetButton: () => void
    setError: (value:string) => void
    error:string

}

export const Counter = ({maxValue, counter, onIncreaseHandler, resetButton, error}: CounterType) => {
    const disableForInc = counter === maxValue || !!error
    const disableForReset = counter === Number(localStorage.getItem('minValue'))


    const addIncrement = () => {
        if (counter < maxValue) {
            onIncreaseHandler()
        }
    }



    return (
            <>
                <CounterMain>
                    {error ? <StyledError>{error}</StyledError> :
                        <StyledSpan color={counter === maxValue ? 'red' : 'white'}>{counter}</StyledSpan>}
                </CounterMain>
                <StyledButtons>
                    <Button title={'inc'} onclick={addIncrement} disabled={disableForInc}/>
                    <Button title={'reset'} onclick={resetButton} disabled={disableForReset}/>
                </StyledButtons>
            </>
        );
};


type SpanType = {
    color: 'red' | 'white';
}

const CounterMain = styled.div`
  width: 200px;
  height: 100px;
  background-color: #279eea;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const StyledSpan = styled.span<SpanType>`
  font-size: 50px;
  color: ${props => props.color};
`

const StyledButtons = styled.div`
  display: flex;
  gap: 5px;
  border: 5px solid #279eea;
  padding: 10px;
  border-radius: 20px;
`

const StyledError = styled.div`
  color: red;
  font-size: 30px;
`


import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "./Button";

type CounterType = {
    counter: number
    maxValue: number
    minValue: number
    onIncreaseHandler: () => void;
    resetButton: () => void

}

//todo:сделать инпут, disable переделать
export const Counter = ({maxValue, minValue, counter, onIncreaseHandler, resetButton}: CounterType) => {
    const [error, setError] = useState(false)

    const addIncrement = () => {
        if (counter < maxValue) {
            onIncreaseHandler()
        }
    }

    // const Error = (boolean:boolean) => {
    //     setError(boolean)
    // }

    if (maxValue === -1 && !error) {
        setError(true)
    }



    return (
            <>
                <CounterMain>
                    {error ? <StyledError>STOP</StyledError> :
                        <StyledSpan color={counter === maxValue ? 'red' : 'white'}>{counter}</StyledSpan>}
                </CounterMain>
                <StyledButtons>
                    <Button title={'inc'} onclick={addIncrement} disabled={counter === maxValue}/>
                    {/*но чтобы проверить maxValue - туда должно что то попатсь, и попадать должно только тогда, когда set*/}
                    <Button title={'reset'} onclick={resetButton} disabled={counter < 1}/>
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


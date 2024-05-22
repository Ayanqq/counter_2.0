import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';

const minValueFromLocalStorage = Number(localStorage.getItem('minValue'))
const maxValueFromLocalStorage = Number(localStorage.getItem('maxValue'))

function App() {
    const [maxValue, setMaxValue] = useState(maxValueFromLocalStorage);
    //- это стейт для хранения максимального значения
    const [counter, setCounter] = useState(minValueFromLocalStorage)
    const [message, setMessage] = useState<'eror' | 'sucsses' | ''>('')
    //- это счетчик, который прибавляет +1
    const [minValue, setMinValue] = useState(0)
    //- это счетчик, который отвечает за минимальное значение
    const [error, setError] = useState('')

    const onIncreaseHadnler = () => {
        setCounter(counter + 1)
}

    const resetButton = () => {
        setCounter(  Number(localStorage.getItem('minValue')))
    }
    const setHandler = (min: number, max: number) => {
        setCounter(min)
        setMaxValue(max)
        setError('')
    }


    return (
        <StyledAll>
        <StyledBlocks>
            <SetCounter
                minValue={minValue}
                maxValue={maxValue}
                setCount={setHandler}
                counter={counter}
                setError={setError}
                error={error}
            />
            <StyledCounter>
                <Counter
                    setError={setError}
                    counter={counter}
                    maxValue={maxValue}
                    minValue={minValue}
                    onIncreaseHandler={onIncreaseHadnler}
                    resetButton={resetButton}
                    error={error}
                />
            </StyledCounter>
        </StyledBlocks>
        </StyledAll>
    );
}

export default App;

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;

  border: 5px solid #279eea;
  border-radius: 20px;
  gap: 20px;
`

const StyledBlocks = styled.div`
    display:flex;
    justify-content: center;
    gap:20px;
`
const StyledAll = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`

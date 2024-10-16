import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';
import {useDispatch, useSelector} from "react-redux";
import {clearErrorMessage, errorValue} from "./features/errorSlice";

export const minValueFromLocalStorage = Number(localStorage.getItem('minValue'))
const maxValueFromLocalStorage = Number(localStorage.getItem('maxValue'))

function App() {
    const [maxValue, setMaxValue] = useState(maxValueFromLocalStorage);
    //- это стейт для хранения максимального значения
    const [counter, setCounter] = useState(minValueFromLocalStorage)
    //- это счетчик, который прибавляет +1
    const [minValue, setMinValue] = useState(minValueFromLocalStorage)
    //- это счетчик, который отвечает за минимальное значение
    // const [errorMessage, setErrorMessage] = useState('')

    // const errorMsg = useSelector(state => state.error.message)
    const errorMsg = useSelector(errorValue)
    const dispatch = useDispatch()

    // console.log(count)

    const onIncreaseHandler = () => {
        setCounter(counter + 1)
}

    const resetButton = () => {
        setCounter(  Number(localStorage.getItem('minValue')))
    }
    const setHandler = (min: number, max: number) => {
        setCounter(min)
        setMaxValue(max)
        dispatch(clearErrorMessage())
        // setErrorMessage('')
    }


    return (
        <StyledAll>
        <StyledBlocks>
            <SetCounter
                minValue={minValue}
                maxValue={maxValue}
                setCount={setHandler}
                counter={counter}
                // setErrorMessage={setErrorMessage}
                error={errorMsg}
            />
            <StyledCounter>
                <Counter
                    // setError={setErrorMessage}
                    counter={counter}
                    maxValue={maxValue}
                    onIncreaseHandler={onIncreaseHandler}
                    resetButton={resetButton}
                    error={errorMsg}
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

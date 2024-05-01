import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';


function App() {
    const [maxValue, setMaxValue] = useState(0);
    //- это стейт для хранения максимального значения

    const [counter, setCounter] = useState(0)
    //- это счетчик, который прибавляет +1

    const [minValue, setMinValue] = useState(maxValue)
    //- это счетчик, который отвечает за минимальное значение


    const onIncreaseHadnler = () => {
        setCounter(counter + 1)
    }
    const resetButton = () => {
        setCounter(minValue)
    }

    const setHandler = (min: number, max: number) => {
        setCounter(min)
        setMaxValue(max)
    }



    return (
        <div style={{display: "flex", justifyContent: 'center', gap: '20px'}}>
            <SetCounter
                minValue={minValue}
                maxValue={maxValue}
                setCount={setHandler}
            />
            <Main>
                <Counter
                    counter={counter}
                    maxValue={maxValue}
                    minValue={minValue}
                    onIncreaseHandler={onIncreaseHadnler}
                    resetButton={resetButton}

                />

            </Main>

        </div>
    );
}

export default App;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;

    border: 5px solid #279eea;
    border-radius: 20px;
    gap: 20px;
`
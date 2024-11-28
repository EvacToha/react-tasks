import React from "react";
import {MyButton, CounterContainer, CounterDisplay, ButtonsContainer} from './styles';


interface CounterProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
}

const Counter= ({onIncrement, onDecrement, onReset, count} : CounterProps)  => {
    return <>
        <CounterContainer>
            <CounterDisplay> {count} </CounterDisplay>
            <ButtonsContainer>
                <MyButton onClick={onIncrement}>Increment</MyButton>
                <MyButton onClick={onDecrement}>Decrement</MyButton>
                <MyButton onClick={onReset}>Reset</MyButton>
            </ButtonsContainer>
        </CounterContainer>
    </>
}

export default Counter;
import React from "react";
import {MyButton, CounterContainer, CounterDisplay, ButtonsContainer} from './styles';



interface CounterProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
    disabled?: boolean;
    isParent?: boolean;
}

const Counter= ({onIncrement, onDecrement, onReset, count, disabled, isParent} : CounterProps)  => {
    const parentStyle = isParent ? {border: "8px solid gray"} : {};

    return <>
        <CounterContainer style={parentStyle}>
            <CounterDisplay> {count} </CounterDisplay>
            <ButtonsContainer>
                <MyButton onClick={onIncrement}>+</MyButton>
                <MyButton onClick={onReset}>0</MyButton>
                <MyButton disabled={disabled} onClick={onDecrement}>-</MyButton>
            </ButtonsContainer>
        </CounterContainer>
    </>
}

export default Counter;
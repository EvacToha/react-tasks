import React from "react";
import PropTypes from "prop-types";
import {MyButton, CounterContainer, CounterDisplay, ButtonsContainer} from './styles.js';


const Counter = ({onIncrement, onDecrement, onReset, count}) => {


    return <CounterContainer>
        <CounterDisplay> {count} </CounterDisplay>
        <ButtonsContainer>
            <MyButton onClick={onIncrement}>Increment</MyButton>
            <MyButton onClick={onDecrement}>Decrement</MyButton>
            <MyButton onClick={onReset}>Reset</MyButton>
        </ButtonsContainer>
    </CounterContainer>
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}

export default Counter;
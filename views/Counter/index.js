import React from "react";
import { Button, DialogContentText  } from '@mui/material';
import PropTypes from "prop-types";


const Counter = ({onIncrement, onDecrement, onReset, count}) => {
    return <>
        <DialogContentText>
            {count}
        </DialogContentText>
        <Button onClick={onIncrement}>Increment</Button>
        <Button onClick={onDecrement}>Decrement</Button>
        <Button onClick={onReset}>Reset</Button>
    </>
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}

export default Counter;
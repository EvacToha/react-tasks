import React, {memo} from "react";

import Counter from '../views/Counter/index';

interface CounterContainerProps {
    count: number;
    reset: () => void;
    increment: () => void;
    decrement: () => void;
}

const CounterContainer = memo(({count, increment, decrement, reset} : CounterContainerProps) => {

    return <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}

    />;
});

export default CounterContainer;
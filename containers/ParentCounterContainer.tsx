import React from "react";

import Counter from '../views/Counter/index';

interface ParentCounterContainerProps {
    count: number;
    resetCounters: () => void;
    addCounters: () => void;
    removeCounters: () => void;
}


const ParentCounterContainer = ({count, resetCounters,addCounters, removeCounters} : ParentCounterContainerProps) => {

    return <Counter
        count={count}
        onIncrement={addCounters}
        onDecrement={removeCounters}
        onReset={resetCounters}
        disabled={count === 1}
        isParent={true}
    />;

}
export default ParentCounterContainer;

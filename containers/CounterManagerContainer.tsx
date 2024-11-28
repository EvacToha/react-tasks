import {useState, useMemo} from "react";

import CounterContainer from "./CounterContainer";
import ParentCounterContainer from "./ParentCounterContainer";
import GridCounters from "../views/GridCounters";


interface CounterHandler {
    increment(): void;
    decrement(): void;
    reset(): void;
}

const CounterManagerContainer = () => {
    const [counters, setCounters] = useState<number[]>([0]);


    // это жалкие попытки мемоизировать обработчики, но все равно при изменении одного счетчика, меняется весь массив, потому и обработчики создаются каждый раз.
    const counterHandlers = useMemo(() => {

        const handlers : CounterHandler[] = counters.map((_, index) => (
            {
                increment: () => setCounters(prev => [...prev].map((val, inx) => inx === index ? val + 1 : val)),
                decrement: () => setCounters(prev => [...prev].map((val, inx) => inx === index ? val - 1 : val)),
                reset: () => setCounters(prev => [...prev].map((val, inx) => inx === index ? 0 : val)),
            })
        );

        return handlers;
    },[counters]);

    const addCounters = ()=> {
        setCounters((prev) => [...prev, 0].map((item,inx) => inx & 1 ? item + 1 : item) );
    };

    const removeCounters = () => {
        setCounters((prev) => [...prev].slice(0, -1).map((item,inx) => inx & 1 ? item : item - 1));
    };

    const resetCounters = () => {
        setCounters([0]);
    };

    return <>
        <ParentCounterContainer count={counters.length} addCounters={addCounters} removeCounters={removeCounters} resetCounters={resetCounters} />
        <GridCounters>
            {
                counters.map((value, index) =>
                    <CounterContainer key={index}
                                      count={value}
                                      increment={counterHandlers[index].increment}
                                      reset={counterHandlers[index].reset}
                                      decrement={counterHandlers[index].decrement}
                    />
                )
            }
        </GridCounters>

    </>
}

export default CounterManagerContainer;
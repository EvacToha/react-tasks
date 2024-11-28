import React, { ReactNode } from "react";

import Counter from '../views/Counter/index';

interface CounterState {
    count: number;
}

interface CounterContainerProps {}

export default class CounterContainer extends React.Component<CounterContainerProps, CounterState> {
    constructor(props : any) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState(prevState => {
            return ({
                count: prevState.count + 1
            });
        });
    };

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    };

    reset = () => {
        this.setState({
            count: 0
        })
    };

    render()  {
        return <Counter
            count={this.state.count}
            onIncrement={this.increment}
            onDecrement={this.decrement}
            onReset={this.reset}
        />;
    }
}


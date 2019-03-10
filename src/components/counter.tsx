import React, { Fragment, Component } from 'react';
import { CounterData } from './counters';

export interface CounterProps {
  counter: CounterData;
  onIncrement: () => void;
  onDelete: () => void;
}

export class Counter extends Component<CounterProps> {
  constructor(public props: CounterProps) {
    super(props);
  }

  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <Fragment>
        <div style={{ fontSize: 20 }}>Hello {counter.value}</div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDelete}>Delete</button>
      </Fragment>
    );
  }
}

import React, { Fragment, Component } from 'react';
import { Counter } from './counter';

export const DATA_COUNTER: CounterData[] = [
  { id: 1, value: 4 },
  { id: 2, value: 3 },
  { id: 3, value: 2 },
  { id: 4, value: 1 }
];

export interface CountersState {
  counters: CounterData[];
}

export interface CounterData {
  id: number;
  value: number;
}

export class Counters extends Component<any, CountersState> {
  state = { counters: DATA_COUNTER };

  handleDelete = (id: number) => {
    const counters = this.state.counters.filter(e => e.id != id);
    this.setState({ counters });
  };

  handleIncrement = (index: number) => {
    this.state.counters[index].value += 1;
    this.setState({ counters: this.state.counters });
  };

  reset = () => {
    const counters = this.state.counters.map(c => ({ ...c, value: 0 }));
    this.setState({ counters });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.reset}>reset</button>
        {this.state.counters.map((counter, i) => (
          <Counter
            key={counter.id}
            onDelete={() => this.handleDelete(counter.id)}
            onIncrement={() => this.handleIncrement(i)}
            counter={counter}
          />
        ))}
      </Fragment>
    );
  }
}

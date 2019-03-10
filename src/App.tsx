import React, { Component, Fragment } from 'react';
import './App.css';
import { Counters } from './components/counters';
import { NavBar } from './components/navBar';
import { connect } from 'react-redux';
import { AppState } from './store/store';
import { startAction, stopAction } from './store/actions';
import { Action } from 'redux';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Counters />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => ({ ...state });

const mapDispatchToProps = (dispatch: {
  (arg0: Action<string>): void;
  (arg0: Action<string>): void;
}) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

// export default App;
// export default connect()(App);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

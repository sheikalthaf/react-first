import React, { Component, Fragment } from 'react';
import './App.css';
import { Counters } from './components/counters';
import { NavBar } from './components/navBar';
import { connect } from 'react-redux';
import { AppState } from './store/store';
import { startAction, stopAction } from './store/actions';
import { oDispatch } from './typings';

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

const mapDispatchToProps = (dispatch: oDispatch<string>) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

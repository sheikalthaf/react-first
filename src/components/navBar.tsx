import React, { Component } from 'react';

export interface NavBarProps {}

export interface NavBarState {}

export class NavBar extends Component<NavBarProps, NavBarState> {
  render() {
    return <div className={'myHeader'}>My Header</div>;
  }
}

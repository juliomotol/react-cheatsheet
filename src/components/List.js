import React from 'react';
import { List as MuiList } from '@material-ui/core';
import './List.scss';

export default class List extends React.Component {
  render() {
    let { children } = this.props;

    return (
      <MuiList component="div" disablePadding className="list">
        {children}
      </MuiList>
    );
  }
}

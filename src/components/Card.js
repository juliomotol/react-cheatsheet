import React from 'react';
import { Card as MuiCard } from '@material-ui/core';
import './Card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasHover: false };
  }

  handleHover = (hasHover) => this.setState({ hasHover: hasHover });

  render() {
    let { children } = this.props;
    return (
      <MuiCard
        className="card"
        raised={this.state.hasHover}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        {children}
      </MuiCard>
    );
  }
}

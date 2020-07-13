import React from 'react';
import { IconButton, ListItem, ListItemText, ListItemSecondaryAction, Collapse, Divider } from '@material-ui/core';
import { Launch } from '@material-ui/icons';

export default class ExpandableListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  openActionUrl = () => window.open(this.props.actionUrl, '_blank');

  toggleExpanded = (event) => {
    event.preventDefault();

    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    let { text, children } = this.props;

    return (
      <>
        <ListItem component="div" button onClick={(event) => this.toggleExpanded(event)}>
          <ListItemText primary={text} />
          <ListItemSecondaryAction>
            <IconButton aria-label="open page" edge="end" onClick={this.openActionUrl}>
              <Launch />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={this.state.expanded}>
          <ListItem component="div">
            {children}
          </ListItem>
          <Divider />
        </Collapse>
      </>
    );
  }
}

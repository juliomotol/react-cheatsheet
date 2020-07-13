import React from 'react';
import { ListItem, ListItemText, Chip } from '@material-ui/core';

export default class TaggedListItem extends React.Component {
  onClick = () => window.open(this.props.actionUrl, '_blank');

  render() {
    let { text, tag } = this.props;

    return (
      <ListItem component="div" button onClick={this.onClick}>
        <ListItemText primary={text} />
        {tag && <Chip label={tag} size="small" variant="outlined" />}
      </ListItem>
    );
  }
}

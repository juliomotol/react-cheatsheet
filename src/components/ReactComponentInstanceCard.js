import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class ReactComponentInstanceCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="React.Component"
          subheader="Instance"
          actionUrl="https://reactjs.org/docs/react-component.html"
        />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-component.html#setstate"
            text="setState()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-component.html#forceupdate"
            text="forceUpdate()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-component.html#defaultprops"
            text="defaultProps"
            tag="Class Property"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-component.html#displayname"
            text="displayName"
            tag="Class Property"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-component.html#props"
            text="props"
            tag="Instance Property"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-component.html#state"
            text="state"
            tag="Instance Property"
          />
        </List>
      </Card>
    );
  }
}

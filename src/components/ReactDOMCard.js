import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class ReactDOMCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="ReactDOM"
          actionUrl="https://reactjs.org/docs/react-dom.html"
        />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom.html#render"
            text="render()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom.html#hydrate"
            text="hydrate()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom.html#unmountcomponentatnode"
            text="unmountComponentAtNode()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom.html#finddomnode"
            text="findDOMNode()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom.html#createportal"
            text="createPortal()"
          />
        </List>
      </Card>
    );
  }
}

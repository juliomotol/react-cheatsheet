import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class ReactDOMServerCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="ReactDOMServer"
          actionUrl="https://reactjs.org/docs/react-dom-server.html"
        />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom-server.html#rendertostring"
            text="renderToString()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup"
            text="renderToStaticMarkup()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom-server.html#rendertonodestream"
            text="renderToNodeStream()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream"
            text="renderToNodeStaticStream()"
          />
        </List>
      </Card>
    );
  }
}

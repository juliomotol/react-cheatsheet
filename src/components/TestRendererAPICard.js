import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class TestRendererAPICard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="TestRenderer API"
          actionUrl="https://reactjs.org/docs/test-renderer.html"
        />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrenderercreate"
            text="TestRenderer.create()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrendereract"
            text="TestRenderer.act()"
          />
        </List>
      </Card>
    );
  }
}

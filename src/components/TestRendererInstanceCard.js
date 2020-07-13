import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class TestRendererInstanceCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="TestRenderer Instance"
          actionUrl="https://reactjs.org/docs/test-renderer.html"
        />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrenderertojson"
            text="testRenderer.toJSON()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrenderertotree"
            text="testRenderer.toTree()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrendererupdate"
            text="testRenderer.update()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrendererunmount"
            text="testRenderer.unmount()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrenderergetinstance"
            text="testRenderer.getInstance()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testrendererroot"
            text="testRenderer.root"
          />
        </List>
      </Card>
    );
  }
}

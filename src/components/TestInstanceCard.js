import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class TestInstanceCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="TestInstance"
          actionUrl="https://reactjs.org/docs/test-renderer.html"
        />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancefind"
            text="testInstance.find()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancefindbytype"
            text="testInstance.findByType()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancefindbyprops"
            text="testInstance.findByProps()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancefindall"
            text="testInstance.findAll()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancefindallbytype"
            text="testInstance.findAllByType()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancefindallbyprops"
            text="testInstance.findAllByProps()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstanceinstance"
            text="testInstance.instance"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancetype"
            text="testInstance.type"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstanceprops"
            text="testInstance.props"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstanceparent"
            text="testInstance.parent"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-renderer.html#testinstancechildren"
            text="testInstance.children"
          />
        </List>
      </Card>
    );
  }
}

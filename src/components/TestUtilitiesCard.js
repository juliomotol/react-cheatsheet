import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class TestUtilitiesCard extends React.Component {
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
            actionUrl="https://reactjs.org/docs/test-utils.html#act"
            text="act()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#mockcomponent"
            text="mockComponent()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#iselement"
            text="isElement()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#iselementoftype"
            text="isElementOfType()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#isdomcomponent"
            text="isDOMComponent()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#iscompositecomponent"
            text="isCompositeComponent()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#iscompositecomponentwithtype"
            text="isCompositeComponentWithType()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#findallinrenderedtree"
            text="findAllInRenderedTree()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#scryrendereddomcomponentswithclass"
            text="scryRenderedDOMComponentsWithClass()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#findrendereddomcomponentwithclass"
            text="findRenderedDOMComponentWithClass()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#scryrendereddomcomponentswithtag"
            text="scryRenderedDOMComponentsWithTag()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#findrendereddomcomponentwithtag"
            text="findRenderedDOMComponentWithTag()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#scryrenderedcomponentswithtype"
            text="scryRenderedComponentsWithType()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#findrenderedcomponentwithtype"
            text="findRenderedComponentWithType()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#renderintodocument"
            text="renderIntoDocument()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/test-utils.html#simulate"
            text="Simulate"
          />
        </List>
      </Card>
    );
  }
}

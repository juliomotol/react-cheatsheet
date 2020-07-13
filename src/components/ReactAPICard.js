import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class ReactAPICard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title="React API" actionUrl="https://reactjs.org/docs/react-api.html" />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactcomponent"
            text="React.Component"
            tag="Components"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactpurecomponent"
            text="React.PureComponent"
            tag="Components"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#memo"
            text="React.memo"
            tag="Components"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#createelement"
            text="createElement"
            tag="Elements"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#createfactory"
            text="createFactory"
            tag="Elements"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#cloneelement"
            text="cloneElement"
            tag="Elements"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#isvalidelement"
            text="isValidElement"
            tag="Elements"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactchildren"
            text="React.Children"
            tag="Elements"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactfragment"
            text="React.Fragment"
            tag="Fragments"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactcreateref"
            text="React.createRef"
            tag="Refs"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactforwardref"
            text="React.forwardRef"
            tag="Refs"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactlazy"
            text="React.lazy"
            tag="Suspense"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/react-api.html#reactsuspense"
            text="React.Suspense"
            tag="Suspense"
          />
        </List>
      </Card>
    );
  }
}

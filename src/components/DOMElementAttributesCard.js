import React from 'react';
import { Divider, Link, CardActions } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class DOMElementAttributesCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="DOM Element Attributes"
          actionUrl="https://reactjs.org/docs/dom-elements.html"
        />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#checked"
            text="checked/defaultChecked"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#classname"
            text={
              <>
                <strike>class</strike>
                &nbsp;className
              </>
            }
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"
            text="dangerouslySetInnerHTML"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#htmlfor"
            text={
              <>
                <strike>for</strike>
                &nbsp;htmlFor
              </>
            }
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#onchange"
            text="onChange"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#selected"
            text="selected"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#style"
            text="style"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#suppresscontenteditablewarning"
            text="suppressContentEditableWarning"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#suppresshydrationwarning"
            text="suppressHydrationWarning"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/dom-elements.html#value"
            text="value/defaultValue"
          />
        </List>
        <Divider />
        <CardActions>
          <Link
            href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes"
            underline="always"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all supported HTML attributes
          </Link>
        </CardActions>
      </Card>
    );
  }
}

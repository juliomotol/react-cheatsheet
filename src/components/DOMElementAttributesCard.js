import React from 'react';
import CardList from './CardList.js';
import { Button, Link } from '@material-ui/core';

export default class DOMElementAttributesCard extends React.Component {
  render() {
    return (
      <CardList
        title="DOM Element Attributes"
        actionUrl="https://reactjs.org/docs/dom-elements.html"
        list={[
          {
            title: 'checked/defaultChecked',
            href: 'https://reactjs.org/docs/dom-elements.html#checked',
          },
          {
            title: (
              <>
                <strike>class</strike>
                &nbsp;className
              </>
            ),
            href: 'https://reactjs.org/docs/dom-elements.html#classname',
          },
          {
            title: 'dangerouslySetInnerHTML',
            href: 'https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml',
          },
          {
            title: (
              <>
                <strike>for</strike>
                &nbsp;htmlFor
              </>
            ),
            href: 'https://reactjs.org/docs/dom-elements.html#htmlfor',
          },
          {
            title: 'onChange',
            href: 'https://reactjs.org/docs/dom-elements.html#onchange',
          },
          {
            title: 'selected',
            href: 'https://reactjs.org/docs/dom-elements.html#selected',
          },
          {
            title: 'style',
            href: 'https://reactjs.org/docs/dom-elements.html#style',
          },
          {
            title: 'suppressContentEditableWarning',
            href: 'https://reactjs.org/docs/dom-elements.html#suppresscontenteditablewarning',
          },
          {
            title: 'suppressHydrationWarning',
            href: 'https://reactjs.org/docs/dom-elements.html#suppresshydrationwarning',
          },
          {
            title: 'value/defaultValue',
            href: 'https://reactjs.org/docs/dom-elements.html#value',
          },
        ]}
        cardActions={
          <Link
            href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>All Supported HTML Attributes</Button>
          </Link>
        }
      />
    );
  }
}

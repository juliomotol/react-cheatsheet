import React from 'react';
import CardList from './CardList.js';

export default class TestInstanceCard extends React.Component {
  render() {
    return (
      <CardList
        title="TestInstance"
        actionUrl="https://reactjs.org/docs/test-renderer.html"
        list={[
          {
            title: 'testInstance.find()',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancefind',
          },
          {
            title: 'testInstance.findByType()',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancefindbytype',
          },
          {
            title: 'testInstance.findByProps()',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancefindbyprops',
          },
          {
            title: 'testInstance.findAll()',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancefindall',
          },
          {
            title: 'testInstance.findAllByType()',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancefindallbytype',
          },
          {
            title: 'testInstance.findAllByProps()',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancefindallbyprops',
          },
          {
            title: 'testInstance.instance',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstanceinstance',
          },
          {
            title: 'testInstance.type',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancetype',
          },
          {
            title: 'testInstance.props',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstanceprops',
          },
          {
            title: 'testInstance.parent',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstanceparent',
          },
          {
            title: 'testInstance.children',
            href: 'https://reactjs.org/docs/test-renderer.html#testinstancechildren',
          },
        ]}
      />
    );
  }
}

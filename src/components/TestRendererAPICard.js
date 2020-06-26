import React from 'react';
import CardList from './CardList.js';

export default class TestRendererAPICard extends React.Component {
  render() {
    return (
      <CardList
        title="TestRenderer API"
        actionUrl="https://reactjs.org/docs/test-renderer.html"
        list={[
          {
            title: 'TestRenderer.create()',
            href: 'https://reactjs.org/docs/test-renderer.html#testrenderercreate',
          },
          {
            title: 'TestRenderer.act()',
            href: 'https://reactjs.org/docs/test-renderer.html#testrendereract',
          },
        ]}
      />
    );
  }
}

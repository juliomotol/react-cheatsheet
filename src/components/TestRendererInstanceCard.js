import React from 'react';
import CardList from './CardList.js';

export default class TestRendererInstanceCard extends React.Component {
  render() {
    return (
      <CardList
        title="TestRenderer Instance"
        actionUrl="https://reactjs.org/docs/test-renderer.html"
        list={[
          {
            title: 'testRenderer.toJSON()',
            href: 'https://reactjs.org/docs/test-renderer.html#testrenderertojson',
          },
          {
            title: 'testRenderer.toTree()',
            href: 'https://reactjs.org/docs/test-renderer.html#testrenderertotree',
          },
          {
            title: 'testRenderer.update()',
            href: 'https://reactjs.org/docs/test-renderer.html#testrendererupdate',
          },
          {
            title: 'testRenderer.unmount()',
            href: 'https://reactjs.org/docs/test-renderer.html#testrendererunmount',
          },
          {
            title: 'testRenderer.getInstance()',
            href: 'https://reactjs.org/docs/test-renderer.html#testrenderergetinstance',
          },
          {
            title: 'testRenderer.root',
            href: 'https://reactjs.org/docs/test-renderer.html#testrendererroot',
          },
        ]}
      />
    );
  }
}

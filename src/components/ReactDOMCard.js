import React from 'react';
import CardList from './CardList.js';

export default class ReactDOMCard extends React.Component {
  render() {
    return (
      <CardList
        title="ReactDOM"
        actionUrl="https://reactjs.org/docs/react-dom.html"
        list={[
          { title: 'render()', href: 'https://reactjs.org/docs/react-dom.html#render' },
          { title: 'hydrate()', href: 'https://reactjs.org/docs/react-dom.html#hydrate' },
          {
            title: 'unmountComponentAtNode()',
            href: 'https://reactjs.org/docs/react-dom.html#unmountcomponentatnode',
          },
          { title: 'findDOMNode()', href: 'https://reactjs.org/docs/react-dom.html#finddomnode' },
          { title: 'createPortal()', href: 'https://reactjs.org/docs/react-dom.html#createportal' },
        ]}
      />
    );
  }
}

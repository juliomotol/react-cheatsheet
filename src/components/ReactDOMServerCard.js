import React from 'react';
import CardList from './CardList.js';

export default class ReactDOMServerCard extends React.Component {
  render() {
    return (
      <CardList
        title="ReactDOMServer"
        actionUrl="https://reactjs.org/docs/react-dom-server.html"
        list={[
          {
            title: 'renderToString()',
            href: 'https://reactjs.org/docs/react-dom-server.html#rendertostring',
          },
          {
            title: 'renderToStaticMarkup()',
            href: 'https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup',
          },
          {
            title: 'renderToNodeStream()',
            href: 'https://reactjs.org/docs/react-dom-server.html#rendertonodestream',
          },
          {
            title: 'renderToNodeStaticStream()',
            href: 'https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream',
          },
        ]}
      />
    );
  }
}

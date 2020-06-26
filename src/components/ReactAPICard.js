import React from 'react';
import CardList from './CardList.js';

export default class ReactAPICard extends React.Component {
  render() {
    return (
      <CardList
        title="React API"
        actionUrl="https://reactjs.org/docs/react-api.html"
        list={[
          {
            title: 'React.Component',
            href: 'https://reactjs.org/docs/react-api.html#reactcomponent',
            tag: 'Components',
          },
          {
            title: 'React.PureComponent',
            href: 'https://reactjs.org/docs/react-api.html#reactpurecomponent',
            tag: 'Components',
          },
          {
            title: 'React.memo',
            href: 'https://reactjs.org/docs/react-api.html#memo',
            tag: 'Components',
          },
          {
            title: 'createElement',
            href: 'https://reactjs.org/docs/react-api.html#createelement',
            tag: 'Elements',
          },
          {
            title: 'createFactory',
            href: 'https://reactjs.org/docs/react-api.html#createfactory',
            tag: 'Elements',
          },
          {
            title: 'cloneElement',
            href: 'https://reactjs.org/docs/react-api.html#cloneelement',
            tag: 'Elements',
          },
          {
            title: 'isValidElement',
            href: 'https://reactjs.org/docs/react-api.html#isvalidelement',
            tag: 'Elements',
          },
          {
            title: 'React.Children',
            href: 'https://reactjs.org/docs/react-api.html#reactchildren',
            tag: 'Elements',
          },
          {
            title: 'React.Fragment',
            href: 'https://reactjs.org/docs/react-api.html#reactfragment',
            tag: 'Fragments',
          },
          {
            title: 'React.createRef',
            href: 'https://reactjs.org/docs/react-api.html#reactcreateref',
            tag: 'Refs',
          },
          {
            title: 'React.forwardRef',
            href: 'https://reactjs.org/docs/react-api.html#reactforwardref',
            tag: 'Refs',
          },
          {
            title: 'React.lazy',
            href: 'https://reactjs.org/docs/react-api.html#reactlazy',
            tag: 'Suspense',
          },
          {
            title: 'React.Suspense',
            href: 'https://reactjs.org/docs/react-api.html#reactsuspense',
            tag: 'Suspense',
          },
        ]}
      />
    );
  }
}

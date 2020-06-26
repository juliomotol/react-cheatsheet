import React from 'react';
import CardList from './CardList.js';

export default class ReactComponentInstanceCard extends React.Component {
  render() {
    return (
      <CardList
        title="React.Component"
        subheader="Instance"
        actionUrl="https://reactjs.org/docs/react-component.html"
        list={[
          { title: 'setState()', href: 'https://reactjs.org/docs/react-component.html#setstate' },
          { title: 'forceUpdate()', href: 'https://reactjs.org/docs/react-component.html#forceupdate' },
          {
            title: 'defaultProps',
            href: 'https://reactjs.org/docs/react-component.html#defaultprops',
            tag: 'Class Property',
          },
          {
            title: 'displayName',
            href: 'https://reactjs.org/docs/react-component.html#displayname',
            tag: 'Class Property',
          },
          {
            title: 'props',
            href: 'https://reactjs.org/docs/react-component.html#props',
            tag: 'Instance Property',
          },
          {
            title: 'state',
            href: 'https://reactjs.org/docs/react-component.html#state',
            tag: 'Instance Property',
          },
        ]}
      />
    );
  }
}

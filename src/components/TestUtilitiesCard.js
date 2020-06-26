import React from 'react';
import CardList from './CardList.js';

export default class TestUtilitiesCard extends React.Component {
  render() {
    return (
      <CardList
        title="Test Utilities"
        actionUrl="https://reactjs.org/docs/test-utils.html"
        list={[
          {
            title: 'act()',
            href: 'https://reactjs.org/docs/test-utils.html#act',
          },
          {
            title: 'mockComponent()',
            href: 'https://reactjs.org/docs/test-utils.html#mockcomponent',
          },
          {
            title: 'isElement()',
            href: 'https://reactjs.org/docs/test-utils.html#iselement',
          },
          {
            title: 'isElementOfType()',
            href: 'https://reactjs.org/docs/test-utils.html#iselementoftype',
          },
          {
            title: 'isDOMComponent()',
            href: 'https://reactjs.org/docs/test-utils.html#isdomcomponent',
          },
          {
            title: 'isCompositeComponent()',
            href: 'https://reactjs.org/docs/test-utils.html#iscompositecomponent',
          },
          {
            title: 'isCompositeComponentWithType()',
            href: 'https://reactjs.org/docs/test-utils.html#iscompositecomponentwithtype',
          },
          {
            title: 'findAllInRenderedTree()',
            href: 'https://reactjs.org/docs/test-utils.html#findallinrenderedtree',
          },
          {
            title: 'scryRenderedDOMComponentsWithClass()',
            href: 'https://reactjs.org/docs/test-utils.html#scryrendereddomcomponentswithclass',
          },
          {
            title: 'findRenderedDOMComponentWithClass()',
            href: 'https://reactjs.org/docs/test-utils.html#findrendereddomcomponentwithclass',
          },
          {
            title: 'scryRenderedDOMComponentsWithTag()',
            href: 'https://reactjs.org/docs/test-utils.html#scryrendereddomcomponentswithtag',
          },
          {
            title: 'findRenderedDOMComponentWithTag()',
            href: 'https://reactjs.org/docs/test-utils.html#findrendereddomcomponentwithtag',
          },
          {
            title: 'scryRenderedComponentsWithType()',
            href: 'https://reactjs.org/docs/test-utils.html#scryrenderedcomponentswithtype',
          },
          {
            title: 'findRenderedComponentWithType()',
            href: 'https://reactjs.org/docs/test-utils.html#findrenderedcomponentwithtype',
          },
          {
            title: 'renderIntoDocument()',
            href: 'https://reactjs.org/docs/test-utils.html#renderintodocument',
          },
          { title: 'Simulate', href: 'https://reactjs.org/docs/test-utils.html#simulate' },
        ]}
      />
    );
  }
}

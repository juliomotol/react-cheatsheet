import React from 'react';
import CardList from './CardList.js';

export default class HooksCard extends React.Component {
  render() {
    return (
      <CardList
        title="Hooks"
        actionUrl="https://reactjs.org/docs/hooks-reference.html"
        list={[
          {
            title: 'useState()',
            href: 'https://reactjs.org/docs/hooks-reference.html#usestate',
            tag: 'Basic',
          },
          {
            title: 'useEffect()',
            href: 'https://reactjs.org/docs/hooks-reference.html#useeffect',
            tag: 'Basic',
          },
          {
            title: 'useContext()',
            href: 'https://reactjs.org/docs/hooks-reference.html#usecontext',
            tag: 'Basic',
          },
          {
            title: 'useReducer()',
            href: 'https://reactjs.org/docs/hooks-reference.html#usereducer',
          },
          {
            title: 'useCallback()',
            href: 'https://reactjs.org/docs/hooks-reference.html#usecallback',
          },
          {
            title: 'useMemo()',
            href: 'https://reactjs.org/docs/hooks-reference.html#usememo',
          },
          {
            title: 'useRef()',
            href: 'https://reactjs.org/docs/hooks-reference.html#useref',
          },
          {
            title: 'useImperativeHandle()',
            href: 'https://reactjs.org/docs/hooks-reference.html#useimperativehandle',
          },
          {
            title: 'useLayoutEffect()',
            href: 'https://reactjs.org/docs/hooks-reference.html#uselayouteffect',
          },
          {
            title: 'useDebugValue()',
            href: 'https://reactjs.org/docs/hooks-reference.html#usedebugvalue',
          },
        ]}
      />
    );
  }
}

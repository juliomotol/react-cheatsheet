import React from 'react';
import { Divider } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class HooksCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title="Hooks" actionUrl="https://reactjs.org/docs/hooks-reference.html" />
        <Divider />
        <List>
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#usestate"
            text="useState()"
            tag="Basic"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#useeffect"
            text="useEffect()"
            tag="Basic"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#usecontext"
            text="useContext()"
            tag="Basic"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#usereducer"
            text="useReducer()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#usecallback"
            text="useCallback()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#usememo"
            text="useMemo()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#useref"
            text="useRef()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#useimperativehandle"
            text="useImperativeHandle()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
            text="useLayoutEffect()"
          />
          <TaggedListItem
            actionUrl="https://reactjs.org/docs/hooks-reference.html#usedebugvalue"
            text="useDebugValue()"
          />
        </List>
      </Card>
    );
  }
}

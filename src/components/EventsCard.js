import React from 'react';
import { Divider, Link, CardActions, Typography, ListItem, List as MuiList, ListItemText } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import ExpandableListItem from './ExpandableListItem.js';

export default class EventsCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Events"
          actionUrl="https://reactjs.org/docs/events.html"
        />
        <Divider />
        <List>
          <ExpandableListItem
            text="Clipboard Events"
            actionUrl="https://reactjs.org/docs/events.html#clipboard-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onCopy" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onCut" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPaste" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Composition Events"
            actionUrl="https://reactjs.org/docs/events.html#composition-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onCompositionEnd" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onCompositionStart" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onCompositionUpdate" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Keyboard Events"
            actionUrl="https://reactjs.org/docs/events.html#keyboard-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onKeyDown" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onKeyPress" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onKeyUp" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Focus Events"
            actionUrl="https://reactjs.org/docs/events.html#focus-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onFocus" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onBlur" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Form Events"
            actionUrl="https://reactjs.org/docs/events.html#form-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onChange" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onInput" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onInvalid" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onReset" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onSubmit" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Generic Events"
            actionUrl="https://reactjs.org/docs/events.html#generic-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onError" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onLoad" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Mouse Events"
            actionUrl="https://reactjs.org/docs/events.html#mouse-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onClick" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onContextMenu" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDoubleClick" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDrag" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDragEnd" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDragEnter" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDragExit" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDragLeave" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDragOver" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDragStart" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDrop" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onMouseDown" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onMouseEnter" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onMouseLeave" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onMouseMove" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onMouseOut" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onMouseOver" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onMouseUp" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Pointer Events"
            actionUrl="https://reactjs.org/docs/events.html#pointer-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onPointerDown" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPointerMove" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPointerUp" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPointerCancel" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onGotPointerCapture" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onLostPointerCapture" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPointerEnter" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPointerLeave" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPointerOver" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPointerOut" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Selection Events"
            actionUrl="https://reactjs.org/docs/events.html#selection-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onSelect" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Touch Events"
            actionUrl="https://reactjs.org/docs/events.html#touch-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onTouchCancel" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onTouchEnd" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onTouchMove" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onTouchStart" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="UI Events"
            actionUrl="https://reactjs.org/docs/events.html#ui-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onScroll" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Wheel Events"
            actionUrl="https://reactjs.org/docs/events.html#wheel-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onWheel" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Media Events"
            actionUrl="https://reactjs.org/docs/events.html#media-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onAbort" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onCanPlay" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onCanPlayThrough" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onDurat" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onChange" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onEmptied" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onEncrypted" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onEnded" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onError" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onLoadedData" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onLoadedMetadata" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onLoadStart" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPause" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPlay" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onPlaying" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onProgress" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onRateChange" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onSeeked" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onSeeking" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onStalled" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onSuspend" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onTimeUpdate" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onVolumeChange" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onWaiting" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Image Events"
            actionUrl="https://reactjs.org/docs/events.html#image-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onLoad" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onError" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Animation Events"
            actionUrl="https://reactjs.org/docs/events.html#animation-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onAnimationStart" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onAnimationEnd" />
              </ListItem>
              <ListItem dense>
                <ListItemText primary="onAnimationIteration" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Transition Events"
            actionUrl="https://reactjs.org/docs/events.html#transition-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onTransitionEnd" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
          <ExpandableListItem
            text="Other Events"
            actionUrl="https://reactjs.org/docs/events.html#other-events"
          >
            <MuiList disablePadding>
              <ListItem dense>
                <ListItemText primary="onToggle" />
              </ListItem>
            </MuiList>
          </ExpandableListItem>
        </List>
        <Divider />
        <CardActions>
          <Typography>
            All these events are extended from&nbsp;
            <Link
              href="https://reactjs.org/docs/events.html#overview"
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
            >
              Synthetic Events
            </Link>
            . See also&nbsp;
            <Link
              href="https://reactjs.org/docs/events.html#event-pooling"
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
            >
              Event Pooling
            </Link>
            .
          </Typography>
        </CardActions>
      </Card>
    );
  }
}

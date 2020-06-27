import React from 'react';
import CardList from './CardList.js';
import { Typography, Link } from '@material-ui/core';

export default class EventsCard extends React.Component {
  render() {
    return (
      <CardList
        title="Events"
        actionUrl="https://reactjs.org/docs/events.html"
        list={[
          {
            title: 'Clipboard Events',
            href: 'https://reactjs.org/docs/events.html#clipboard-events',
            subList: [{ title: 'onCopy' }, { title: 'onCut' }, { title: 'onPaste' }],
          },
          {
            title: 'Composition Events',
            href: 'https://reactjs.org/docs/events.html#composition-events',
            subList: [{ title: 'onCompositionEnd' }, { title: 'onCompositionStart' }, { title: 'onCompositionUpdate' }],
          },
          {
            title: 'Keyboard Events',
            href: 'https://reactjs.org/docs/events.html#keyboard-events',
            subList: [{ title: 'onKeyDown' }, { title: 'onKeyPress' }, { title: 'onKeyUp' }],
          },
          {
            title: 'Focus Events',
            href: 'https://reactjs.org/docs/events.html#focus-events',
            subList: [{ title: 'onFocus' }, { title: 'onBlur' }],
          },
          {
            title: 'Form Events',
            href: 'https://reactjs.org/docs/events.html#form-events',
            subList: [
              { title: 'onChange' },
              { title: 'onInput' },
              { title: 'onInvalid' },
              { title: 'onReset' },
              { title: 'onSubmit' },
            ],
          },
          {
            title: 'Generic Events',
            href: 'https://reactjs.org/docs/events.html#generic-events',
            subList: [{ title: 'onError' }, { title: 'onLoad' }],
          },
          {
            title: 'Mouse Events',
            href: 'https://reactjs.org/docs/events.html#mouse-events',
            subList: [
              { title: 'onClick' },
              { title: 'onContextMenu' },
              { title: 'onDoubleClick' },
              { title: 'onDrag' },
              { title: 'onDragEnd' },
              { title: 'onDragEnter' },
              { title: 'onDragExit' },
              { title: 'onDragLeave' },
              { title: 'onDragOver' },
              { title: 'onDragStart' },
              { title: 'onDrop' },
              { title: 'onMouseDown' },
              { title: 'onMouseEnter' },
              { title: 'onMouseLeave' },
              { title: 'onMouseMove' },
              { title: 'onMouseOut' },
              { title: 'onMouseOver' },
              { title: 'onMouseUp' },
            ],
          },
          {
            title: 'Pointer Events',
            href: 'https://reactjs.org/docs/events.html#pointer-events',
            subList: [
              { title: 'onPointerDown' },
              { title: 'onPointerMove' },
              { title: 'onPointerUp' },
              { title: 'onPointerCancel' },
              { title: 'onGotPointerCapture' },
              { title: 'onLostPointerCapture' },
              { title: 'onPointerEnter' },
              { title: 'onPointerLeave' },
              { title: 'onPointerOver' },
              { title: 'onPointerOut' },
            ],
          },
          {
            title: 'Selection Events',
            href: 'https://reactjs.org/docs/events.html#selection-events',
            subList: [{ title: 'onSelect' }],
          },
          {
            title: 'Touch Events',
            href: 'https://reactjs.org/docs/events.html#touch-events',
            subList: [
              { title: 'onTouchCancel' },
              { title: 'onTouchEnd' },
              { title: 'onTouchMove' },
              { title: 'onTouchStart' },
            ],
          },
          {
            title: 'UI Events',
            href: 'https://reactjs.org/docs/events.html#ui-events',
            subList: [{ title: 'onScroll' }],
          },
          {
            title: 'Wheel Events',
            href: 'https://reactjs.org/docs/events.html#wheel-events',
            subList: [{ title: 'onWheel' }],
          },
          {
            title: 'Media Events',
            href: 'https://reactjs.org/docs/events.html#media-events',
            subList: [
              { title: 'onAbort' },
              { title: 'onCanPlay' },
              { title: 'onCanPlayThrough' },
              { title: 'onDurat' },
              { title: 'onChange' },
              { title: 'onEmptied' },
              { title: 'onEncrypted' },
              { title: 'onEnded' },
              { title: 'onError' },
              { title: 'onLoadedData' },
              { title: 'onLoadedMetadata' },
              { title: 'onLoadStart' },
              { title: 'onPause' },
              { title: 'onPlay' },
              { title: 'onPlaying' },
              { title: 'onProgress' },
              { title: 'onRateChange' },
              { title: 'onSeeked' },
              { title: 'onSeeking' },
              { title: 'onStalled' },
              { title: 'onSuspend' },
              { title: 'onTimeUpdate' },
              { title: 'onVolumeChange' },
              { title: 'onWaiting' },
            ],
          },
          {
            title: 'Image Events',
            href: 'https://reactjs.org/docs/events.html#image-events',
            subList: [{ title: 'onLoad' }, { title: 'onError' }],
          },
          {
            title: 'Animation Events',
            href: 'https://reactjs.org/docs/events.html#animation-events',
            subList: [{ title: 'onAnimationStart' }, { title: 'onAnimationEnd' }, { title: 'onAnimationIteration' }],
          },
          {
            title: 'Transition Events',
            href: 'https://reactjs.org/docs/events.html#transition-events',
            subList: [{ title: 'onTransitionEnd' }],
          },
          {
            title: 'Other Events',
            href: 'https://reactjs.org/docs/events.html#other-events',
            subList: [{ title: 'onToggle' }],
          },
        ]}
        cardActions={
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
        }
      />
    );
  }
}

import React from 'react';
import { IconButton, CardHeader as MuiCardHeader, Link } from '@material-ui/core';
import { Launch } from '@material-ui/icons';

export default class CardHeader extends React.Component {
  render() {
    let { title, subheader, actionUrl } = this.props;

    return (
      <MuiCardHeader
        title={title}
        subheader={subheader}
        action={
          actionUrl && (
            <Link href={actionUrl} color="inherit" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="view page">
                <Launch aria-label="open page" />
              </IconButton>
            </Link>
          )
        }
      />
    );
  }
}

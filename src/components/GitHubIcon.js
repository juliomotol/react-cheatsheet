import React from 'react';
import { SvgIcon } from '@material-ui/core';

export default class GitHubIcon extends React.Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path
          d="M12,1.5C6.2,1.5,1.5,6.3,1.5,12.3c0,4.8,3,8.8,7.2,10.2c0.1,0,0.1,0,0.2,0c0.4,0,0.5-0.3,0.5-0.5c0-0.3,0-0.9,0-1.8
          c-0.3,0.1-0.7,0.1-1.1,0.1c-2,0-2.5-1.6-2.5-1.6c-0.5-1.2-1.2-1.6-1.2-1.6c-0.9-0.6,0-0.7,0.1-0.7h0c1.1,0.1,1.6,1.1,1.6,1.1
          c0.5,0.9,1.2,1.2,1.9,1.2c0.4,0,0.8-0.1,1.2-0.3c0.1-0.7,0.4-1.2,0.7-1.4c-2.3-0.3-4.8-1.2-4.8-5.3c0-1.2,0.4-2.1,1.1-2.9
          C6.3,8.5,5.9,7.4,6.5,6c0.1,0,0.2,0,0.2,0c0.4,0,1.2,0.1,2.7,1.1c1.7-0.5,3.5-0.5,5.3,0c1.4-1,2.3-1.1,2.7-1.1c0.1,0,0.2,0,0.2,0
          c0.6,1.5,0.2,2.6,0.1,2.8c0.7,0.8,1.1,1.7,1.1,2.9c0,4.1-2.5,5-4.8,5.3c0.4,0.3,0.7,1,0.7,2c0,1.4,0,2.6,0,3c0,0.3,0.1,0.5,0.5,0.5
          c0.1,0,0.1,0,0.2,0c4.2-1.4,7.2-5.5,7.2-10.2C22.5,6.3,17.8,1.5,12,1.5z"
        />
      </SvgIcon>
    );
  }
}

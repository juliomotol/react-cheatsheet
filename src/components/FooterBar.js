import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import './FooterBar.scss';

export default class FooterBar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar variant="dense" className="footer-bar_tool-bar">
          <Typography variant="body2" align="center">
            Maintained by&nbsp;
            <Link href="https://github.com/juliomotol" color="inherit">
              juliomotol
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

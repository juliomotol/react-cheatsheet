import React from 'react';
import Axios from 'axios';
import { AppBar, Toolbar, Typography, IconButton, Chip, Link, Hidden } from '@material-ui/core';
import { StarOutlined } from '@material-ui/icons';
import GitHubIcon from './GitHubIcon';
import './HeaderBar.scss';

export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { stargazersCount: 0 };
  }

  async componentDidMount() {
    let response = await Axios.get('https://api.github.com/repos/juliomotol/react-cheatsheet');

    this.setState({ stargazersCount: response.data.stargazers_count });
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography className="app-bar_title" variant="h6">
            React Cheatsheet
          </Typography>
          <Chip label={'v' + React.version} />
          <section className="app-bar_spacer" />
          <Hidden xsDown>
            <Chip label={this.state.stargazersCount} deleteIcon={<StarOutlined />} onDelete={() => {}} />
          </Hidden>
          <Link href="https://github.com/juliomotol/react-cheatsheet" color="inherit">
            <IconButton aria-label="view on github" color="inherit" edge="end">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

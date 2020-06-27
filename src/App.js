import React from 'react';
import { Box, Grid, ThemeProvider, Paper, createMuiTheme, Slide } from '@material-ui/core';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import ReactAPICard from './components/ReactAPICard';
import HooksCard from './components/HooksCard';
import ReactComponentLifecycleCard from './components/ReactComponentLifecycleCard';
import ReactComponentInstanceCard from './components/ReactComponentInstanceCard';
import ReactDOMCard from './components/ReactDOMCard';
import ReactDOMServerCard from './components/ReactDOMServerCard';
import DOMElementAttributesCard from './components/DOMElementAttributesCard';
import EventsCard from './components/EventsCard';
import TestUtilitiesCard from './components/TestUtilitiesCard';
import TestRendererAPICard from './components/TestRendererAPICard';
import TestRendererInstanceCard from './components/TestRendererInstanceCard';
import TestInstanceCard from './components/TestInstanceCard';
import './App.scss';

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  palette: {
    primary: {
      main: '#1f2128',
      contrastText: '#61dafb',
    },
    secondary: {
      main: '#61dafb',
      contrastText: '#282C34',
    },
    background: {
      paper: '#f7f7f7',
      default: '#fff',
    },
  },
  overrides: {
    MuiCard: {
      root: {
        background: '#fff',
      },
    },
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeModalIsActive: false,
    };
  }

  handleCardListClick = (key) => {
    console.log(key);
    this.setState({ iframeModalIsActive: true });
  };

  handleClose = () => this.setState({ iframeModalIsActive: false });

  render() {
    return (
      <main className="app">
        <ThemeProvider theme={theme}>
          <Slide direction="down" timeout={500} appear in>
            <HeaderBar />
          </Slide>
          <Paper square elevation={0}>
            <Box className="app_container" p={2}>
              <Grid container className="app_grid" spacing={2} wrap="nowrap">
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <ReactAPICard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <HooksCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <ReactComponentLifecycleCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <ReactComponentInstanceCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <ReactDOMCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <ReactDOMServerCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <DOMElementAttributesCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <EventsCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <TestUtilitiesCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <TestRendererAPICard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <TestRendererInstanceCard />
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide direction="left" timeout={500} appear in>
                    <TestInstanceCard />
                  </Slide>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Slide direction="up" timeout={500} appear in>
            <FooterBar />
          </Slide>
        </ThemeProvider>
      </main>
    );
  }
}

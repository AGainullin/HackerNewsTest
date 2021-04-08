import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/main.scss';
import Grid from '@material-ui/core/Grid';
import logo from './assets/image/logo.svg';
import NewsList from './components/news-list';
import ScrollToTop from './utils/scroll-to-top';

function App(): React.ReactElement {
  const year = new Date();
  return (
    <Container className="wrapper">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Grid container spacing={10} alignItems="center" className="header">
            <Grid item xs={6} className="logo">
              <a href="/">
                <img src={logo} />
              </a>
            </Grid>
            <Grid item xs={6} className="logoText">
              <h3>Hacker News Test</h3>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className="content">
          <BrowserRouter>
            <ScrollToTop />
            <NewsList />
          </BrowserRouter>
        </Grid>

        <Grid item>
          <footer>&copy; Hacker News {year.getFullYear()}</footer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

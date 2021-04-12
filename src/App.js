import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.component.jsx'
import StartUpPage from './pages/startup/StartUpPage.component'
import LearnPage from './pages/learn/LearnPage.component'
import StartUpProjectPage from './pages/startup-project/StartupProjectPage.component'
import CourseProjectPage from './pages/course-project/CourseProjectPage.component'
import ScrollUp from './components/ScrollUp.component'

import theme from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: "#fff",
    margin: "7rem auto 1rem auto",
    paddingTop: "1.5rem",
    width: "100%",
    maxWidth: "1200px",

  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollUp showBelow={250} />
          <Navbar />
          <Box borderRadius={20} className={classes.pageContainer}>
            <Switch>
              <Route exact path='/' component={StartUpPage} />
              <Route exact path='/learn' component={LearnPage} />
              <Route exact path='/startup-project' component={StartUpProjectPage} />
              <Route exact path='/course-project' component={CourseProjectPage} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ThemeProvider>

    </>
  );
}

export default App;

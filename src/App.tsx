import React, { useState, useEffect } from 'react';

import Routes from './routes';
import useStyles from './AppStyles';
import AppTheme from './components/AppTheme';
import { Avatar } from '@material-ui/core';
import Hero from './components/Hero';
import { useHistory } from 'react-router-dom';

function App() {
  const classes = useStyles();
  const [activeNav, setActiveNav] = useState('/');
  const history = useHistory();

  const setActiveNavHandler = (nav: string) => {
    setActiveNav(nav);
    history.push(`/${nav}`);
  };

  useEffect(() => {
    setActiveNav(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <AppTheme
        logo={
          <Avatar className={classes.appLogo}>
            <a className={classes.appLinks} href="/">
              T.M
            </a>
          </Avatar>
        }
      >
        <Hero
          setActiveNavHandler={setActiveNavHandler}
          activeLink={activeNav}
        >
          <Routes />
        </Hero>
      </AppTheme>
    </div>
  );
}

export default App;

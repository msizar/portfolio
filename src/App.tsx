import React from 'react';

import Routes from './routes';
import useStyles from './AppStyles';
import AppTheme from './components/AppTheme';
import { Avatar } from '@material-ui/core';

function App() {
  const classes = useStyles();

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
        <Routes />
      </AppTheme>
    </div>
  );
}

export default App;

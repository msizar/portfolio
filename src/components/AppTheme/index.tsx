import React from 'react';
import clsx from 'clsx';
import { CssBaseline } from '@material-ui/core';

import useStyles from './styles';
import AppDrawer from '../Drawer';

type Props = {
  children: any;
  logo?: any;
  title?: string;
};

const AppTheme: React.FC<Props> = ({ title, logo, children }) => {
  const classes = useStyles();
  const [open] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {false && <DrawerMenu />}
          {logo}
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* to be used later  */}
      {false && <AppDrawer />}{' '}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  );
};

export default AppTheme;

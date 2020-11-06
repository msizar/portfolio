import React from 'react';
import clsx from 'clsx';
import { CssBaseline } from '@material-ui/core';

import useStyles from './styles';
import TypingAnimation from '../TypingAnimation';

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

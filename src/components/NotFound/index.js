import React from 'react';
import { Typography, Paper } from '@material-ui/core';

import styles from './styles';

const NotFound = () => {
  const classes = styles();
  return (
    <Paper className={classes.root}>
      <Typography> We have not found that page </Typography>
    </Paper>
  );
};

export default NotFound;

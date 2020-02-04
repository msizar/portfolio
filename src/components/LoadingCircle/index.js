import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';

const LoadingCircle = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.circle} size={100} thickness={4} />
    </div>
  );
};

export default LoadingCircle;

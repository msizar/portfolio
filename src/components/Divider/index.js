import React from 'react';
import { Divider } from '@material-ui/core';


import styles from './styles';


const Dividers = () => {
  const classes = styles();

  return (
    <Divider
      className={classes.divider}
    />
  );
};

export default Dividers;

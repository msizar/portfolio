import React from 'react';

import Routes from '../../routes';
import styles from './styles';
import Header from '../Header';

export default function ClippedDrawer() {
  const classes = styles();
  const navLinks = ['about', 'experience', 'contact'];

  return (
    <div className={classes.app}>
      <Header logo="T.M" navLinks={navLinks} />
      <Routes />
    </div>
  );
}

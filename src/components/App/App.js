import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


import Routes from '../../routes';
import ProfileWall from '../ProfileWall';
import styles from './styles';
import Header from '../Header';


export default function ClippedDrawer() {
  const classes = styles();
  const navLinks = ['about', 'experience', 'contact'];

  return (
    <div className={classes.app}>
      <Header logo="T.M" navLinks={navLinks} />

      <div className={classes.appBody}>
        <Routes />
      </div>
    </div>
  );
}

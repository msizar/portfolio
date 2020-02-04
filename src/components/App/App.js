import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';


import AppBar from '../AppBar';
import Routes from '../../routes';
import ProfileWall from '../ProfileWall';
import styles from './styles';


export default function ClippedDrawer() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar title="Themba Msiza">
        <div className={classes.AppNav}>
          <NavLink className={classes.AppLink} activeClassName={classes.activeAppLink} to="/" exact>About</NavLink>
          <NavLink className={classes.AppLink} activeClassName={classes.activeAppLink} to="/experience">Experience</NavLink>
          <NavLink className={classes.AppLink} activeClassName={classes.activeAppLink} to="/contact">Contact</NavLink>
        </div>
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <ProfileWall />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
}

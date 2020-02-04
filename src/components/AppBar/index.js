import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, Typography, AppBar } from '@material-ui/core';
import styles from './styles';

const Header = (props) => {
  const { children, title } = props;
  const classes = styles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.AppLogoContainer}>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </div>

        <div className={classes.navBar}>
          {children}
        </div>
      </Toolbar>


    </AppBar>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};


export default Header;

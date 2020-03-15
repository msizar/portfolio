import React from 'react';
import PropTypes from 'prop-types';
import ProfileWall from '../../components/ProfileWall';

import styles from './styles';

const Main = ({ children }) => {
  const classes = styles();
  return (
    <div>
      <div
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <ProfileWall />
      </div>

      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Main;

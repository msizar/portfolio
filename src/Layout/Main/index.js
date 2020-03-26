import React from 'react';
import PropTypes from 'prop-types';

import ProfileWall from '../../components/ProfileWall';
import styles from './styles';

const Main = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.mainRoot}>
      <div className={classes.mainLeft}>
        <ProfileWall />
      </div>

      <main className={classes.mainRight}>
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

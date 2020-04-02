import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@material-ui/core';

import ProfileWall from '../../components/ProfileWall';
import styles from './styles';

const Main = ({ children, hide }) => {
  const classes = styles();
  const isMobile = useMediaQuery(`(min-width:${600}px)`);
  const show = !(hide && !isMobile);

  return (
    <div className={classes.mainRoot}>
      {show
        && (
        <div className={classes.mainLeft}>
          <ProfileWall />
        </div>
        )}

      <main className={classes.mainRight}>
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool,
};

Main.defaultProps = {
  hide: false,
};

export default Main;

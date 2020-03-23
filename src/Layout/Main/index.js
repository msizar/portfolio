import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

import ProfileWall from '../../components/ProfileWall';
import ParticleConfig from '../../assets/constants/ParticleConfig';
import styles from './styles';

const Main = ({ children }) => {
  const classes = styles();

  return (
    <div className={classes.mainRoot}>
      <div className={classes.mainLeft}>
        <div className={classes.particles}>
          <Particles
            params={ParticleConfig}
          />
        </div>
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

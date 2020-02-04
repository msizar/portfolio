import React from 'react';

import Socials from '../Socials';
import Avatar from '../Avatar';
import picture from '../../assets/images/profile-themba-3.png';
import styles from './styles';

const ProfileWall = () => {
  const classes = styles();

  return (

    <div
      className={classes.drawer}
    >
      <div className={classes.centered}>

        <Avatar
          picture={picture}
        />
        <div
          data-aos="zoom-in"
          data-aos-offset="90"
          data-aos-delay={33}
          data-aos-duration={1000}
          data-aos-easing="ease-in-sine"
        >

          <div className={classes.introText}>
            <h1>Themba Msiza</h1>
            <h2>Software Developer</h2>
          </div>
          <Socials />
        </div>
      </div>

    </div>

  );
};

export default ProfileWall;

import React from 'react';

import useStyles from './styles';
import AboutMe from '../../components/AboutMe';

const Profile: React.FC = () => {
  const classes = useStyles();

  const animateClass =
    'animate__animated animate__zoomIn animate__slow';

  return (
    <div className={classes.homeRoot}>
      <div className={animateClass}>
        <AboutMe title={'Profile'}>
          I am Frontend Developer with 2+ years of experience and a
          BSc in Computer Science and Informatics from the University
          of Johannesburg. I am passionate about software development
          and implementing solutions that improve the olden ways of
          doing things. I am also a JavaScript enthusiast and
          Fullstack developer in the making.
        </AboutMe>
      </div>
    </div>
  );
};

export default Profile;

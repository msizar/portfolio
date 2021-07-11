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
          Iam Full-stack Developer with 4+ years of experience and a
          BSc in Computer Science and Informatics from the University
          of Johannesburg. I am passionate about software development
          and Implementing solutions that improve the olden way of
          doing things. When am not coding am jamming to some nice
          tunes or having some braai with family/friends
        </AboutMe>
      </div>
    </div>
  );
};

export default Profile;

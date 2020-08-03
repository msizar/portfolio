import React from 'react';

import useStyles from './styles';
import BadgeAvatars from '../../components/BadgeAvatars';
import TypingAnimation from '../../components/TypingAnimation';
import { SubTitle } from '../../components/Typography';
import Socials from '../../components/Socials';

const Names: React.FC = () => {
  const classes = useStyles();

  const animateClass =
    'animate__animated animate__zoomIn animate__slow';

  return (
    <div className={classes.namesRoot}>
      <div className={animateClass}>
        <BadgeAvatars />
        <div className={classes.namesHeading}>
          <TypingAnimation>THEMBA MSIZA</TypingAnimation>
          <SubTitle>Software Developer</SubTitle>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Names;

import React from 'react';

import useStyles from './styles';
import BadgeAvatars from '../../components/BadgeAvatars';
import TypingAnimation from '../../components/TypingAnimation';
import { Title } from '../../components/Typography';
import Socials from '../../components/Socials';

type Props = {
  title: string;
};

const Home: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  const animateClass =
    'animate__animated animate__zoomIn animate__slow';

  return (
    <div className={classes.homeRoot}>
      <div className={animateClass}>
        <BadgeAvatars />
        <div className={classes.heading}>
          <TypingAnimation>THEMBA MSIZA</TypingAnimation>
          <Title>Software Developer</Title>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Home;

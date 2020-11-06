import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Hero from '../../components/Hero';
import { ComponentRoutes } from '../../routes';
import { SKILLS_ICON } from '../../constants/skills';

const Home: React.FC = () => {
  const history = useHistory();
  const [activeNav, setActiveNav] = useState('/');

  const setActiveNavHandler = (nav: string) => {
    setActiveNav(`/${nav}`);
    history.push(nav);
  };

  useEffect(() => {
    setActiveNav(window.location.pathname);
    SKILLS_ICON.forEach((src) => {
      let image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <Hero
      setActiveNavHandler={setActiveNavHandler}
      activeLink={activeNav}
    >
      <ComponentRoutes active={activeNav} />
    </Hero>
  );
};

export default Home;

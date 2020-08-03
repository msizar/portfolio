import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Hero from '../../components/Hero';
import { ComponentRoutes } from '../../routes';

const Home: React.FC = () => {
  const history = useHistory();
  const [activeNav, setActiveNav] = useState('/');

  // if (active === `/${HOME}`) return <Home />;
  // if (active === `/${PROFILE}`) return <Profile />;

  const setActiveNavHandler = (nav: string) => {
    setActiveNav(`/${nav}`);
    history.push(nav);
  };

  useEffect(() => {
    setActiveNav(window.location.pathname);
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

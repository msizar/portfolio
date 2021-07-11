import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Success from '../components/Success';
import {
  HOME,
  PROFILE,
  PROJECTS,
  SKILLS,
  CONTACT,
  SUCCESS,
} from '../constants/links';
import Names from '../pages/Names';

type Props = {
  active: string;
};

export const ComponentRoutes: React.FC<Props> = ({ active }) => {
  if (active === `/${PROJECTS}`) return <Projects />;
  if (active === `/${PROFILE}`) return <Profile />;
  if (active === `/${SKILLS}`) return <Skills />;
  if (active === `/${CONTACT}`) return <Contact />;
  if (active === `/${HOME}`) return <Names />;
  if (active === `/${SUCCESS}`) return <Success />;

  return <Names />;
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

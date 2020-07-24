import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Profile from '../pages/Profile';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      {/* <Route path="/articles" component={Home} /> */}
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

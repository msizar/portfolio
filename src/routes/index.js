import React from 'react';
import { Route } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Experience from '../pages/Experience';

const AppRoutes = () => (
  <div>
    <Route exact path="/" component={About} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/experience" component={Experience} />
  </div>
);


export default AppRoutes;

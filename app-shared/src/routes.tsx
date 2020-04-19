import loadable from '@loadable/component';
import React from 'react';
import { Route } from 'react-router-dom';

const About = loadable(
  /* #__LOADABLE__ */ () => import('@app-shared/pages/About')
);

const Home = loadable(
  /* #__LOADABLE__ */ () => import('@app-shared/pages/Home')
);

const routes = [
  {
    path: '/app',
    component: Home
  },
  {
    path: '/app/about',
    component: About
  }
];

export const AppRoutes = routes.map(({ path, component }) => (
  <Route key={path} path={path} component={component} exact={true} />
));

export default routes;

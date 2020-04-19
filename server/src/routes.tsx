import loadable from '@loadable/component';
import React from 'react';
import { Route } from 'react-router-dom';

const About = loadable(
  /* #__LOADABLE__ */ () => import('@server/views/pages/About')
);
const Home = loadable(
  /* #__LOADABLE__ */ () => import('@server/views/pages/Home')
);

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];

export const PageRoutes = routes.map(({ path, component }) => (
  <Route key={path} path={path} component={component} exact={true} />
));

export default routes;

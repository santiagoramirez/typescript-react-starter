import loadable from '@loadable/component';

const About = loadable(
  /* #__LOADABLE__ */ () => import('@app/shared/pages/About')
);
const Home = loadable(
  /* #__LOADABLE__ */ () => import('@app/shared/pages/Home')
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

export default routes;

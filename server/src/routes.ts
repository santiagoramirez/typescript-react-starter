import load from '@loadable/component';

const About = load(() => import('@server/views/pages/About'));
const Home = load(() => import('@server/views/pages/Home'));

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

export default routes;

import load from '@loadable/component';

const About = load(() => import('@app/pages/About'));
const Home = load(() => import('@app/pages/Home'));

const routes = [
  {
    path: '/app',
    exact: true,
    component: Home,
    routes: [
      {
        path: '/about',
        component: About
      }
    ]
  }
];

export default routes;

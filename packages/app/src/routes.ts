import { lazy } from 'React';

const Home = lazy(() => import('@app/pages/Home'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  }
];

export default routes;

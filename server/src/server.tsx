import 'babel-polyfill';

import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import manifest from 'express-manifest-helpers';
import createError from 'http-errors';
import path from 'path';
import { lazy } from 'react';
import { matchPath } from 'react-router-dom';

import appRoutes from '@app/routes';
import renderPage from '@server/utils/render-page.tsx';

const About = lazy(() => import('@server/views/pages/about'));
const Home = lazy(() => import('@server/views/pages/home'));

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  manifest({
    manifestPath: path.join(__dirname, './../public/build/manifest.json'),
    prependPath: '/public/build/'
  })
);

app.use('/public', express.static(path.resolve(__dirname, './public')));

app.get('*', (req, res, next) => {
  const activeRoute =
    appRoutes.find((route) => matchPath(req.url, route)) || null;
  if (activeRoute) {
    res.send(renderPage(activeRoute.component));
  }
  next();
});

app.use((req, res, next) => {
  next(createError(404));
});

app.listen({ port: process.env.PORT }, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server ready at http://localhost:${process.env.PORT}`);
});

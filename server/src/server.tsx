import 'babel-polyfill';

import { ChunkExtractor } from '@loadable/server';
import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import createError from 'http-errors';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { matchPath, StaticRouter } from 'react-router-dom';

import appRoutes from '@app/shared/routes';
import pageRoutes from '@server/routes';

import App from '@app/web/app.web';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res, next) => {
  const allRoutes = [...pageRoutes, ...appRoutes];
  const activeRoute = allRoutes.find((route) => matchPath(req.url, route));

  if (!activeRoute) {
    return next();
  }

  const helmet = Helmet.renderStatic();

  const extractor = new ChunkExtractor({
    statsFile: path.resolve(__dirname, 'public/build/loadable-stats.json'),
    entrypoints: ['client']
  });

  const ChunkWrappedApp = extractor.collectChunks(
    <StaticRouter>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
      </head>
      <body>
        <div id="root">${renderToString(ChunkWrappedApp)}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.listen({ port: process.env.PORT }, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server ready at http://localhost:${process.env.PORT}`);
});

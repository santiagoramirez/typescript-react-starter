import 'babel-polyfill';

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import createError from 'http-errors';
import path from 'path';

const app: Express = express();

dotenv.config();

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('hey!');
});

app.use((req, res, next) => {
  next(createError(404));
});

app.listen({ port: process.env.PORT }, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server ready at http://localhost:${process.env.PORT}`);
});

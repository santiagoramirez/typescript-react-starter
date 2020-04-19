require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const DESKTOP_PATH = __dirname;
const DESKTOP_SRC_PATH = path.join(DESKTOP_PATH, 'src');
const DESKTOP_BUILD_PATH = path.join(DESKTOP_PATH, 'build');

const config = {
  entry: {
    'app.desktop': path.join(DESKTOP_SRC_PATH, 'app.desktop.tsx')
  },
  output: {
    path: DESKTOP_BUILD_PATH
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/index.ejs'
    }),
    new LoadablePlugin()
  ]
};

module.exports = merge([require('./../webpack.config.base.app'), config]);

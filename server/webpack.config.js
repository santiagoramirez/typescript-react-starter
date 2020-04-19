require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const DotenvPlugin = require('dotenv-webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');

const SERVER_PATH = __dirname;
const SERVER_SRC_PATH = path.join(SERVER_PATH, 'src');
const SERVER_BUILD_PATH = path.join(SERVER_PATH, 'public/build');
const SERVER_PUBLIC_PATH = '/public/build/';

const webAppConfig = {
  entry: {
    client: path.join(SERVER_SRC_PATH, 'client.tsx')
  },
  output: {
    path: SERVER_BUILD_PATH,
    publicPath: SERVER_PUBLIC_PATH
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_SERVER: 'false'
    }),
    new LoadablePlugin()
  ]
};

const webServerConfig = {
  entry: {
    server: path.join(SERVER_SRC_PATH, 'server.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: SERVER_PATH
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [{ loader: 'ignore-loader' }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_SERVER: 'true'
    }),
    new DotenvPlugin({ path: path.join(SERVER_PATH, '.env') })
  ],
  node: {
    __dirname: false
  },
  target: 'node',
  externals: [nodeExternals()]
};

module.exports = [
  merge([require('./../webpack.config.base.app'), webAppConfig]),
  merge([require('./../webpack.config.base'), webServerConfig])
];

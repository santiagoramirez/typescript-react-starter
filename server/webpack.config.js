require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const DotenvPlugin = require('dotenv-webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');

const SERVER_PATH = path.join(__dirname);
const SERVER_SRC_PATH = path.join(SERVER_PATH, 'src');

const webAppConfig = {
  entry: {
    client: path.join(SERVER_SRC_PATH, 'client.tsx')
  },
  output: {
    path: path.join(SERVER_PATH, 'public/build'),
    publicPath: '/public/build/'
  },
  plugins: [new LoadablePlugin()]
};

const webServerConfig = {
  entry: {
    server: path.join(SERVER_SRC_PATH, 'server.tsx')
  },
  output: {
    filename: '[name].js',
    path: path.join(SERVER_PATH, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [{ loader: 'ignore-loader' }]
      }
    ]
  },
  plugins: [new DotenvPlugin({ path: path.join(SERVER_PATH, '.env') })],
  node: {
    __dirname: false
  },
  target: 'node',
  externals: [nodeExternals()]
};

module.exports = [
  merge([require('monorepo/webpack.config.base.app'), webAppConfig]),
  merge([require('monorepo/webpack.config.base'), webServerConfig])
];

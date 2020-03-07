const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const SERVER_PATH = path.join(__dirname);
const SERVER_SRC_PATH = path.join(SERVER_PATH, 'src');

const webAppConfig = {
  entry: {
    app: path.join(SERVER_SRC_PATH, 'app.tsx')
  },
  output: {
    path: path.join(SERVER_PATH, 'public/build')
  }
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
  node: {
    __dirname: false
  },
  target: 'node',
  externals: [nodeExternals()]
};

module.exports = [
  merge([require('@monorepo/core/webpack.config.base.app'), webAppConfig]),
  merge([require('@monorepo/core/webpack.config.base'), webServerConfig])
];

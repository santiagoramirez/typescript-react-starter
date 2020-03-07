const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('@appname/root/webpack.config.base');
const baseAppConfig = require('@appname/root/webpack.config.base.app');

const webAppConfig = merge([
  baseAppConfig,
  {
    entry: {
      app: path.resolve(__dirname, './src/app.tsx')
    },
    output: {
      path: path.resolve(__dirname, './public/build')
    }
  }
]);

const webServerConfig = merge([
  baseConfig,
  {
    entry: {
      server: path.resolve(__dirname, './src/server.tsx')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './build')
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
  }
]);

module.exports = [webAppConfig, webServerConfig];

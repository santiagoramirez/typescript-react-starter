const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const { baseConfig, baseAppConfig } = require('./webpack.config.base');

const webAppConfig = merge([
  baseAppConfig,
  {
    entry: {
      app: path.resolve(__dirname, './app/app.web.tsx')
    },
    output: {
      path: path.resolve(__dirname, './server/public/dist')
    }
  }
]);

const webServerConfig = merge([
  baseConfig,
  {
    entry: {
      server: path.resolve(__dirname, './server/src/server.ts')
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, './server')
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

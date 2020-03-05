const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base');

const WEB_SERVER_SRC = path.resolve(__dirname, './packages/server/src');
const WEB_SERVER_DIST = path.resolve(__dirname, './packages/server/dist');

const webAppConfig = merge([
  baseConfig
  /*
  {
    entry: {
      "app.web": [
        "babel-polyfill",
        path.resolve(WEB_SERVER_SRC, "./app.web.js")
      ]
    },
    output: {
      path: path.resolve(__dirname, "./public/dist/scripts")
    }
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  */
]);

const webServerConfig = merge([
  baseConfig,
  {
    entry: {
      index: path.resolve(WEB_SERVER_SRC, './index.ts')
    },
    output: {
      path: WEB_SERVER_DIST
    },
    target: 'node',
    externals: [nodeExternals()]
  }
]);

module.exports = [webAppConfig, webServerConfig];

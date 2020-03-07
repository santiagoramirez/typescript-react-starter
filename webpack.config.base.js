require('dotenv').config();

const Dotenv = require('dotenv-webpack');
const MiniCssExtract = require('mini-css-extract-plugin');

let envConfig = {};

switch (process.env.NODE_ENV) {
  case 'development':
    envConfig = {
      mode: 'development',
      devtool: 'inline-source-map',
      watch: true
    };
    break;

  case 'production': {
    envConfig = { mode: 'production' };
    break;
  }
}

const config = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }, { loader: 'tslint-loader' }]
      }
    ]
  },
  plugins: [new Dotenv(), new MiniCssExtract()],
  resolve: {
    alias: {
      '@app': '@monorepo/app',
      '@server': '@monorepo/server'
    },
    extensions: ['.js', '.ts', '.tsx', '.scss']
  }
};

module.exports = merge([config, envConfig]);

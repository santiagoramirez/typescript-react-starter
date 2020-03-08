require('dotenv').config();

const merge = require('webpack-merge');
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
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' },
          { loader: 'tslint-loader' }
        ]
      }
    ]
  },
  plugins: [new MiniCssExtract()],
  resolve: {
    alias: {
      '@app': 'monorepo/app/src',
      '@server': 'monorepo/server/src'
    },
    extensions: ['.js', '.ts', '.tsx', '.scss']
  }
};

module.exports = merge([config, envConfig]);

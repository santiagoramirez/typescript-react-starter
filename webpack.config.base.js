require('dotenv').config();

const path = require('path');

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
      '@app/desktop': path.join(__dirname, 'app/desktop/src'),
      '@app/mobile': path.join(__dirname, 'app/mobile/src'),
      '@app/shared': path.join(__dirname, 'app/shared/src'),
      '@app/web': path.join(__dirname, 'app/web/src'),
      '@server': path.join(__dirname, 'server/src')
    },
    extensions: ['.js', '.ts', '.tsx', '.scss']
  }
};

module.exports = merge([config, envConfig]);

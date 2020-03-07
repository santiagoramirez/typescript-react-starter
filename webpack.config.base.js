const path = require('path');

const Dotenv = require('dotenv-webpack');
const MiniCssExtract = require('mini-css-extract-plugin');

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
      '@app': path.join(__dirname, './packages/app/src'),
      '@server': path.join(__dirname, './packages/server/src')
    },
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  devtool: process.env.NODE_ENV == 'development' ? 'inline-source-map' : false,
  watch: process.env.NODE_ENV == 'development' ? true : false
};

module.exports = config;

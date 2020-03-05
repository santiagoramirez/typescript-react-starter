const path = require('path');

const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const Dotenv = require('dotenv-webpack');
const Manifest = require('webpack-manifest-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const TsconfigPaths = require('tsconfig-paths-webpack-plugin');

const APP_SRC = path.resolve(__dirname, './packages/app');

const sassResourcesLoaderOptions = {
  resources: [
    path.resolve(APP_SRC, './styles/_variables.scss'),
    path.resolve(APP_SRC, './styles/_extends.scss')
  ]
};

const config = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }, { loader: 'tslint-loader' }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: MiniCssExtract.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: sassResourcesLoaderOptions
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new Manifest(),
    new MiniCssExtract({
      filename: 'dist/styles/[name].[contenthash].css'
    }),
    new CleanObsoleteChunks()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    plugins: [new TsconfigPaths()]
  },
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  devtool: process.env.NODE_ENV == 'development' ? 'inline-source-map' : false
};

module.exports = config;

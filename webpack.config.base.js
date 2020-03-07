const path = require('path');
const merge = require('webpack-merge');

const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const Dotenv = require('dotenv-webpack');
const Manifest = require('webpack-manifest-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const TsconfigPaths = require('tsconfig-paths-webpack-plugin');

const baseConfig = {
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
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    plugins: [new TsconfigPaths()]
  },
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  devtool: process.env.NODE_ENV == 'development' ? 'inline-source-map' : false,
  watch: process.env.NODE_ENV == 'development' ? true : false
};

const baseAppConfig = merge([
  baseConfig,
  {
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js'
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [
            { loader: MiniCssExtract.loader },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.resolve(__dirname, './app/styles/_variables.scss'),
                  path.resolve(__dirname, './app/styles/_extends.scss')
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [new Manifest(), new CleanObsoleteChunks()]
  }
]);

module.exports = {
  baseConfig,
  baseAppConfig
};

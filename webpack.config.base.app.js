const path = require('path');
const merge = require('webpack-merge');

const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const Manifest = require('webpack-manifest-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

const config = {
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
};

module.exports = merge([require('@monorepo/core/webpack.config.base'), config]);

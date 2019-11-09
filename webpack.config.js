const path = require("path");

const CleanObsoleteChunks = require("webpack-clean-obsolete-chunks");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const sassResourcesLoaderOptions = {
  resources: [
    path.resolve(__dirname, "./src/styles/_variables.scss"),
    path.resolve(__dirname, "./src/styles/_extends.scss")
  ]
}

const config = {
  entry: {
    polyfill: "babel-polyfill",
    app: path.join(__dirname, "./src/app.tsx")
  },
  output: {
    path: __dirname,
    filename: "dist/scripts/[name].[contenthash].bundle.js",
    chunkFilename: "dist/scripts/chunks/[name].[contenthash].chunk.js"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        },
      }
    }
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        { loader: "ts-loader" },
        { loader: "tslint-loader" }
      ]
    }, {
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: "css-loader" },
        { loader: "postcss-loader" },
        { loader: "sass-loader" },
        { loader: "sass-resources-loader", options: sassResourcesLoaderOptions }
      ]
    }]
  },
  plugins: [
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "dist/styles/[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      title: "TypeScript React App",
      template: "index.ejs"
    }),
    new CleanObsoleteChunks()
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss"],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  mode: process.env.NODE_ENV,
  devtool: (process.env.NODE_ENV === "development") ? "inline-source-map" : false
}

module.exports = config;

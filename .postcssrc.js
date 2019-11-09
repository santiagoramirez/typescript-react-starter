module.exports = {
  plugins: {
    "autoprefixer": {
      flexbox: "no-2009",
    },
    "postcss-preset-env": {
      stage: 3
    },
    "postcss-assets": {
      loadPaths: [
        "static/images/"
      ]
    },
    "postcss-sprites": {
      spritePath: "./dist/images",
      basePath: "/dist/images"
    }
  }
}

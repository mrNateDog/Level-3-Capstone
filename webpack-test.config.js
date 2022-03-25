//recommended by Jasmine docs
const glob = require("glob");
//const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: glob.sync("spec/**/*Spec.js?(x)"),
  output: {
    filename: "test.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        options: {
          customize: require.resolve(
            "babel-preset-react-app/webpack-overrides"
          ),
          presets: [
            [
              require.resolve("babel-preset-react-app"),
              { runtime: "automatic" },
            ],
          ],
        },
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    vendor: ["react", "react-dom", "lodash"],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "dist"),
    library: "[name]_library",
    clean: true,
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_library",
      path: path.resolve(__dirname, "dist/[name].manifest.json"),
    }),
  ],
};

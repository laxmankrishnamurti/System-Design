const path = require("path")
const webpack = require("webpack")
const htmlwebpackplugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new htmlwebpackplugin({
            title: "Testing DLL and DLLREFERENCEPLUGIN"
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require("./dist/vendor.manifest.json")
        })
    ]
}
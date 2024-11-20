const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        another: './src/anotherModule',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Code Splitting"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    optimization: {
        runtimeChunk: 'single'
    }
}
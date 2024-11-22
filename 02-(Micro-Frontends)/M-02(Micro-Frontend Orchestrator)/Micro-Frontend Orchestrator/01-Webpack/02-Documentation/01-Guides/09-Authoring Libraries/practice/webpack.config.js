const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new htmlWebpackPlugin({
            title: "Custom Library Testing"
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-number.js',
        globalObject: 'this',
        library: {
            name: 'webpackNumbers',
            type: 'umd'
        },
        clean: true
    }
}
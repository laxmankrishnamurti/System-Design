const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/index.js']
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Dynamic imports"
        })
    ]
    ,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env) => {
    console.log(env)
    console.log(env.goal)

    return {
        mode: 'development',
        entry: './src/index.js',
        plugins: [
            new htmlWebpackPlugin({
                title: "Environment variables in webpack"
            })
        ]
        ,
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        }
    }
}
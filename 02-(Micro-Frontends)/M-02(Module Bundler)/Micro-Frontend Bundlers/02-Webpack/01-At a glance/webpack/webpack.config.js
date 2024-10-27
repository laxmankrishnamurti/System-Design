const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
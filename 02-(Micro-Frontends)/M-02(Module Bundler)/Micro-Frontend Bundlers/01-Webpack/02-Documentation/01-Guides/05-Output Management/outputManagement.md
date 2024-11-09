# Output Management

So far we've manually included all our assets in our index.html file, but as our application grows and once you start using hashes in filenames and outputting multiple bundles, it will be difficult to keep managing our index.html file manually. However, a few plugins exist that will make this process much easier to manage.

```js
// Dynamically generating the file name and linked to HTML file.

const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

But what if we change the entry file name without changing in HTML it means it still refrencing the old file name that can give errors.

Let's fix that with the _HtmlWebpackPlugin_

## Setting up HtmlWebpackPlugin

- Install the plugin and adjust the _webpack.config.js_ file.

```bash
$ npm install --save-dev html-webpack-plugin
```

- Adjust the configuration file with this one.

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
  new HtmlWebpackPlugin({
    title: "Output Management", // This will be the title for the HTML document
  }),
];
```

Before running the _npm run build_ command one thing which we should keep in mind is the _HtmlWebpackPlugin_ will also generate it's own HTML file. Although, we have already a HTML file in the _dist_ directory.

**_This means that it will replace the existing HTML file with the new one._**

[Learn more about HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

## Cleaning up the _/dist_ folder

It's a good practice to clean the _/dist_ directory before each build, so that we used files will be generated.

```js
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
  clean: true
}
```

It will delete all older folders which are not a part of the build process. Basically, it will delete all the previous built file and generate all new files from scratch.

And then run the build command

```bash
$ npm run build
```

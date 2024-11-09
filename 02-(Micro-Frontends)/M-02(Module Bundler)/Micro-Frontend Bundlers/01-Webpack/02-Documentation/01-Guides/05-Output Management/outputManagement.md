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

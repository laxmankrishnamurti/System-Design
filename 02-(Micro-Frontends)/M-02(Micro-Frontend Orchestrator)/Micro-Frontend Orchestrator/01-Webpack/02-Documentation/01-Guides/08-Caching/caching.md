# Caching

This is a very important step for any web application. We are using webpack for bundle our modular application which yields a deployable _/dist_ directory. Once the content of _/dist_ have been deployed to a server, clients(typically a browser) will hit that server to grab the site and its assets.

The last step, grabbing site's assets is a time comsuming process, which is why browsers use a technique called **Caching.**

This allows sites to load faster with less unnecessary network traffic.

In this section we'll learn about those configuration that will ensure the files producced by webpack compilation can remain cached unless their content has changed.

## Output Filenames

Webpack uses the concept of **substitutions**. What does it mean?

Substitutions means **the action of replacing something with another thing.**

We can use the output.filename substitutions setting to define the names of our output files. Webpack provides a method of templating the filenames using bracketed strings called **substitutions**

The [contenthash] substitution will add a unique hash based on the content of an asset. When the asset's content changes, [contenthash] will change as well.

[Checkout](./practice/webpack.config.js)

Webpack includes certain boilerplate, specifically the runtime and manifest, in the entry chunk cause filename is changing eventhough we did not make any change in the code.

**Output may differ depending on our current webpack version. Newer versions may not have all the same issues with hashing as some older versions, but we still recommend the following steps to be safe.**

## Extracting Boilerplate

As we learned in code splitting, the SplitChunksPlugin can be used to split modules out into separate bundles. Webpack provides an optimization feature to split runtime code into a separate chunk using the optimization.runtimeChunk option. Set it to single to create a single runtime bundle for all chunks:

[Checkout](./practice/webpack.config.js)

```js
optimization: {
    runtimeChunk: 'single',
}
```

```bash
npm run build

> src@1.0.0 build
> webpack

asset vendors-node_modules_lodash_lodash_js.779d01e83250a9047180.js 550 KiB [emitted] [immutable] (id hint: vendors)
asset runtime.b72d1419b5196b05dd73.js 14.8 KiB [emitted] [immutable] (name: runtime)
asset index.7a1bbba0356fde6df1b7.js 1.71 KiB [emitted] [immutable] (name: index)
asset index.html 321 bytes [emitted] [compared for emit]
Entrypoint index 16.5 KiB = runtime.b72d1419b5196b05dd73.js 14.8 KiB index.7a1bbba0356fde6df1b7.js 1.71 KiB
runtime modules 9.03 KiB 12 modules
cacheable modules 532 KiB
  ./src/index.js 416 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
webpack 5.96.1 compiled successfully in 1083 ms
```

- It's a good practice to extract third-party libraries or dependencies to a separate _vendor_ chunk as they are less likely to change than our source code.

- This step will allow clients to request even less from the server to stay up to date.

[Checkout](./practice/webpack.config.js)

```js
optimization: {
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
}
```

```bash
npm run build

> src@1.0.0 build
> webpack

asset vendors.4c483f57122d28ecde3a.js 550 KiB [emitted] [immutable] (name: vendors) (id hint: vendor)
asset runtime.495a9ad1bc0bb1a30c10.js 14.8 KiB [emitted] [immutable] (name: runtime)
asset index.57f858c98481847a605c.js 1.69 KiB [emitted] [immutable] (name: index)
asset index.html 321 bytes [emitted] [compared for emit]
Entrypoint index 16.5 KiB = runtime.495a9ad1bc0bb1a30c10.js 14.8 KiB index.57f858c98481847a605c.js 1.69 KiB
runtime modules 9.03 KiB 12 modules
cacheable modules 532 KiB
  ./src/index.js 416 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
webpack 5.96.1 compiled successfully in 1835 ms
```

**Differences**

- Without splitChunks

  ```bash
    asset index.7a1bbba0356fde6df1b7.js 1.71 KiB [emitted] [immutable] (name: index)
  ```

- With splitChunks

  ```bash
    asset index.57f858c98481847a605c.js 1.69 KiB [emitted] [immutable] (name: index)
  ```

_Size from 1.71KiB to 1.69KiB_

## Module Identifiers

- When we make any changes in the build file.
- It's filename name will be changed as well.

[Checkout](./practice/src/print.js)

- Recap:
  - The _main_ bundle changed because of its new content.
  - The _vendor_ bundle changed because its _module.id_ was changed.
  - And, the _runtime_ bundle changed because it now contain a reference to the new module.

Lets fix the _module.id_

```js
optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
}
```

This setting might useful in the current veersion of webpack, because webpack handles it automatically.

## Conclusion

Caching can be complicated, but the benefit to application or site users makes it worth the effort.

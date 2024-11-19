# Asset Management

Prior to webpack, front-end developers would use tools like _grunt_ and _gulp_ to process assets like: images, css, ..etc and move them from their _src directory_ into their _dist directory_.

but tools like webpack will dynamically bundle all dependencies (creating what's known as a dependency graph). This is great because every module now explicitly states its dependencies and we'll avoid bundling modules that aren't in use.

One of the coolest webpack features is that we can also include any other type of file, besides JavaScript, for which there is a **_loader_** or built-in Asset Modules support. This means that the same benefits listed above for JavaScript (e.g. explicit dependencies) can be applied to everything used in building a website or web app.

## Loading CSS

**1. Inatall loader**

```bash
$ npm install --save-dev style-loader css-loader
```

[Checkout](./practice/learnings.md#1-loading-css)

## Loading Images

[Checkout](./practice/learnings.md#2-loading-images)

## Loading Fonts

The asset modules will take any file we load though and output it to the build directory. This means we can use them for any kind of file, including fonts.

[Checkout](./practice/learnings.md#3-loading-fonts)

## Loading Data

[Checkout](./practice/learnings.md#4-loading-data)

## Customize parser of JSON module

[Checkout](./practice/learnings.md#5-customize-parser-of-josn-module)

## Global Assets

[Checkout](./practice/learnings.md#6-global-assets)

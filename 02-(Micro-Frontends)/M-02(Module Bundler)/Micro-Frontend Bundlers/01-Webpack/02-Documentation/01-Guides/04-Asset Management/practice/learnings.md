# KEY TAKEAWAYS

**1. Loading CSS**

- Module loaders can be chained.
- Each loader in the chain applies transformations and processed resources and at the end it passes the result to the next loader, and so forth.
- Finally, webpack expects JavaScript to be returned by the last loader in the chain.

```js
module: {
  rules: [
    {
      test: /\.css/i,
      use: ["style-loader", "css-loader"],
    },
  ];
}
```

The above order of loaders should be maintained: **_style-loader_** comes first and followed by **_css-loader_**. If the convension is not allowed, webpack is likely to throw errors.

**_webpack uses a regular expression to determine which files it should look for and serve to a specific loader. In this case, any file that ends with .css will be served to the style-loader and the css-loader._**

- Update the JavaScript file to this.

```js
import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}
document.body.appendChild(component());
```

**2. Loading Images**

- **Add module rules in the _webpack.config.js_ file.**

```js
module: {
  rules: [
    {
      test: /\.css/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|svg|jpg|gif)$/i,
      type: "asset/resource",
    },
  ];
}
```

- **_Now, when you import MyImage from './my-image.png', that image will be processed and added to your output directory and the MyImage variable will contain the final url of that image after processing. When using the css-loader, as shown above, a similar process will occur for url('./my-image.png') within your CSS. The loader will recognize this is a local file, and replace the './my-image.png' path with the final path to the image in your output directory._**

- **import the image into JavaScript file**

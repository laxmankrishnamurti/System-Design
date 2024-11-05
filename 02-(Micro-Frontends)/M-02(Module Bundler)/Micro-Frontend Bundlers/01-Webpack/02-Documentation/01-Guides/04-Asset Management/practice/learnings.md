# KEY TAKEAWAYS

## **1. Loading CSS**

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

## **2. Loading Images**

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

## **3. Loading Fonts**

```js
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource'
}
```

```css
@font-face {
  font-family: "my-font";
  src: url(./my-font.woff2) format(".woff2"), url(./my-font.woff) format(".woff");
  font-weight: 600;
  font-style: normal;
}

.hello {
  color: red;
  background-image: url("./hero-image.png");
  font-family: "my-font";
}
```

## **4. Loading Data**

Another useful asset that can be loaded is data, like JSON files, CSVs, TSVs, and XML. Support for JSON is actually built-in, similar to NodeJS, meaning **_import Data from './data.json_**' will work by default. To import CSVs, TSVs, and XML you could use the csv-loader and xml-loader. Let's handle loading all three:

```bash
# Run the command

$ npm install --save-dev csv-loader xml-loader
```

### CSV vs XML

- **CSV (Commma-Separated Values)**

CSV files are simple text files where data is stored in tabular form, with each row representing a record and each column separated by commas (or other delimiters like semicolons).

```csv
Name,Age,Department
John Doe,28,Engineering
Jane Smith,34,Marketing
Alice Johnson,29,Design
Bob Brown,45,Human Resources
```

- **XML (Extensible Markup Language)**

The same Employee Information data can be represented in XML, which allows for a more hierarchical and self-descriptive structure.

```xml
<Employees>
    <Employee>
        <Name>John Doe</Name>
        <Age>28</Age>
        <Department>Engineering</Department>
    </Employee>
    <Employee>
        <Name>Jane Smith</Name>
        <Age>34</Age>
        <Department>Marketing</Department>
    </Employee>
    <Employee>
        <Name>Alice Johnson</Name>
        <Age>29</Age>
        <Department>Design</Department>
    </Employee>
    <Employee>
        <Name>Bob Brown</Name>
        <Age>45</Age>
        <Department>Human Resources</Department>
    </Employee>
</Employees>
```

**_apply configurations_**

```js
{
  test: /\.(csv|tsv)$/i,
  use: ['csv-loader'],
},
{
  test: /\.xml$/i,
  use: ['xml-loader']
}
```

- _import the data into any file as you want_

- The data variable we import will be converted into _JSON_ for consumption.

- _Tips ===> This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making an ajax request and parsing the data at runtime you can load it into your module during the build process so that the parsed data is ready to go as soon as the module hits the browser._

<code>Warning :: Only the default export of JSON module can be used without warning.</code>

```js
// No warning
import data from "./data.json";

//warning shown, this is not allowed.
import { data } from "./data.json";
```

## **5. Customize parser of JOSN module**

It's possible to import any _toml_, _yaml_ or _json5_ files as a _JSON module_ by using a custom parser instead of a specific webpack loader.

```bash
# install toml, yamljs, and json5 package

$ npm install --save-dev toml yamljs5 json5
```

- Let's configure them in the webpack configuration

```js
const toml = require("toml");
const json5 = require("json5");
const yaml = require("yamljs");

{
  test: /\.toml$/i,
  type: 'json',
  parser: {
      parse: toml.parse
  }
},
{
  test: /\.yaml$/i,
  type: 'json',
  parser: {
      parse: yaml.parse
  }
},
{
  test: /\.json5$/i,
  type: 'json',
  parser: {
      parse: json5.parse
  }
}
```

- _import_ the file into required module

```js
import toml from "./data.toml";
import yaml from "./data.yaml";
import json5 from ".data.json5";

console.log("toml title", toml.title);
console.log("yaml title", yaml.title);
console.log("json5 title", json5.title);
```

- Run the build command

```bash
$ npm run build
```

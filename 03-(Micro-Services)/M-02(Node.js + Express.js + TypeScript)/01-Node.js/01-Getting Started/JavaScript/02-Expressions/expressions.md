# JavaScript Expressions

Lets' revise all JavaScript operators, expressions and keywords.

## **Expressions and operators by category**

### 1. Primary Expressions

These are the basic keywords and general expressions in JavaScript

1. **this**

   - This keyword is used to referes the current context

2. **Literals**

   - A statically assigned primitive values to a variable called literals

3. **[]**

   - Array used to store multiple values in a single variable

4. **{}**

   - Object used to store vlaues in the form of key-value pairs

5. **class**

   - Used to define a class

6. **function**

   - Used to write modular code which we can use in the multiple modules and also avoid code repetation.

7. **async function**

   - This is also a type of function but this function may takes time to fully execute because of network calls.

8. **/ab+c/i**

   - This is a regular expression that is trying to find a single _ab_ or more character in the form of proceesing tokens that ends up with _c_ and this is actually a case-sensitive because of the _i_ flag.

9. **`string`**

   - This is a new sytax to write a string this feature is introduce by ES2015.

10. **()**
    - This is used to group an expression like this :- (1 + 2 + 3)

### 2. Left-hand-side expressions

This is not like a typical LHS expression like this

```js
let c = 2 + 3 * 5;
//finally c = 17
```

where c === LHS and 17 is the RHS

No LHS expressions means it is just used before. That's it.

1. **?.**

   - This is not a typical ternary operator this is actually mostly used in object to check whether an object's property is available or not which means say we are trying to access a key from an object that dosen't exist or we are not sure that whether the key is present or not. So, to avoid any kind of error we can take advantage of the _chaining operator_. If the property that we are trying to access dosen't exist it will return either _null or undefined_ rather than an error.

2. **new**

   - This is used to initiaze an object from a class. In other words, we can say this is used to create an instance of a class.

3. **new.target**

   - It is used to check whether a constructor or a class is called with _new_ keyword or not.
   - If it is, then _new.target_ referes to the constructor function or the class being called.
   - If not, it will be _undefined_

Means when we call a function with _new_ keyword it creates a new object and runs the constructor(sayHello function in this case) function in the context of that new object.

4. **import.meta**

- This is an object in JavaScript that contain _metadata(data about data)_ about the current module(file).

- It provides information specific to the module, such as its URL or environment.

```js
console.log(import.meta.url);
```

```bash
# In the browser

http://127.0.0.1:5500/System-Design-To-FullStack/03-(Micro-Services)/M-02(Node.js%20+%20Express.js%20+%20TypeScript)/01-Node.js/01-Getting%20Started/JavaScript/02-Expressions/src/index.html

# In Node Environment
file:///home/sonu/Desktop/System%20Design%20To%20FullStack/System-Design-To-FullStack/03-(Micro-Services)/M-02(Node.js%20+%20Express.js%20+%20TypeScript)/01-Node.js/01-Getting%20Started/JavaScript/02-Expressions/src/expression.js
```

- This can also be useful to import files dynamically

```js
async function loadModule() {
  const currentDir = new URL(".", import.meta.url);
  console.log("currentDir", currentDir);

  //dynamically import a module from the same directory
  const { default: fn } = await import(`${currentDir}/anotherFile.js`);
  console.log("default", fn);
  fn();
}

loadModule();
```

```js
// Output

currentDir URL {
  href: 'file:///home/sonu/Desktop/System%20Design%20To%20FullStack/System-Design-To-FullStack/03-(Micro-Services)/M-02(Node.js%20+%20Express.js%20+%20TypeScript)/01-Node.js/01-Getting%20Started/JavaScript/02-Expressions/src/',
  origin: 'null',
  protocol: 'file:',
  username: '',
  password: '',
  host: '',
  hostname: '',
  port: '',
  pathname: '/home/sonu/Desktop/System%20Design%20To%20FullStack/System-Design-To-FullStack/03-(Micro-Services)/M-02(Node.js%20+%20Express.js%20+%20TypeScript)/01-Node.js/01-Getting%20Started/JavaScript/02-Expressions/src/',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}

default [Function: sayHello]
Hello undefined!!
```

- Module bundler also uses the feature for setting environment variables.

```js
console.log(import.meta.env.MODE); // 'development' or 'production'
console.log(import.meta.env.BASE_URL); // Base URL of your app
```

5. **super**

- This is a special kind of keyword which is used in classes.
- It is used to call parent class constructor.
- It allows to access properties of the parent object

```js
class Parent {
  mode;
  result;
  constructor(mode, result) {
    this.mode = mode;
    this.result = result;
  }

  getName = function () {
    return "Parent";
  };
}

class Child extends Parent {
  process;
  constructor(num) {
    // super()
    this.process = num;
  }

  getProcesses = function () {
    return this.process;
  };
}

const childObj = new Child(10);
console.log("childObj", childObj);
```

```bash
file:///home/sonu/Desktop/System%20Design%20To%20FullStack/System-Design-To-FullStack/03-(Micro-Services)/M-02(Node.js%20+%20Express.js%20+%20TypeScript)/01-Node.js/01-Getting%20Started/JavaScript/02-Expressions/src/expression.js:114
        this.process = num
        ^

ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Child (file:///home/sonu/Desktop/System%20Design%20To%20FullStack/System-Design-To-FullStack/03-(Micro-Services)/M-02(Node.js%20+%20Express.js%20+%20TypeScript)/01-Node.js/01-Getting%20Started/JavaScript/02-Expressions/src/expression.js:114:9)
    at file:///home/sonu/Desktop/System%20Design%20To%20FullStack/System-Design-To-FullStack/03-(Micro-Services)/M-02(Node.js%20+%20Express.js%20+%20TypeScript)/01-Node.js/01-Getting%20Started/JavaScript/02-Expressions/src/expression.js:122:18
    at ModuleJob.run (node:internal/modules/esm/module_job:234:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:473:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)

Node.js v20.18.0
```

Lets fix the error by uncommenting the _super()_ keyword

```js
class Parent {
  mode;
  result;
  constructor(mode, result) {
    this.mode = mode;
    this.result = result;
  }

  getName = function () {
    return "Parent";
  };
}

class Child extends Parent {
  process;
  constructor(num) {
    super();
    this.process = num;
  }

  getProcesses = function () {
    return this.process;
  };
}

const childObj = new Child(10);
console.log("childObj", childObj);
```

```bash
# Output

childObj Child {
  mode: 'development',
  getName: [Function: getName],
  process: 10,
  getProcesses: [Function: getProcesses]
}
```

6. **import()**

This is what we have done previously. It is used to load files asynchronously and dynamically into a potentially non-module environment.

_What does it mean by non-module environment?_

A non-module environment means JavaScript code is written or executed in a more traditional or simpler context, such as:

- Plain <script> tags in HTML (default is non-modular).
- Older browsers or environments without ES Module support.
- Node.js files using CommonJS (require) instead of ES Modules.

Here, we cannot directly use **_import/export_** because the script is not treated as a module.

```html
<script>
  // we can't use `import` directly here
  console.log("This is a non-module script.");
</script>
```

### 3. Increment and Decrement

- **x++ :** Postfix increment operator
- **x-- :** Postfix decrement operator
- **++x :** Prefix increment operator
- **--x :** Prefix increment operator

### 4. Unary Operator

As per their name suggest that this is an operator with only one operand.

- **delete :** Used to delete a property from an object

```js
const user = {
  username: "laxmankrishnamurti",
  age: 22,
  getAge: function () {
    return this.age;
  },
};
```

```bash
Output

Before deleting the age property from the object { username: 'laxmankrishnamurti', age: 22, getAge: [Function: getAge] }
After deleting the age property from the object { username: 'laxmankrishnamurti' }
```

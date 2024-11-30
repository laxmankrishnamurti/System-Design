# JavaScript Expressions

Lets' revise all JavaScript operators, expressions and keywords.

1. [Primary Expressions](#1-primary-expressions)
2. [Left Hand Side Expressions](#2-left-hand-side-expressions)
3. [Increment And Decrement](#3-increment-and-decrement)
4. [Unary Operator](#4-unary-operator)
5. [Arithmetic Operators](#5-arithmetic-operators)
6. [Relational Operators](#6-relational-operator)
7. [Equality Operators](#7-equality-operators)
8. [Bitwise Shift Operators](#8-bitwise-shift-operators)
9. [Binary Bitwise Operators](#9-binary-bitwise-operators)
10. [Binary Logical Operators](#10-binary-logical-operators)
11. [Conditional Ternary Operator](#11-conditional-ternary-operator)
12. [Assignment Operator](#12-assignment-operators)
13. [Spread Operator](#13-spread-syntax)
14. [Comma Operator](#14-comma-operator)

## **Expressions and operators by category**

### `1. Primary Expressions`

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

9. **string**

   - This is a new sytax to write a string this feature is introduce by ES2015.

10. **()**
    - This is used to group an expression like this :- (1 + 2 + 3)

---

### `2. Left-hand-side expressions`

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

- Plain _script_ tags in HTML (default is non-modular).
- Older browsers or environments without ES Module support.
- Node.js files using CommonJS (require) instead of ES Modules.

Here, we cannot directly use **_import/export_** because the script is not treated as a module.

```html
<script>
  // we can't use `import` directly here
  console.log("This is a non-module script.");
</script>
```

---

### `3. Increment and Decrement`

- **x++ :** Postfix increment operator
- **x-- :** Postfix decrement operator
- **++x :** Prefix increment operator
- **--x :** Prefix increment operator

---

### `4. Unary Operator`

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

- **void :** The void operator evaluates the given expression and then returns undefined.

```js
const output = void 1;
console.log(output);
void function voidFunction() {
  console.log("vodi function is executed");
};

try {
  voidFunction();
} catch (error) {
  console.log("void function is not defined");
}
```

```bash
# Outputs

undefined
void function is not defined
```

Because _try-catch_ is only used in _async function._

- **typeof :** The operator determine the type of a given object.

- **+ :** The unary plus operator converts its operand to number type and adds it.

```js
const x = 1;
const y = -1;

console.log(+x);
console.log(+y);
console.log(+"");
console.log(+true);
console.log(+false);
console.log(+"hello");
```

```bash
# Outputs

1
-1
0
1
0
NaN
```

- **- :** Converts its operand to number type and then negates it.

```js
const x = 1;
const y = -1;

console.log(-x);
console.log(-y);
console.log(-"");
console.log(-true);
console.log(-false);
console.log(-"hello");
```

```bash
# Outputs

-1
1
-0
-1
-0
NaN
```

- **~ :** Bitwise NOT operator (1 -> 0 ; 0 -> 1) on every single bit.
- **! :** Logical not operator (inverse the value)

```js
const username = null;
if (!username) {
  console.log("falsy value");
} else {
  console.log("truthy value");
}
```

```bash
# Output

falsy value
```

- **await :** Pause and resume an async function and wait for the promise's fulfillment/rejection.

```js
function getUserAccount(username){

  const user = await USER.findOne({
    username: username
  })

  if(user){
    return {
      status: 200,
      message: "success",
      user: user
    }
  }

  return next(new CustomError("User doesn't exist!!))
}
```

The if-branch code will not execute untill the promise will not either get fulfilled or rejected.

---

### `5. Arithmetic Operators`

- ( \*\* ) : Exponential operator

- (\*) : Multiplication
- (/): Division
- (%) : Remainder
- (+) : Plus
- (-) : Subtract

### `6. Relational Operator`

- >
- <
- > =
- <=

- _instanceof_ ===> The **`instanceof`** operator determine whether an object is an instance of another object.
- _in_ ===> The **`in`** operator determines whether an object has a given property.

```js
const newUser = {
  username: "laxmankrishnamurti",
  email: "laxmankrishnamurti@gmail.com",
};

console.log(newUser instanceof Object);
console.log(newUser instanceof Array);
console.log(newUser instanceof String);
console.log("age" in newUser);
```

```bash
# Output

true
false
false
false
```

### `7. Equality operators`

The result of evaluating an equality operator is always of type boolean on whether the comparison is true.

- == ===> Equality check (ease)
- != ==> Inequality check (ease)
- === ===> Equality check (Including type)
- !== ===> Strict inequality check

### `8. Bitwise shift operators`

- << ===> Bitwise left-shift operator
- > > ===> Bitwise right-shift operator
- > > > ==> Bitwise unsigned right-shift operator

```js
console.log(5 >> 1);
console.log(5 << 1);
console.log(5 >>> 1);
```

```bash
# Output

2
10
2
```

### `9. Binary bitwise operators`

Bitwise operator treat their operands as a set of 32 bits and return standard JavaScript numerical values.

- & ===> Bitwise AND
- | ===> Bitwise OR
- ^ ===> Bitwise XOR (atleast 1 significant bit)

```js
console.log(2 & 5);
console.log(2 | 5);
console.log(2 ^ 5);
```

```bash
# Output

0
7
7
```

### `10. Binary logical operators`

- &&
- ||
- ?? (Nullish Coalescing Operator) ===> The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

```js
console.log(null ?? "laxman");
console.log(undefined ?? "harshad");
console.log("sonu" ?? 42);
console.log("harshad" ?? undefined);
```

```bash
laxman
harshad
sonu
harshad
```

### `11. Conditional (ternary) operator`

```js
const age = 18;
console.log(age >= 18 ? "Eligible to vote" : "Oops! You are a teenager");
```

```bash
# Output

Eligible to vote
```

### `12. Assignment operators`

- =
- \*=
- /=
- %= (Remainder assignment)

```js
let num = 11;
num %= 10;
console.log("num", num);
```

```bash
# Output

num 1
```

- +=
- -=
- <<= (left-shift assignment)
- > > = (right-shift assignment)
- > > > = (unsigned right-shift assignment)
- &= (Bitwise AND assignment)
- ^= (Bitwise XOR assignment)
- |= (Bitwise OR assignment)
- \*\*= (Exponential assignment)
- &&= (Logical AND assignment)
- ||= (Logical OR assignment)
- ??= (Nullish coalescing assignment)

- Destructuring assignment ===> The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
let a, b;
[a, b] = [10, 20];
console.log("a", a);
console.log("b", b);

// adding extra elements to a variable

let rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log("rest", rest);

const myProfile = {
  username: "laxmankrishnamurt",
  age: 21,
  email: "freelancing.laxman@gmail.com",
};

console.log("myProfile", myProfile);
const { age, email: userEmail } = myProfile;
console.log("age", age);
console.log("userEmail", userEmail); // Modifying existing property name to new one
```

```bash
a 10
b 20
rest [ 30, 40, 50 ]
myProfile {
  username: 'laxmankrishnamurt',
  age: 21,
  email: 'freelancing.laxman@gmail.com'
}
age 21
userEmail freelancing.laxman@gmail.com
```

### `13. Spread syntax`

As their name suggests it's used to spread values, which is iterable such as arrays, string, objects.

- Arrays ===> Spread each element of the array
- String ===> Spread each character of the string
- Object ===> Spread each properties of the object

Even though, it can also add additional vlaues into it.

```js
const marks = [90, 98, 95, 85, 75, 89];
const spreadMarksAndAddNewElement = [...marks, 100];
console.log("new arr", spreadMarksAndAddNewElement);

const myUsername = "laxmankrishnamurti";
const modifyUsername = ["new", ...myUsername];
console.log("new usernmae", modifyUsername);

const myProfileDetails = {
  username: "laxmankrishnamurti",
  age: 22,
  email: "laxmankrishnamurti@gmail.com",
};

const newProfileDetails = { ...myProfileDetails, dob: "31/10/2002" };
console.log("new Profile Details", newProfileDetails);
```

```bash
# Output

new arr [
  90, 98,  95, 85,
  75, 89, 100
]
new usernmae [
  'new', 'l', 'a', 'x',
  'm',   'a', 'n', 'k',
  'r',   'i', 's', 'h',
  'n',   'a', 'm', 'u',
  'r',   't', 'i'
]
new Profile Details {
  username: 'laxmankrishnamurti',
  age: 22,
  email: 'laxmankrishnamurti@gmail.com',
  dob: '31/10/2002'
}
```

Note: Keep in mind that the expression should be iterable with which we are going to use the spread operator.

### `14. Comma Operator`

The comman(,) operator evaluates each of its operands (from left to right) and returns the value of the last operand.

```js
let myAge = 22;
myAge = (myAge++, myAge - 10);
console.log("myAge", myAge);

let productPrice = 200;
productPrice > 150 ? (productPrice = (0, 200 - 200 * 0.15)) : productPrice;

console.log("productPrice", productPrice);
```

```bash
# Output

myAge 13
productPrice 170
```

[Back to Top](#javascript-expressions)

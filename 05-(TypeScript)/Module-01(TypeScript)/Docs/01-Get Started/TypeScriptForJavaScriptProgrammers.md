# TypeScript for JavaScript Programmers

TypeScript offers all of JavaScript's features, and an additional layer on top of these: _TypeScript's Type System_

JavaScript provides language primitives like _string_, _number_ but it does not check whether we have assigned the correct value or not. TypeScript does.

This means our existing working JavaScript code is also TypeScript code. But the difference is that TypeScript can highlight unexpected behaviour in our code, as a result we can avoid bugs in our code.

## Types by inference

TypeScript knows the JavaScript language and will generate types based on variable's value which we have assigned to with the variable.

TypeScript builds a type-system that accepts JavaScript code but has types. By this TypeScript explicitly offers inference types based on the value which we have assigned to the variable.

```js
let username = "Laxman Krishnamurti";

// syntax highlighted ===> let username: string
```

Because TypeScript knows JavaScript very well and based on the variable value it adds a type layer on top of it. As a result if we are working in a group no one can assign the variable value which is a type of _number_, _boolean_,.....etc

It can only changable if we changed the variable type explicitly. _Type inference_ done by TypeScript implicitly (automatically).

## Defining Types

However TypeScript tries their best to infer type implicitly but at some point it can't. Because we can use a wide variety of design principles in JavaScript. So, we need to define types explicitly.

```ts
let usernmae = "Laxman Krishnamurti";

// Explicitly describing the object shape
interface USER {
  name: string;
  age: number;
}

const newUser: USER = {
  name: "Harshad Mehta",
  age: 22,
};

console.log("newUser is", newUser);
console.log("username is", usernmae);
```

If we provide an object that dosen't match the interface we have provided, TypeScript will warn us:

```ts
const newUser: USER = {
  name: "Harshad Mehta",
  age: 22,
  email: "harsahadmehta@gmail.com",
};

//Warning ===> Object literal may only specify known properties, and 'email' does not exist in type 'USER'.
```

**Because, JavaScript supports OOPs style, we can use an interface declaration with classes :**

```ts
interface CUSTOMER {
  customerName: string;
  panDetails: string;
  accountNumber: number;
}

class Seller {
  customerName: string;
  panDetails: string;
  accountNumber: number;

  constructor(customerName: string, panDetails: string, accountNumber: number) {
    this.customerName = customerName;
    this.panDetails = panDetails;
    this.accountNumber = accountNumber;
  }
}

const newSeller = new Seller("Laxman Krishnamurti", "xxxxx916E", 918252764932);
console.log("newSeller", newSeller);
```

Also, we can use interfaces to annotate function's parameters and it's return value so that we can get an clear overview about at the end what kind of value the function is going to give us.

```ts
// Interfaces with functions

function sayHello(name: string): void {
  console.log("Hello", name + "!");
}

sayHello("Laxman");

const getRefreshToken = (accessToken: string): string => {
  let isValid: boolean = false;

  if (accessToken === "abcd") {
    isValid = true;
  } else {
    return "Invalid access token";
  }

  return "newRefreshToken is generated successfully";
};

console.log(getRefreshToken("abcd"));
```

JavaScript has these primitive data types:

- number
- string
- boolean
- biging
- undefined
- null
- symbol

But TypeScript extends this list by adding some more types, are :-

- All JavaScript Primitives
- any (allow anything, means any type)
- unknown
- never (it's not possible that this type could happen)
- void (a function which returns undefined or has no return value)

**There are two syntax for building types: _interface and types_. TypeScript recommend to use interface than typea. It states that use _types_ when we need specific features.**

## Composing Types

There are two ways to create more complex types:-

### **Unions**

With unions we can declare a type could be one of many types. This is like a if-else condition where declare type should be either this one or this. like this :-

```ts
type isLoggedIn = true | false;
```

Bydefault, it is classed as _boolean_. This is the property of Structural Type System.

```ts
type isLoggedIn = boolean;
```

Unions also provide a way to handle different types too.

```ts
const generateRefreshToken = (input: string | number): string => {
  return "accessToken";
};
```

```ts
// Learn the type of a variable

console.log(typeof age); // number
console.log(Array.isArray([]))  // true
console.log(typeof () => {})  // function
```

## **Generics**

[Practice file](./src/generics/generics.ts)

- Generics means **_characteristic of or relating to a class or group of things; not specific_**
- Generic types are dynamic types, it means it can adopt any type based on the input type.

## Structural Type System

One of TypeScript’s core principles is that type checking focuses on the **_shape_** that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type.

```ts
interface User {
  name: string;
  age: number;
}

function printUserInfo(user: User): void {
  console.log("user", user);
}

const user = {
  name: "Laxman Krishnamurti",
  age: 22,
};

printUserInfo(user);
```

You might be wondering about if the _user_ object never declared it's type of be _User_ so why TypeScript passes the code?

This is because of the shape of the object that we have passed to function. The object is mathing the shpae of the _User_ type so that's why TypeScript think that oooo..... This is what the function is expecting and it actually have all the properties which is described in the _User interface_

```ts
//TypeScript can also accept the object because it has all properties which is defined in the interface. But it will only accept the _name & age_ and the extra properties will be excluded.
const secondArg = {
  name: "Laxman Krishnamruti",
  age: 22,
  email: "laxmankrishnamurti@gmail.com",
};

// TypeScript will not allow to pass the object because it dosen't have the properties described in the interface

const thirdArg = {
  name: "Laxman Krishnamurti",
  hobbies: "VIDHYA",
};
```

**_There is no difference between how classes and objects conform to shapes_**

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const newUser = new User("Laxman Krishnamurti", 22);
console.log("newUser", newUser);

// {name: 'Laxman Krishnamurti', age: 22}
```

If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

**_In short, TypeScript focus on the shape of the value rather than how it is implimented_**

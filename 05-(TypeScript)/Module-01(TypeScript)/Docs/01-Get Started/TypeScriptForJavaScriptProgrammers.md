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

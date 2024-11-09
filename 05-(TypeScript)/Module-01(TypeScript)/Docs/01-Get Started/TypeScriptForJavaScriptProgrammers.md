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

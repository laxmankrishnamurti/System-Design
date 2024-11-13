# Everyday Types

In this chapter we'll learn about the fundamental types which we'll use on a daily basis or you can say these types are very common which we use in our TypeScript code. And we'll also learn about the palces where we can use these types effectively. This will be the fundamental building blocks that will help us to make complex type structure. So, this is very important to understand how these types work on which places.

With that lets get started.

## The primitives: string, number, and boolean

These are the most common primitive types that we use in our JavaScript code. In TypeScript for each of the type has a corresponding type.

- number for number
- string for string
- boolean for boolean

```ts
const age: number = 22;
const username: string = "Laxman Krishnamurti";
const isAuthorized: boolean = true;
```

**Note: String, Number, Boolean, all are legal keyword but all of these are different from the type that we have used in above code. The following types (Number, String, Boolean) are used to convert a value from one type to another**

```js
let age = 22;
age = String(age);
console.log("typeof age is", typeof age);
```

Now, age type has changed from number to string. Hence, using these keyword converts a value from one type to another. So, don't get confused always use lowercase for TypeScript.

# Narrowing

Narrowing is used in the place where we want to do something based on the variable but the point is the varible may have different-different types. Just have a look on this example:-

```ts
function isEligibleForVoting(age: string | number) {
  if (typeof age === "number") {
    if (age >= 18) {
      console.log("Yes, Your are eligible for voting. You can vote. ");
    } else {
      console.log("Oops! since you are a teenager so you can't vote.");
    }
  } else {
    console.log("Voter age is", age);
  }
}

isEligibleForVoting("18");
```

Actually, this is very important to know the type of the variable on which we are going to work. Because, if TypeScript will not 100% sure about the type of the variable it will definitely throw an error by saying that, Hey! whatever method of function are you trying to use is not possible because the variable has dynamic type rather than a static type.

And this is why we are using TypeScript. Right!

So, in TypeScript Narrowing variable type is very-very important for our project safety.

This is just a basic example or we can say the foundation about why _narrowing_ is important. Lets learn a bit more about that.

**This TypeScript code looks like JavaScript. The idea is that TypeScript's type system aims to make it as easy to write typical JavaScript code without bending over backwards to get type safety.**

_The phrase "without bending over backwards" means "without making a lot of extra effort" or "without doing something very difficult."_

TypeScript tries to it simulates how the code will behave based on its type annotations and control flow logic, helping us to catch type-related errors before the code runs.

Within the _if_ check, TypeScript sees _typeof age === "number"_ and understands that as a special form of code called a _type guard_.

### **Important**

- TypeScript follows possible paths of execution that our program can take to analyze the most specific possible type of a value at the given position.

- TypeScript looks at these specific checks _(called type guards)_ and assignments, and the process of refining types to more specific type than declared _(as we have declared the age variable; age : string | number)_ is called **_narrowing._**

## _typeof_ type guards

In JavaScript we have the _typeof_ operator that gives the type of the value at runtime. TypeScript expects this to return a certain set of strings:

- **"string"**
- **"number"**
- **"boolean"**
- **"bigint"**
- **"undefined"**
- **"object"**
- **"function"**
- **"symbol"**

- _typeof_ operator returns a value.
- TypeScript strictly check the value returned by _typeof_ because this lies under _type guards_.
- Because TypeScript also familier with the peculiar behavioral habit of the operator that it does in JavaScript. Lets have a look on this example:

```ts
function printAllUses(users: string | string[] | null) {
  if (typeof users === "object") {
    users.forEach((user) => {
      console.log("user", user);
    });
  } else if (typeof users === "string") {
    console.log("users", users);
  } else {
    return false;
  }
}

printAllUses(null);
```

```bash
warning:
  'users' is possibly 'null'.ts(18047)
  (parameter) users: string[] | null
```

Because we already know that _null_ is also a type of "object" in JavaScript. Right!

This is why TypeScript is warning us by say saying that; Hey! you are trying to run a high-order loop on the varible that may a _null_ vlaue because _null_ is also a type of an _object_.

## Truthiness narrowing

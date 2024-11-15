# Narrowing

Narrowing is used in the place where we want to do something based on the variable but the point is the varible may have different-different types. Just have a look on this example

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

This is just a basic example about why _narrowing_ is important. Lets learn more about that.

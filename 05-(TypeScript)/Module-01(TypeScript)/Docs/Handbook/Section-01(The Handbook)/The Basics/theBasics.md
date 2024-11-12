# The Basics

The word **_behavior_** is one of the most important word, specially in programming world. Because if we compare two or more programming language with each other then we only get one result is _the behavior_. Knowing a programming language is not that important than _understanding it's behavior_. Every programmer should have that kind of capabilities to understand the behavior of the language they are learning or working with. Because this will give us an edge to build an application which is simple, scalable, secure and more interactive.

With this thought lets start......

TypeScript offers type to get control over the variable which we have defined and the most important point is that the type is totally depends on the value which we have assigned to the variable.

Actually, TypeScript seeks to make JavaScript a **_Statically Typed Language_**.

In vanila JavaScript we have some methods to find the type of varaible, like this

```js
let message = "Hello";
message.toUpperCase();
```

How will JavaScript treat the code

- JavaScript runtime chooses what to do is by figuring out the _type_ of the value - what sort of behaviours and capabilities it has.
- If JavaScript cannot able to gusse the type of the variable it will throw a _TypeError_
- If variable has valid type then it's wrapper object will be loaded and it can use all the functionalities that the type has.

**For some values, such as the primitives string and number, we can identify their type at runtime using the typeof operator. But for other things like functions, there’s no corresponding runtime mechanism to identify their types. For example, consider this function:**

```js
function fn(x) {
  return x.getValue();
}
```

- JavaScript cannot determine the shape of the object the function is expecting at runtime.
- If the object dosen't have the _getValue()_ method then it will throw the _ReferenceError_.

**_The best part is TypeScript prevent such kind of typo. TypeScript first allow a specific kind of object that meet the object shape that the function is expecting. If we pass an object which is not same as the function is expecting TypeScript warns us by saying- Hey! you cannot do this. It says the object you are passing to the function is not in the shape that the function is expecting._**

## Static type-checking

**Static type system** describe the shape and behaviors of what our values will be when we run our programs. A _type-checker_ like TypeScript uses that information and tells us when things might be going off the rails.

```ts
const username = "Laxman Krishnamurti";
username();

//Warn :- This expression is not callable.
// Type 'String' has no call signatures
```

## Non-exception failures

The word _exception_ means **_something that should not be like that_**.

JavaScript is a very dynamic language so it behaves differently in different cases and its totally depends on the **_ECMAScript specification_** that standardize JavaScript. The specification has explicit instructions on how the language should behave when it runs into something unexpected.

Lets analize the behaviour.....

```js
const username = "Laxman Krishnamurti";
username();

// Uncaught TypeError: username is not a function
```

This looks obvious that JavaScript thrown an error by saying Hey! the username is not a function so this action cannot possible. And the specification says that tyring to call something that isn't callable should thrown an error.

But have a look on this example.....

```js
const user = {
  name: "Laxman Krishnamurti",
  age: 22,
};

console.log(user.email);
```

```bash
# Output
undefined
```

This looks _strange_ in the first example we have seen JavaScript successfully throw an error but not in this case. This will become a big problem for our application or might be a bugs that can lead our application vulnerable.

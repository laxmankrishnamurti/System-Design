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

On the other hand type system has to make a call over what code should be flagged as an error in its system, even if it's a valid JavaScript that won't immediately throw an error.

```ts
const user = {
  name: "Laxman Krishnamurti",
  age: 22,
};

console.log(user.email);
```

```bash
Warn : Property 'email' does not exit on type {name: string; age: number}
```

It also throw errors when we done any logical mistakes.

```ts
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== a) {
  console.log("value is", value);
} else if (value === b) {
  console.log("value is", value);
}
```

```bash
# Output

Warn: The comparison operator appears to be unintensional because the types "a" and "b" have no overlap.
```

**Why?**

The error is pointing out that the `else if (value === "b")` condition is unreachable because it’s logically impossible. Here’s why:

1. In the `if` condition, you check if `value` is **not** `"a"`.
2. If `value` is `"a"`, this `if` condition will be **false** and the code won’t enter this block.
3. If `value` is **not** `"a"` (meaning it’s `"b"`), the `if` condition will be **true**, so the code enters this block and won’t reach the `else if`.

Since `value` can only be `"a"` or `"b"`, there’s no situation where the `else if (value === "b")` condition could execute. This is what TypeScript is alerting us about—it’s a redundant and unreachable check.

## Types for Tooling

- Catch bugs

- Provide suggestions

  - The type-checker has information to check things like whether we’re accessing the right properties on variables and other properties.

- Quick fixes

- Provide navigation feature to jump on the variable definition and find all given references.

- All of this is built on top of the **type-checker**

### **tsc**, the TypeScript compiler

```bash
# Intall TypeScript Globally

npm install -g typescript

# Type-check by running the command
tsc <fileName>
```

- Compiler tries to emit clean readable code.
- Consistent indentation

## Emitting with Errors

```bash
tsc --noEmitOnError <fileName>
```

This command tells _tsc compiler_ do not generate the JavaScript file if you got any kind of typo error in the TypeScript code.

## Explicit Types

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("Laxman Krishnamurti", Date());
```

```bash
# After running the command
tsc --noEmitOnError <fileName>

warn :- Argument of type 'string' is not assignable to parameter of type 'Date'
```

Because when we call **Date()** it returns a string. Lets quickly fix this error

```ts
greet("Laxman Krishnamurti", new Date());
```

```bash
# Output

Hello Laxman Krishnamurti, today is Tue Nov 12 2024
```

## Erased Types

After comipling the function lets take a look on the output file which is generated by TypeScript compiler.

**_This is the TypeScript file content_**

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("Laxman Krishnamurti", new Date());
```

**This is the output file(JavaScript) content**

```js
function greet(person, date) {
  console.log(
    "Hello ".concat(person, ", today is ").concat(date.toDateString())
  );
}
greet("Laxman Krishnamurti", new Date());
```

- Differences
  1. Parameters no longer have type annotaion.
  2. The template string was converted to plain string with concatinations.

Let's focus on first one.

- Type annotations are not part of ECMAScript standardization.

- No one browser has the capability to run the TypeScript code directly.

- So, that's why TypeScript needs a compiler to convert the TypeScript code into JavaScript and then we can run the code into any browser.

- Hence, Our type annotations were completely erased.

<code>Remember : Type annotations never change the runtime behavior of our program.</code>

## Downleveling

**2nd ===> Standardized by ECMAScript(2015)**

- TypeScript has the ability to rewrite code from newer version of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES5).

- This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called _downleveling_.

- By default TypeScript targets ES5, an extremely old version of ECMAScript.

- We could have chosen something a little bit more recent by using the target option.

- Running with --target es2015 changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported.

- So running tsc --target es2015 hello.ts gives us the following output:

```ts
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```

## Strictness

We are trying to implement TypeScript in our code base because of its strict nature of checking types. Right! So that's why TypeScript provides more strictness features or we can say _flags_ like previous one which we have used earlier to check our program more strictly.

This will take more efforts but by doing this we are actually paying for ourselves in the long run.

To do this TypeScript provide a configuration file called _tsconfig.json_ in which there are lots of flags which we can toggle based on our use cases. Let's get the file first...

```bash
tsc --init
```

This is a huge file which we'll learn how to use them correclty later on. But lets have a look on these most important _flags_

**1. noImplicitAny**

In some places TypeScript dosen't try to infer types for us and instead fall back to the most lenient type: **any**.

- Using **any** often defeats the purpose of using TypeScript in the first place.

- The more typed our program is, the more validation and tooling we'll get, meaning we can catch potential errors.

- Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as **any**.

**2. strictNullChecks**

- By default values like **null or undefined** are assigned to **any** other type.

- Forgetting to handle **null** and **undefined** is the cause of countless bugs in the world - some consider it a **_billion dollar mistake!_**

- This flag will check **null or undefined** more strictly and spares us from worrying about whether we forgot to handle **null** and **undefined**.

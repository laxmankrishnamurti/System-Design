# More on Functions

Functions are the basic building block of any application, whether they're local functions, imported from another modules, or methods on a class. In TypeScript they are also treated as a values, and just like other values, TypeScript has many ways to describe how functions can be called.

In this section we'll learn about how to write **types** that describe functions. Let's learn.

## Function Type Expressions

- Simplest way to describe a function.
- Syntactically similar to arrow functions.

```ts
function parent1(fn: (a: string) => void) {
  fn("More on Functions");
}

function child1(str: string) {
  console.log(str);
}

parent1(child1);
```

```bash
# Output

More on Functions
```

Here, the **parent1** function only takes a function which accept a string itself. It means if we try to pass a **callback function** into the **higher-order function** (in this case the parent1), the callback function must take a string parameter otherwise TypeScript type system will warn us.

Let's try to modify the logic a little bit to understand what will happen if we change the parameter type in either _higher-order-function_ or _the callback function_. Let's make the change in the _callback function_.

```ts
function parent1(fn: (a: string) => void) {
  fn("More on Functions");
}

function child1(str: number) {
  console.log(str);
}

parent1(child1);
```

```bash
warnings

    Argument of type '(str: number) => void' is not assignable to parameter of type '(a: string) => void'.
    Types of parameters 'str' and 'a' are incompatible.
        Type 'string' is not assignable to type 'number'.ts(2345)
    function child1(str: number): void
```

The syntax **(a: string) => void** means _a function_ with one parameter, named _a_, of type _strinig_, that dosen't have a return value.

- Just like with function declaration if parameter is not specified, it's implicitly _any_.
- Note that parameterName is **required**.

To make this expression more simpler let's make a type alias. Because, we can use type-alias to give a name to any type at all, not just an object type.

```ts
type CallbackFunctionType = (a: string) => void;

function parent1(fn: CallbackFunctionType) {
  fn("More on Functions");
}

function child1(str: string) {
  console.log(str);
}

parent1(child1);
```

- This is the best place where we can use _type-aliases (a name for any type)_.

### **_Limitations_**

- This expression dosen't allow a function to have additional properties and methods being callable.

## Call Signatures

Before going deep dive into it let's understand the meaning of the word _signature._

In TypeScript, the term **signature** referes to the a description of a function, method, or callable structure, rather than a traditional handwritten signature. It defines how a function or method should be called, what parameters it accepts, and what it returns.

### **_Key parts of a signature:_**

1. **Name** of the function or methods (optional in some context).
2. **Parameter type:** The types of inputs the function takes.
3. **Return type:** The type of value the function will return.

**_Let's come to the topic now._**

In JavaScript, function can have properties in addition to being callable. What does it mean?

Have a look on this code:

```js
function test(num) {
  let randomNumber = Math.floor(Math.random() * 1e2);
  console.log("function description :: ", test.description);
  test.sayHello();
  console.log(test.result);
  return num > randomNumber;
}

test.description = "This is a test function";
test.sayHello = () => {
  console.log(`Hello from ${test.name} function`);
};
test.result = "All test cases passed!!";

let result = test(100000);
console.log("result", result);
```

```bash
# Output

function description ::  This is a test function
Hello from test function
All test cases passed!!
result true
```

Yes, at the end function is also a type of object in JavaScript. So, it can have properties and methods being callable.

How TypeScript make this possible? Let's learn:

```ts
type CallbackFunctionTypeWithAdditionalProperties = {
  description: string;
  result: string;
  (num: number): boolean;
};

function parent2(fn: CallbackFunctionTypeWithAdditionalProperties): boolean {
  const result = fn(1000);
  console.log("Callback function description :: ", fn.description);
  console.log("Test Result", fn.result);
  return result;
}

function child2(num: number) {
  const randomNumber = Math.floor(Math.random() * 1e2);
  return num > randomNumber;
}

child2.description = "Calling from child2 function";
child2.result = "All test cases passed!!";

const result = parent2(child2);
console.log("result", result);
```

```bash
# Output

Callback function description ::  Calling from child2 function
Test Result All test cases passed!!
result true
```

_Remember :: The syntax is slightly different compared to a function type expression - use **:** between the parameter list and the return type rather than **=>**_

## Construct Signatures

JavaScript functions can also be invoked with the _new_ operator. TypeScript refers to these as _constructors_ because they usually create a _new object_. We can write a _constructor signature_ by adding the _new_ keyword in front of a call signature.

```ts
interface User {
  accountId: string;
  userEmail: string;
  ipAddress: string;
}

type SomeConstructor = {
  new (username: string): User | false;
};

function parent3(fn: SomeConstructor) {
  const userDetails = new fn("laxmankrishnamurti");
  return userDetails;
}

function child3(username: string): User | false {
  if (username === "laxmankrishnamurti") {
    return {
      accountId: "12345",
      userEmail: "laxmankrishnamurti@gmail.com",
      ipAddress: "192.168.250.26",
    };
  }

  return false; // user dosen't exist
}
```

If we have invoked the callback function without _new_ keyword then it is 100% sure TypeScript's type system will warn us with this message:

```bash
Value of type 'SomeConstructor' is not callable. Did you mean to include 'new'?ts(2348)
```

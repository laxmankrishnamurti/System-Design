# More on Functions

Functions are the basic building block of any application, whether they're local functions, imported from another modules, or methods on a class. In TypeScript they are also treated as a values, and just like other values, TypeScript has many ways to describe how functions can be called.

In this section we'll learn about how to write **types** that describe functions. Let's learn.

---

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

---

## `Call Signatures`

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

---

## `Construct Signatures`

JavaScript functions can also be invoked with the _new_ operator. TypeScript refers to these as _constructors_ because they usually create a _new object_. We can write a _constructor signature_ by adding the _new_ keyword in front of a call signature.

```ts
interface User {
  accountId: string;
  userEmail: string;
  ipAddress: string;
}

type SomeConstructor = {
  new (username: string): User | boolean;
};

function parent3(fn: SomeConstructor) {
  const user = new fn("laxmankrishnamurti");
  return user;
}

function child3(username: string): User | boolean {
  if (username === "laxmankrishnamurti") {
    return {
      accountId: "12345",
      userEmail: "laxmankrishnamurti@gmail.com",
      ipAddress: "192.168.250.16",
    };
  }

  return false;
}

const isExist = parent3(child3);
```

If we have invoked the callback function without _new_ keyword then it is 100% sure TypeScript's type system will warn us with this message:

```bash
Value of type 'SomeConstructor' is not callable. Did you mean to include 'new'?ts(2348)
```

```bash
warnings

  Argument of type '(username: string) => boolean | User' is not assignable to parameter of type 'SomeConstructor'.
    Type '(us  Argument of type '(username: string) => boolean | User' is not assignable to parameter of type 'SomeConstructor'.
    Type '(username: string) => boolean | User' provides no match for the signature 'new (username: string): boolean | User'.ts(2345)
  functioername: string) => boolean | User' provides no match for the signature 'new (username: string): boolean | User'.ts(2345)
  function child3(username: string): User | boolean
```

**We can also combine _call_ and _construct_ signatures in the same type arbitrarily.**

```ts
interface SomeConstructor1 {
  (num: number): boolean;
  new (username: string): User | boolean;
}
```

But the question is does TypeScript support this feature with a regular function like this one :-

```ts
function child4(input: number | string): boolean | User {
  if (typeof input === "number") {
    const randomNumber = Math.floor(Math.random() * 1e2);
    return input > randomNumber;
  } else if (input === "laxmankrishnamurti") {
    return {
      accountId: "12345",
      userEmail: "laxmankrishnamurti",
      ipAddress: "192.168.250.16",
    };
  }

  return false;
}

const output = paren4(child4);
```

```bash
warnings

    Argument of type '(input: string | number) => boolean | User' is not assignable to parameter of type 'SomeConstructor1'.
    Type 'boolean | User' is not assignable to type 'boolean'.
        Type 'User' is not assignable to type 'boolean'.ts(2345)
    function child4(input: number | string): boolean | User
```

No, TypeScript does not natively support creating a **regular function** that is both callable and constructible without additional tricks (e.g., using `Object.assign` or `Proxy`). We need to combine behaviors manually, as regular functions can't inherently have both capabilities in TypeScript.

**_With Proxy_**

```ts
interface User {
  accountId: string;
  userEmail: string;
  ipAddress: string;
}

interface SomeConstructor1 {
  (num: number): boolean; // Callable signature
  new (username: string): User | boolean; // Constructor signature
}

// Use a Proxy to define a constructible and callable object
const child4: SomeConstructor1 = new Proxy(function () {}, {
  apply(target, thisArg, argArray) {
    const num = argArray[0];
    if (typeof num === "number") {
      const randomNumber = Math.floor(Math.random() * 1e2);
      return num > randomNumber;
    }
    throw new Error("Invalid argument for call");
  },
  construct(target, argArray) {
    const username = argArray[0];
    if (typeof username === "string" && username === "laxmankrishnamurti") {
      return {
        accountId: "12345",
        userEmail: "laxmankrishnamurti",
        ipAddress: "192.168.250.16",
      };
    }
    return false;
  },
});

// Call the function with `paren4`
const output = paren4(child4);
console.log("Output:", output);
```

```bash
warnings

    # On Constructor

    Type '(target: () => void, argArray: any[]) => false | { accountId: string; userEmail: string; ipAddress: string; }' is not assignable to type '(target: () => void, argArray: any[], newTarget: Function) => object'.
    Type 'false | { accountId: string; userEmail: string; ipAddress: string; }' is not assignable to type 'object'.
        Type 'boolean' is not assignable to type 'object'.ts(2322)
    (method) ProxyHandler<SomeConstructor1>.construct?(target: SomeConstructor1, argArray: any[], newTarget: Function): object
```

### **_Summary_**

1. In JavaScript, all functions are technically constructors because the new keyword is allowed for any function. This behavior is built into the language.

2. In TypeScript, only functions or classes with an explicit new signature are considered valid constructors for a construct signature. This provides stricter type safety and ensures meaningful usage of new.

### Why Does TypeScript Differentiate?

TypeScript adds type safety by enforcing these rules. If it allowed any function to satisfy a construct signature, it would defeat the purpose of using types to ensure correctness. By requiring an explicit new signature, TypeScript:

1. Prevents misuse of functions not designed to be constructors.
2. Ensures type-safe instantiation when working with classes or constructors.

### Construct Signature

```ts
type SomeConstructor = {
  new (username: string): User | boolean;
};
```

- This is a contract
- This defines a contract for a function or class that must:
  - Be callable using new.
  - Accept a single username string parameter.
  - Return either a User object or boolean.

### Mixed Call and Construct Signatures

A mixed signature is where an entity supports both:

- A call signature (function-like invocation).
- A construct signature (constructor-like invocation with new).

```ts
interface CallOrConstruct {
  (n?: number): string; // Call signature
  new (s: string): Date; // Construct signature
}
```

```ts
interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

function fn(ctor: CallOrConstruct) {
  // Passing an argument of type `number` to `ctor` matches it against
  // the first definition in the `CallOrConstruct` interface.
  console.log(ctor(10));

  // Similarly, passing an argument of type `string` to `ctor` matches it
  // against the second definition in the `CallOrConstruct` interface.
  console.log(new ctor("10"));
}

fn(Date);
```

```bash
# Output

Fri Nov 22 2024 15:43:19 GMT+0530 (India Standard Time)
2001-09-30T18:30:00.000Z
```

[Fresh Start](./ConstructSignature.md)

---

## `Generic Functions`

Dictionary meaning of _generic_ :: characteristic of or relating to a class or group of things; not specific.

We often create a function which return type is related to it's input type. Have a look on this function:

```js
// JavaScript

function fn(arr) {
  return arr[0];
}
```

Here, the function _fn_ is taking an array(could be any type) as a parameter and returns the first element of the array which has the same type the input array's element.

```ts
// TypeScript

function fn(arr: any[]) {
  return arr[0]; // const firstElement: any
}
```

The return type is _any_

Now, the question is does TypeScript provides any sort of way to declare a type which interlink both types: input as well as its return type?

The answer is **`yes.`**

TypeScript introducing **`generic type`** that describe a _correspondence_ between two values.

**In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:**

```ts
function fn1<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const getFirstElement = fn1([1, 2, 3, 4, 5]); // const getFirstElement: number | undefined
console.log("Get first element", getFirstElement); // const getFirstElement: number | undefined
```

By adding a type parameter Type to this function and using it in two places, we’ve created a link between the input of the function (the array) and the output (the return value). Now when we call it, a more specific type comes out:

Now, take more example in order to understand it very well because we'll be using it very frequently.

---

### `Inference`

```ts
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3", "4", "5"], (n) => parseInt(n));
console.log("parsed", parsed);

const parsed2 = map([1, 2, 3, 4, 5], (n) => String(n));
console.log("parsed2", parsed2);
```

Here, the map function is taking two parameter values and we have also assigned it two _parameter types_ first one is _Input_ and second one is _Output_ where both types are attached to the input parameter's type.

What will be the type of Input and the Output. Lets analyze this.

One thing that we should keep in our mind is that whenever we delcare a _type parameter_ will always be related to the _input parameter_ of the function of whatever the place where we've used to generic type. It will always depend on the input type.

For better understanding just think it of as _a type which is not pre-defined but it will get fulfilled in the future._

If we take the above example then we are clearily seeing that the _map_ function is taking two parameter the first one is an array and the second one is a function which is also taking an input as parameter and return a type.

But the question is what will be the type of the Output. Well, at first look we might be thinking that the type of the _Output_ will be a function. Does it make sense?

Absolutely not!

A function type will always be determined based on the value that the function returns.

It means the _Output_ type will be the return type of function which we'll pass the the map function. As of now, at first we are passing a function to the map function, which takes the array's element as a parameter and parse the element and return an integer, means the return type of the function is a _number_

Hence, the _Output parameter type_ will be a number.

And at the second example the function is parsing the array's element to string. Hence, the _Output_ type will be a _string._

**`Note:- If we passed a function that returns a function as _func_, the map would return an array  of functions.`**

Here, the type of the parameter if being infered by the TypeScript based on the array value.

---

### `Constraints`

On the above examples the map function is accepting any kind of _type_. But we can restrict it to allow specific kind of value to pass in the function.

We can use a _constraint_ to limit the kinds of types that a type parameter can accept. We _constrain_ the type parameter to that type by writing an **extends** clause:

```ts
function func<Type extends { length: number }>(x: Type, y: Type) {
  if (x.length >= y.length) {
    console.log("x", x);
  } else {
    console.log("y", y);
  }
}
```

Here, the function only accept a parameter which have _length_ property. Lets analyze the function by passing some arguments:

```ts
func("abc", "def");
func([1, 2, 3, 1], "laxman"); // Argument of type 'number[]' is not assignable to parameter of type 'string'.ts(2345)
func([1, 2, 3, 1], ["sdf"]);
```

TypeScript is saying that the second argument that you have passed to the function does not have a length property and the most important part is after passing the first argument to the function the _Type parameter_ value becomes an array of numbers. So that's why we must pass another array which is also an array regardless of the element type.

Because TypeScript is not forcing us to pass another array which element type is also a number. Not!

The only key thing that matters here is that whatever the parameter we are passing to the function must have the _length_ property. That's it!

---

### `Working with Constrained Values`

Take a look on the generic function:

```ts
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return {
      length: minimum,
    };
  }
}
```

```bash
warning

Type '{ length: number; }' is not assignable to type 'Type'.
'{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of  constraint '{ length: number; }'.
```

This is a common error that we face while working with generic function with constraints.

TypeScript is saying that hey! the function has promised that i will return a type of _Type_. But the function is not fulfilling the promise because let say the _if-branch_ condition is not matched then the function is returning an object which may not have necessary values. For example:

```ts
minimumLength(
  {
    username: "laxmankrishnamurti",
    email: "laxmankrishnamurti@gmail.com",
    age: 22,
    length: 12,
  },
  20
);
```

In this arguments the object has lenght property but it's not atleast _minimum_. So, in this condition the function is returning a random object instead of the object that we have passed as the first argument.

I hope this make sense.

So, in this condition the function is not fulfilling their promise. Hence, TypeScript type system is giving warning to us.

---

### `Specifying Type Arguments`

As of now, we have seen that at many scenarios TypeScript uses inference to infer the type for generic type based on the input which we pass to the function. Right!

But, at some cases TypeScript type inference also struggles to find the type of the vlaue. On that case we must have to define the type explicitly. Take a look on the function:

```ts
function print<T>(para: T): T {
  console.log("para", para);
  return para;
}

print(42);
```

In this case TypeScript is smart engough to infer the _type parameter_. TypeScript looked at the input value (42) and infered that _T_ should be _number_

But, take a look at this example:

```ts
function identify<T>(value: T): T {
  return value;
}

const result = identify(null);
```

Here, _null_ doesn't give TypeScript engough information to determine _T_. We must provide it explicitly.

```ts
const result = identity<string | null>(null);
```

Let me make it more clear. Have a look on this generic function:

```ts
function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const union = combine([1, 2, 3, 4, 5], ["laxman"]);
```

```bash
warning

Type 'string' is not assignable to type 'number'.t
```

Because TypeScript has already infered the _T_ when we passed the first argument to the function. Now, the infered type looks like this:

```bash
function combine<number>(arr1: number[], arr2: number[]): number[]
```

But at the same time we are passing an array of type _String_. That is obviouos, is not assignable to type _number_. It's time to explicitly assing type to the function.

```ts
const union = combine<number | string>([1, 2, 3, 4, 5], ["laxman"]);
```

Now, the type will be:

```ts
function combine<string | number>(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[]

const union: (string | number)[]
```

```bash
# Output

Union [ 1, 2, 3, 4, 5, 'laxman' ]
```

Just take one more example to make it clear.

```ts
function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = makePair(1, "hello"); // T is inferred as number, U as string.
```

But if one of the vlaue is _undefined_, TypeScript may struggle:

```ts
const pair = makePair(undefined, "hello"); // Error: T is not inferred correctly.
```

and the generic type will look like this:

```bash
function makePair<undefined, string>(first: undefined, second: string): [undefined, string]
const pair: [number | undefined, string]
```

So, what we can do? The answer is same we have to assign type for _generics_ explicitly. We just have to make sure that TypeScript got the right type for the vlaue. That's it.

Becuase if TypeScript doesn't know what kind of vlaue that we are passing to the function this the place where our code might get buggy because on that time TypeScript is unable to help us because of unintensional values.

```ts
const pair = makePair<number | undefined, string>(undefined, "hello");
```

and the generic type will look like this:

```ts
function makePair<number | undefined, string>(first: number | undefined, second: string): [number | undefined, string]
```

And this is obviouos that, at this point of stage of learning TypeScript we're able to find the potential areas where we could make mistakes. Passing such kind of values to the function which doesn't make sense, i mean why should we pass _undefined_ to the function which doesn't have any use-case.

---

### `Guidelines for writing Good Generic Functions`

It can be easy to get carried away with type parameters. But there are some key point which we should keep in mind while making a generic function:

1. **`Try to avoid too many type parameter (When possible, use the type parameter itself rather than constraining it.)`**

   - Generic function will start getting complex
   - Make less efficient ot TypeScript type inference machanism
   - Using **`constraints`** where it's most neede, because:
     - TypeScript has to resolve the **`constraints expression`**, rather than 'waiting' to resolve the element during a call.

Lets combine all these points into a function:

```ts
function firstFunction<T>(arg: T[]) {
  return arg[0];
}

function secondFunction<T extends any[]>(arg: T) {
  return arg[0];
}

const firstFunElement = firstFunction([1, 2, 3, 4, 5]);
const seconFunElement = secondFunction([1, 2, 3, 4, 5]);
```

```bash
# Types

const firstFunElement: number
const seconFunElement: any
```

Both functions are doing same job but second function has more complex structure than firstFunction. Avoid such kind of complexity. Make simpler and easy to understandable Generic function. If ther is need use appropriate structure or whatever structure you need. But keep in mind don't make things complex.

Things are always easy, we make things complicated.

2. **`Use fewer type parameter (Always use few type parameter as possible)`**

```ts
function thirdFunction<T>(arr: T[], func: (arg: T) => boolean): T[] {
  return arr.filter(func);
}

function fourthFunction<T, Func extends (arg: T) => boolean>(
  arr: T[],
  func: Func
): T[] {
  return arr.filter(func);
}
```

There is no difference between both functions as it's working. Both are doing same job. But the _third function_ has simple code structure, easy to understandable, high readability.

On the other hand in the _fourth function_ we've created an extra _type parameter_ to the function which does not make sense anymore as compare to the first one.

So, just be simple and also make your code simple.

3. **`Type parameter should appear Twice`**

Just think for a while, why TypeScript introduced _generic functions_?

Just because if a function is taking more than one arguments with similar types, we must have some sort of ways to define one single type for both arguments that relate both values. Right!

Good. Just have a look on this function:

```ts
function greet<T extends string>(name: T) {
  console.log(`Hello ${name}`);
}
```

Does it make sense to use _Generic function_ in this scenario?

Absolutely not!

Because we can simple use a normal function with a single type. Like this:

```ts
function greet1(name: string) {
  console.log(`Hello ${name}!!`);
}
```

That's the rules is saying that we should not use _generic functions_ where we can easily work with normal function and types.

Use generic function where we need to relate two values. That's it.

**_If a type parameter only appears in one location, strongly reconsider if we actually need it._**

---

## `Optional Parameters`

TypeScript offers a type which makes parameters as an optional value, by **`?`**

```ts
function fixedPriceBy(x?: number) {
  const finalPrice = 524516.1242;
  console.log("finalPrice", finalPrice.toFixed(x));
}

fixedPriceBy(2);
```

But there is a problem with the code, I guess you probably get understand to which i'm talking about.

Yes, the _undefined_ value.

Let's fix this

```ts
function fixedPriceBy(x = 3) {
  const finalPrice = 524516.1242;
  console.log("finalPrice", finalPrice.toFixed(x));
}

fixedPriceBy();
fixedPriceBy(10);
fixedPriceBy(undefined);
```

```bash
# Output

finalPrice 524516.124
finalPrice 524516.1242000000
finalPrice 524516.124
```

If we pass undefined to the function in which there is already a default value is set, JavaScript will automatically re-assign the undefined with the default value.

### `Optional Parameter in Callback`

Have a look on this function:

```ts
function parentFunction(
  arr: number[],
  callback: (val: number, opt?: number) => number
) {
  const fixedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    fixedArray.push(callback(arr[i], i));
  }
  return fixedArray;
}

function childFunction(val: number, opt?: number): number {
  return +val.toFixed(opt);
}

const finalArray = parentFunction(
  [10.215, 25.24521, 63541.21523],
  childFunction
);
console.log("finalArray", finalArray);
```

```bash
# Output

finalArray [ 10, 25.2, 63541.22 ]
```

Lets modify the child function?

```ts
function childFunction(val: number, opt?: number): number {
  const modifyOpt = opt > 2 ? 3 : 5;
  return +val.toFixed(modifyOpt);
}
```

```bash
Warnings

'opt' is possibly 'undefined'.ts(18048)
(parameter) opt: number | undefined
```

Note ==> In JavaScript, if you call a function with more arguments than there are parameters, the extra arguments are simply ignored. TypeScript behaves the same way. Functions with fewer parameters (of the same types) can always take the place of functions with more parameters.

```ts
type Func1 = (a: number) => void;
type Func2 = (a: number, b: number) => void;

let fn1: Func1 = (a) => console.log(a);
let fn2: Func2 = (a, b) => console.log(a, b);

// Func1 can replace Func2:
fn2 = fn1; // ✅ Works because fn1 doesn't need the second parameter.
```

**`Rule : When writing a function type for a callback, never write an optional parameter unless we intend to call the function without passing that argument`**

## `Function overloads`

In TypeScript we can defined **multiple signature** of a function.

Key Idea:

- Overload signature describe how the function can be called.
- The implementation handles all the possible calls.

In short,

Function overload means having multiple version of the same function with different parameter lists or type of parameters. It allows a function to behave differently based on how it is called.

With function overload, we're defining specific valid combinations of parameter types. If a combination is not defined in the overloads, TypeScript will issue an error.

```ts
function combine(input1: number, input2: string): string; // Valid combination
function combine(input1: string, input2: string): string; // Valid combination

function combine(input1: string | number, input2: string | number): string {
  return input1.toString() + input2.toString();
}

// Valid calls:
combine(1, "test"); // ✅ Matches 1st overload
combine("Hello", "Bye"); // ✅ Matches 2nd overload

// Invalid call:
combine(1, 2); // ❌ Error: No overload matches this call
```

Let's deep dive into it.

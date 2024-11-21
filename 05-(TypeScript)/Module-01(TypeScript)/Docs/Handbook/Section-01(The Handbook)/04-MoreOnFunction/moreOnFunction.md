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

## Call Signatures

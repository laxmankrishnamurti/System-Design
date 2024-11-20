# Narrowing

Narrowing is used in the place where we want to do something based on the variable but the point is the varible may have different-different types. Please, have a look on this example:-

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

- Because TypeScript also familier with the peculiar behavioral habit of the operator that it does in JavaScript. Have a look on this example:

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

In JavaScript, constructs like _if_ first _coerce_ their conditions to _boolean_ to make sense of them, and then choose their brances depending on whether the result is _true_ or _false_.

**Values that coerce to _false_**

- 0
- NaN
- "" (an empty string)
- 0n (Zero in bigint version)
- null
- undefined

**_and other values get coerced to true._**

- We can also leverage the expression in conditions
  - _&&_ (AND operator)
  - _||_ (OR operator)
  - _!_ (Boolean negation)

```ts
function printAllUses(users: string | string[] | null) {
  if (users && typeof users === "object") {
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

- Using _&&_ operator in the _if_ condition will make sure the value should not _null_. By this, we've gotten rid of the error above by checking if _users_ is truthy.

- Narrowing by truthiness is that Boolean negations with _!_ filter out from negated brances.

```ts
function printAllUsess(users: string | string[] | null) {
  if (!users) {
    return "Invalid input";
  } else if (typeof users === "object") {
    users.forEach((user) => {
      console.log("user", user);
    });
  }
}

printAllUsess(null);
```

## Equality narrowing

In this section we do narrowing with the help of these operators :- _===, !==, ==, !=_

```ts
interface Container {
  value: number | null | undefined;
}

function getMultiply(obj: Container, factor: number) {
  if (obj.value != undefined) {
    return obj.value * factor;
  } else {
    return "Invalid input";
  }
}
```

- _!=_, this checks whether a value is _undefined or null_ means with a single operator we have checked for both types such as _undefined or null_. Now, TypeScript perfectly understood that this value is going to be a _number_.

## The _in_ operator narrowing

We know that the _in_ operator is used to find a key-name whether it is literal or an optional value in an object. TypeScript also take this into account as a way to narrow down potential types.

- _true_ branch narrow objects's types which have either an optional or required property **value**.

- _false_ branch narrow to type which have an optional or missing property **value.**

```ts
interface A {
  a: () => void;
}
interface B {
  b: () => void;
}
interface C {
  a?: () => void;
  c: () => void;
}

function takeInput(obj: A | B | C) {
  if ("a" in obj) {
    console.log(obj); // (parameter) obj: A | C
  } else {
    console.log(obj); // (parameter) obj: B | C
  }
}
```

## _instanceof_ narrowing

As same the _instanceof_ operator is used to check whether or not a value is an _instance_ of another value. This is also a _type guard_, and TypeScript narrow in branches guarded by _instanceof_ s.

```ts
function checkLog(str: Error | string) {
  if (str instanceof Error) {
    console.log("error", str); // (parameter) str: Error
    throw new Error("Err: New Error"); // var Error: ErrorConstructor ; new (message?: string, options?: ErrorOptions) => Error (+1 overload)
  } else {
    console.log("new Error", str);
  }
}
```

## Assignments

```ts
let foo = Math.random() < 0.5 ? 10 : "Foo"; // let foo: string | number
foo = 1;
console.log("foo", foo); // let foo: number
foo = "FUBAR";
console.log("foo", foo); // let foo: string
```

We know that if we assign a variable, TypeScript looks at the right side of the assignment and narrow the left side appropriately.

**The type that _foo_ started with - _string | number_, and assignability is always checked against the declared type. That's why we are able to change the reassigned value to the variable.**

If we try to reassign the variable with different type like with _boolean_ value then TypeScript prevent us to so because _boolean_ is not a part of the declared type.

## Control flow analysis

**Analysis of code based on reachability is called _control flow analysis_**. TypeScript uses _control flow analysis_ to determine or narrow down the variable type.

Take a look on this function:-

```ts
function controlFlowAnalysis() {
  let foo: boolean | string | number;

  foo = true;
  console.log("foo", foo); // let foo: true

  if (Math.random() > 0.5) {
    foo = 4;
    console.log("foo", foo); // let foo: number

    foo = "laxmankrishnamurti";
    console.log("foo", foo); // let foo: string
  }

  return foo; // let foo: string | number
}
```

In this function body the type of the variable is changing continuously based on assigned value. So, in _control flow analysis_ TypeScript try to determine what's the type of the value on a particular location in the function body or in the global enviroment.

## Using type predicates

Type predicates help avoid unnecessary type checks by letting the TypeScript compiler know exactly what type a variable is inside a block of code.

**Without predicates**

```ts
type Animal = { name: string; sound: () => void };
type Car = { brand: string; drive: () => void };

const myObject: Animal | Car = {
  name: "Dog",
  sound: () => console.log("Woof!"),
};

if ((myObject as Animal).sound !== undefined) {
  // Explicitly assert again to access 'sound'
  (myObject as Animal).sound();
} else {
  // Explicitly assert again to access 'drive'
  (myObject as Car).drive();
}
```

**With predicates**

```ts
type Animal = { name: string; sound: () => void };
type Car = { brand: string; drive: () => void };

function isAnimal(obj: Animal | Car): obj is Animal {
  return (obj as Animal).sound !== undefined;
}

let myObj = getMyObject();

if (isAnimal(myObj)) {
  //In this block TypeScript knows that myObj has Animal type
  myObj.sound();
} else {
  // In this block TypeScript know myObj has Car type instead of Animal
  myObj.drive();
}
```

- **Type Predicates follow the structure**

  - _parameterName is Type_

    - parameterName must be the name of a parameter from the current function signature.

  - _type assertion allows TypeScript to use the parameter as Animal type_
  - _Then, it tries to access the method which we can specify. If there is more than one method we can express it like this_

    ```ts
    return (
      (obj as Animal).sound !== undefined && (obj as Animal).eat !== undefined
    );

    // so on.
    ```

  - _Once the function returns **true** TypeScript knows that the Object has Animal like sturcture because of the predicate_

    ```ts
      obj is Animal
    ```

**We can also use the type guard to filter an array of _Animal | Car_ and obtain an array of _Animal_**.

```ts
const collection: (Animal | Car)[] = [
  getCollection(),
  getCollection(),
  getCollection(),
  getCollection(),
  getCollection(),
];

const collection1: Animal[] = collection.filter(isAnimal);

//Or, Equivalently

const collection2: Animal[] = collection.filter(isAnimal) as Animal[];

// For more complex structure

const collection3: Animal[] = collection.filter((ele): ele is Animal => {
  if (ele.name === "scorpio") false;

  return isAnimal(ele);
});

// lets filter car
const collection4: Car[] = collection.filter((coll): coll is Car => {
  return !isAnimal(coll);
});
```

### **With practical examples**

```ts
// lets filter car

type Animal = {
  name: string;
  sound: () => void;
};

type Car = {
  name: string;
  drive: () => void;
};

function isAnimal(obj: Animal | Car): obj is Animal {
  return (obj as Animal).sound !== undefined;
}

function getCollection() {
  const obj1: Animal = {
    name: "Manohar",
    sound: () => "foo",
  };

  const obj2: Car = {
    name: "Scorpio",
    drive: () => "high-speed",
  };

  if (Math.random() < 0.6) {
    return obj1;
  } else {
    return obj2;
  }
}

const collection: (Animal | Car)[] = [
  getCollection(),
  getCollection(),
  getCollection(),
  getCollection(),
  getCollection(),
  getCollection(),
];

console.log("collection", collection);

const collectionOfAnimal: Animal[] = collection.filter(isAnimal);
// const collection2: Car[] = collection.filter(!isAnimal)

const collectionOfCar: Car[] = collection.filter((ele): ele is Car => {
  return !isAnimal(ele);
});

console.log("collection of Animals", collectionOfAnimal);
console.log("collection of Cars", collectionOfCar);
```

```bash
# Output

collection [
  { name: 'Scorpio', drive: [Function: drive] },
  { name: 'Scorpio', drive: [Function: drive] },
  { name: 'Manohar', sound: [Function: sound] },
  { name: 'Manohar', sound: [Function: sound] },
  { name: 'Manohar', sound: [Function: sound] },
  { name: 'Manohar', sound: [Function: sound] }
]
collection of Animals [
  { name: 'Manohar', sound: [Function: sound] },
  { name: 'Manohar', sound: [Function: sound] },
  { name: 'Manohar', sound: [Function: sound] },
  { name: 'Manohar', sound: [Function: sound] }
]
collection of Cars [
  { name: 'Scorpio', drive: [Function: drive] },
  { name: 'Scorpio', drive: [Function: drive] }
]

```

🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯 🎯

## Assertion Functions

There is a specific set of functions that _throw_ an error if something unexpected happened. They are called **_Assertion function._**

[Checkout](./src/lassertionFunction.ts)

## Discriminated Unions

When every type is a union contains a common property with literal types, TypeScript considers that to be a **_discriminated union_**, and can narrow out the members of the union.

Take a look on this interface:

```ts
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function getAreq(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}
```

```bash
warning
  'shape.radius' is possibly 'undefined'.ts(18048)
  (parameter) shape: Shape
```

Here, both type _circle & square_ is trying to contain the same property named _kind_ and both are literal types. **TypeScript consider this to be an discriminated union.**

TypeScript is saying that: OK! say the shape is a kind of "circle" but the radius property is an optional value which value may be _null or undefined_ so that's why TypeScript is telling that you can not do this.

Of course! This seems to be good. So, what we should do now?

Idea! We have a _non-null assertion_ operator in TypeScript. let's use this

```ts
function getAreq(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}
```

That's it. we don't get any kind of warning from TypeScript. Absolutely right!

But think for a while we also know that this operator dosen't change the runtime behaviour means if we passed an object without radius property this will return an _undefined or null_.

Hence, we don't rely on the _non-null assertion_ operator this can make our code error prone. So, what should we do now?

Lets have a look on below code.

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shapee = Circle | Square;

function getArea(shape: Shapee) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2; // (parameter) shape: Circle ; (property) Circle.radius: number
  }
}
```

In the _if branch_ TypeScript knows that the shape follow the _Circle_ interface so it must have the _radius_ property.

Checking whether the _kind_ property was _circle_ got rid of every type in Shape that didn't have a _kind_ property with the type _circle_. That narrowed _shape_ down to the type _Circle_.

The same checking works with **switch** statement as well. Now, we can try to write our complete _getArea_ without any pesky _!_ non-null assertion.

```ts
function getAreaOfShapes(shape: Shapee) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
  }
}
```

Let's try play around the switch statement.

```ts
function getAreaOfShapes(shape: Shapee) {
  switch (shape.kind) {
    case "circle":
      Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
  }
}
```

```bash
warning
  Property 'sideLength' does not exist on type 'Shapee'.
  Property 'sideLength' does not exist on type 'Circle'.ts(2339)

  any
```

**Why?**

Because let say the first case was matched then it will move forward to the second case and hence, the _sideLength_ dosen't exist in the _Circle_ that's why TypeScript is giving the warning.

But take a look on this code:

```ts
function getAreaOfShapes(shape: Shapee) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      shape.sideLength ** 2;
  }
}
```

```bash
no warnings
```

Because there is no more cases after "sqare".

**_Conclusion_**

- Discriminated unions are useful for more than just talking about circles and squares. They are good for:
  - Representing any sort of messanging schema in JavaScript
  - Like when sending messages over the network (client/server communication)
  - Encoding mutations in a state management framework.

## The _never_ type

The _never_ type in TypeScript represents values that never occur. It is used in scenarios where a _value cannot logically exist_, such as functions that never return or code paths that are unreachable. This type is particularly _useful for enforcing exhaustiveness checks_ in TypeScript's type system.

- **Key points about _never_**

  1. **Unreachable code:** The _never_ type is used to indicate that a piece of code should never execute.

  ```ts
  type Action = "start" | "stop";
  function performAction(action: Action) {
    if (action === "start") {
      console.log("Starting...");
    } else if (action === "stop") {
      console.log("Stopping...");
    } else {
      const unreachable: never = action; // TypeScript ensures no other values are possible
    }
  }
  ```

  2. **No value:** A _never_ type cannot hold any value.

  ```ts
  <!-- like the else branch -->
  const unreachable: never = action;
  ```

  3. **Function with no Return** : A function that always throws an error or enters an infinite loop is typed as _never_.

  ```ts
  function infiniteLoop(): never {
    while (true) {
      console.log("Running.........");
    }
  }
  ```

  4. **Exhaustive Checking:** _never_ ensures all possible cases are covered in a _switch_ statement or a conditional structure. This is useful in working with _discriminated unions._

  Lets take the previous switch example:

  ```ts
  function getAreaOfShapes(shape: Shapee) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;

      case "square":
        return shape.sideLength ** 2;

      default:
        const _exhaustiveCheck: never = shape;
        throw new Error(`Unhandled shape kind ${_exhaustiveCheck}`);
    }
  }
  ```

## Exhaustiveness checking

We can say that this is a kind of extra effort that we are putting in out TypeScript code after checking all possible value's type.

**What does it mean?**

It means after checking all possible values and its type we are sure that there is nothing that we need to worry about. But, there is something unexpected happens then we can throw an error as a response.

For example:

```ts
function getAreaOfShapes(shape: Shapee) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;

    default:
      const _exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape kind ${_exhaustiveCheck}`);
  }
}
```

Here, we have successfully implemented logics for both possible types and if the _shape_ is different from _circle or square_ we'll throw an error. But keep in mind all possible types should be handled.

Lets understand it a little bit more

Lets add a new shape in the _Shapee_ type

```ts
interface Rectangle {
  king: "rectangle";
  height: number;
  width: number;
}

type Shapee = Circle | Square | Rectangle;

function getAreaOfShapes(shape: Shapee) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;

    default:
      const _exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape kind ${_exhaustiveCheck}`);
  }
}
```

```bash
warning
  Type 'Rectangle' is not assignable to type 'never'.ts(2322)
  const _exhaustiveCheck: never
```

This happened because we have not checked all possible value of the _Shapee_ type. Let's fix this :-

```ts
function getAreaOfShapes(shape: Shapee) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;

    case "rectangle":
      return shape.height * shape.width;

    default:
      const _exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape kind ${_exhaustiveCheck}`);
  }
}
```

```bash
no warnings
```

## SUMMARY ===> Make sure the operation that we are doing on a value must have a specific type which TypeScript knows well. Otherwise, we'll get in trouble and TypeScript throw errors. That's it. Overall, Ensure the Type. If you are sure about the type of the value TypeScript never going to thrown errors to you.

# Object Types

In JavaScript, Objects are the fundamental way to pass around data.

In TypeScript, we can defined objects type in three ways

```ts
// 1. Anonymous
function sayHello(person: { name: string; age: number }) {
  console.log(`Hello ${person.name}`);
}

// 2. Interface
interface Person {
  name: string;
  age: number;
}

function sayHello1(person: Person) {
  console.log(`Hello ${person.name}`);
}

// 3. Type Alias
type Person1 = {
  name: string;
  age: number;
};

function sayHello2(person: Person1) {
  console.log(`Hello ${person.name}`);
}
```

## `Property Modifiers`

Each property in an object can specify a couple of things:

- The type.
- Whether the property is optional.
- Whether the property can be written to. (Existance of property)

#### `1. Optional Properties`

In an object, we can mark a property as an optional property by adding a _?_ to the end of their names.

[Checkout](./practice/object.ts)

- TypeScript will tell use they're potentially _undefined_.
- [Another way to set default property for opional values](./practice/object.ts)
- Note that there is currently no way to place type annotations within destructuring patterns.

#### `2. readonly Properties`

We can also mark properties to be _readonly_.

[Checkout](./practice/object.ts)

- This doesn't mean that the property is totally immutable. No, we can write the property value if it's an object by assuming that the _readonly_ property is a parent node not the interface itself.

- In fact, TypeScript dosen't factor in whether properties on two types are _readonly_ when checking whether those types are compatible.

[Checkout](./practice/object.ts)

#### `3. Index Signature`

- Index Signatures let us to define dynamic objects with controlled key and value types.

- Index signatures are a way to tell TypeScript that an object can have dynamic properties of a certain type. we don't need to know the names of all the properties in advance. Instead, we define a general rule about the type of the property keys and their values.

**Why do we need it?**

Imagine we have an object where we don’t know the exact property names beforehand, but we know the types of keys and values.

```ts
// Syntax

type IndexSignature = {
  [key: string]: number;
};
```

- _key: string_ means all property names (keys) must be strings.
- _number_ means all property values must be numbers.

**_KEY RULES TO REMEMBER_**

1. Key Type: Index Signature only support _string, number, or symbol_ as keys.
2. Strict value types: The vlaue of all property must match the type specified.
3. They also enforce that all properties match their return type. This is because a string index declares that _obj.property_ is also available as _obj["property"]_.

In the following example, name’s type does not match the string index’s type, and the type checker gives an error:

```ts
interface DynamicObject {
  name: string;
  age: number;
  [key: string]: number;
}
```

```bash
Warning

Property 'name' of type 'string' is not assignable to 'string' index type 'number'.ts(2411)
```

4. However, properties of different types are acceptable if the index signature is a union of the property types:

```ts
interface DynamicObject {
  name: string;
  age: number;
  [key: string]: number | string;
}
```

5. Finally, we can make index signatures _readonly_ in order to prevent assignment to their indices.

```ts
interface DynamicObject2 {
  readonly [key: string]: string;
}

const user: DynamicObject2 = {
  name: "Laxman Krishnamurti",
  age: "22",
  email: "laxmankrishnamurti@gmail.com",
};
user.name = "Sonu Kumar";
```

```bash
Warning

Index signature in type 'DynamicObject2' only permits reading.ts(2542)
const user: DynamicObject2
```

We can't override the value of the dynamic object because they set to be _readonly_.

## `Excess Property Checks`

If an object literal has any properties that the _target type_ doesn't have, we'll get an error. Because, Object literal get special treatment and undergo _excess property checking_ when assigning them to a variable, or passing them as arguments.

For instance,

```ts
interface ObjectInterface {
  name: string;
  age: number;
}

const person: ObjectInterface = {
  namee: "Laxman Krishnamurti",
  age: 22,
};
```

```bash
Warning

Object literal may only specify known properties, but 'namee' does not exist in type 'ObjectInterface'. Did you mean to write 'name'?ts(2561)
(property) namee: string
```

- Type Assertion is also a good way to apply these checks.

- One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable. Since, assigning variable directly to a function won't undergo _excess property checks_, the compiler won't give us any error:

```ts
interface SqureConfig {
  color?: string;
  width?: number;
}

function createSqare(obj: SqureConfig): { color: string; area: number } {
  return {
    color: obj.color ? obj.color : "Oranged",
    area: obj.width ? obj.width * obj.width : 200,
  };
}

const square = { colour: "Salmon", width: 200 };

const myShape = createSqare(square);
console.log("myShape", myShape);
```

```bash
# Output

myShape { color: 'Oranged', area: 40000 }
```

Let's change the argument:

```ts
const myShape = createSqare({ colour: "Salmon", width: 200 });
```

```bash
Warning

Object literal may only specify known properties, but 'colour' does not exist in type 'SqureConfig'. Did you mean to write 'color'?ts(2561)
(property) colour: string
```

## `Extending Types`

\_Interface_s allows us to build up new types from other types by extending them.

This allows to cut down the amount of type declaration boilerplate we have to write, and for signaling intent that several different declaration of the same property might be related.

Interface can also extend from multiple types.

In short, the _extend types_ allow us to copy or inherit property from different type declaration.

```ts
interface Book {
  name: string;
  year: number;
}

interface Author {
  author: string;
}

interface AuthorBook extends Book, Author {}

const newBook: AuthorBook = {
  author: "Acharya Prashant",
  name: "KARMA",
  year: 2020,
};
```

## `Intersection Types`

TypeScript also provides another construct called _intersection types_ that is mainly used to combine existing object types.

An intersection type is defined using the _&_ operator. We can say this is similar to _extends_.

```ts
interface Book {
  name: string;
  year: number;
}

interface Author {
  author: string;
}

// interface AuthorBook extends Book, Author {}
type AuthorBook = Book & Author;

const newBook: AuthorBook = {
  author: "Acharya Prashant",
  name: "KARMA",
  year: 2020,
};
```

```bash
# Output

newBook {
  author: 'Acharya Prashant',
  name: 'KARMA',
  year: 2020
}
```

## `Interface Extension vs. Intersection`

Can you imagine, what will happen if we are trying to merge two types with different context, like interface and the type alias.

1. If interfaces are defined with the same name, TypeScript will attempt to merge them if the properties are compatible. If the properties are not compatible (i.e., they have the same property name but different types), TypeScript will raise an error.

2. In the case of intersection types, properties with different types will be merged automatically. When the type is used later, TypeScript will expect the property to satisfy both types simultaneously, which may produce unexpected results and the result will be _never_ type.

[Checkout](./practice/object.ts)

## `Generic Object Types`

This is same as _generic function_. Where _Type_ is a placeholder that will get replaced with some other type.

- _Interfaces_ can be used to make generic objects.
- Instead, we can also use _Type aliases_ to create more generic types for different types.

```ts
interface Person<T> {
  data: T;
}

type Person<T> = {
  data: T;
};

type userid<T> = T | null;
type data<T> = T | T[];
```

Example :-

```ts
type TypeOrNull<Type> = Type | null;
type TypeOrArray<Type> = Type | Type[];

type TypeMany<Type> = TypeOrNull<TypeOrArray<Type>>;

const data1: TypeMany<number> = [1, 2, 3, 4, 5];
const data2: TypeMany<string> = "Laxman Krishnamurti";
const data3: TypeMany<null> = null;

console.log("data1", data1);
console.log("data2", data2);
console.log("data3", data3);
```

```bash
# Output

data1 [ 1, 2, 3, 4, 5 ]
data2 Laxman Krishnamurti
data3 null
```

### `The Array Type`

```bash
# Generic Array type

Array<Type>
```

```ts
// Array of numbers
let numbers: Array<number> = [1, 2, 3, 4];

// Array of Strings
let strings: Array<string> = ["apple", "banana", "cherry"];

// Array of objects
interface Person {
  name: string;
  age: number;
}

let people: Array<Person> = [
  { name: "Laxman", age: 25 },
  { name: "Sonu", age: 30 },
];

// Jagged array (Matrix)

let matrix: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printMatrix(matrix: Array<Array<number>>): void {
  matrix.forEach((row) => console.log(row.join(" ")));
}

printMatrix(matrix);
// Output:
// 1 2 3
// 4 5 6
// 7 8 9

// Combining Generic Array Types with Constraints
function getNames<Type extends { name: string }>(
  items: Array<Type>
): Array<string> {
  return items.map((item) => item.name);
}

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];

console.log(getNames(products)); // Output: ["Laptop", "Phone"]
```

At last example:-

- Type extends { name: string } means Type must have a name property.
- You can pass arrays of any objects that follow this structure.

```ts
// Generic Array in Data Structure

class Stack<Type> {
  private items: Type[] = [];

  push(item: Type): void {
    this.items.push(item);
  }

  pop(): Type | undefined {
    return this.items.pop();
  }

  peek(): Type | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  getItem(): Type[] {
    return this.items;
  }
}

const numberStack = new Stack<number>();
console.log(numberStack.isEmpty());
console.log(numberStack.getItem());
numberStack.push(10);
console.log(numberStack.peek());
console.log(numberStack.getItem());
console.log(numberStack.isEmpty());
console.log(numberStack.pop());
console.log(numberStack.isEmpty());
```

```bash
# Output

true
[]
10
[ 10 ]
false
10
true
```

### `The ReadonlyArray Type`

The _ReadonlyArray_ is a special type that describe arrays that shouldn't be changed. We should only use it for intent.

When we see a function that returns \_ReadonlyArray_s, it tells us we're not meant to change the content at all, and when we see a function that consumes \_ReadonlyArray_s, it tells us that we can pass any array into that function without worrying that it will change its contents.

```ts
// ReadonlyArray constructor (only accept a type)

new ReadonlyArray(number);
```

```ts
const marks: ReadonlyArray<number> = [1, 2, 3, 4, 5];
const marks2: readonly number[] = [1, 2, 3, 4, 5];

marks.push(6);
marks2.push(6);
```

```bash
Property 'push' does not exist on type 'readonly number[]'.ts(2339)
any
```

**`Important!`**

Unlike the _readonly_ property modifier, assignability isn't bidirectional(functioning in two direction) between regular _Arrays_ and _ReadonlyArrays_.

```ts
let a: readonly string[] = ["a", "b", "c"];
let b: string[] = [];
a = b;
b = a;
```

```bash
Warning

The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.ts(4104)
```

### `Tuple Types`

A tupele is like an array, but it has a fixed number of elements, and each element can have a specific type.

```ts
let myTuples: [string, number] = ["Laxman Krishnamurti", 22];
```

- This tuple has exactly two elements.
- The first element must be a _string_.
- The second element must be a _number_.

- Tuples can have _optional property_ by writing out a question mark(?, after the element's type).
- _Optional tuple_ elements can only come at the end, and also affect the type of _length._

```ts
type myTuple2 = [number, string, string?];
const myTuple2Example = [22, "Laxman Krishnamurti"];
console.log("myTuple2Example lenght", myTuple2Example.length);

type myTuple3 = [number, string?, string?];
const myTuple3Example = [
  22,
  "Laxman Krishnamurt",
  "laxmankrishnamurti@gmail.com",
];
console.log("myTuple3Example length", myTuple3Example.length);
```

```bash
# Output

myTuple2Example lenght 2
myTuple3Example length 3
```

- Tuples can also have rest elements, which have to be an array/tuple type.

```ts
type RestTuple = [number, ...boolean[], string];

const restTuples: RestTuple = [
  22,
  true,
  false,
  false,
  false,
  true,
  true,
  "Laxman Krishnamurti",
];
console.log("restTuples", restTuples);
console.log("2nd element", restTuples[1]);
console.log("restTuples length", restTuples.length);
```

```bash
# Output

restTuples [ 22, true, false, false, false, true, true, 'Laxman Krishnamurti' ]
2nd element true
restTuples length 8
```

**Why might Optional and Rest element be useful?**

Yes, Because it allows TypeScript to correspond tuples with parameter list.

Have a loo on this example:

```ts
function getParameterList(...args: [number, string, ...boolean[]]) {
  const [totalConnections, type, ...isValid] = args;

  console.log("totalConnections", totalConnections);
  console.log("Type", type);
  console.log("isValid", isValid);
}

getParameterList(10000, "object", false, true, true, false);
```

```bash
# Output

totalConnections 10000
Type object
isValid [ false, true, true, false ]
```

```ts
//The above function is equivalent to:

function getParameterList(
  totalConnections: number,
  type: string,
  ...isValid: boolean[]
) {
  //body
}
```

**`This is handy when we want to take a variable number of arguments with a rest parameter, and we need to minimum number of elements, but we don't want to introduce intermediate variable.`**

### `readonly Tuple Types`

Tuple types have _readonly_ variants, and can be specified by sticking a _readonly_ modifier in front of them - just like with array shorthand syntax.

And it is obvious we can't write any property of a _readonly_ tuple.

```ts
// Type Assertion
let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

distanceFromOrigin(point);
```

```bash
Warning

Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
  The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
```

TypeScript is trying to protect us from accidentally changing a readonly value. For example, imagine if the function tried to modify the tuple:

```ts
function distanceFromOrigin([x, y]: [number, number]) {
  x = 5; // This is allowed for mutable tuples
  return Math.sqrt(x ** 2 + y ** 2);
}
```

If point were readonly, this modification would violate the rules of immutability. To prevent this, TypeScript blocks the assignment.

**SOLUTION**

```ts
let point = [3,4]
// OR
[x, y]: readonly [number, number]
```

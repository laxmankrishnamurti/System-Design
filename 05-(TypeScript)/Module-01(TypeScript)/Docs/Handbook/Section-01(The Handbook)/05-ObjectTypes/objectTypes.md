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

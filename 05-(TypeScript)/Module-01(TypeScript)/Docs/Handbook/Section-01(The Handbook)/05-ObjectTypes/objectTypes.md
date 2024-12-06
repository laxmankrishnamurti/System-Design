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

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

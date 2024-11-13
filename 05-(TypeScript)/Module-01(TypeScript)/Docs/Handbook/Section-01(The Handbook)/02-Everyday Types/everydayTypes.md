# Everyday Types

In this chapter we'll learn about the fundamental types which we'll use on a daily basis or you can say these types are very common which we use in our TypeScript code. And we'll also learn about the palces where we can use these types effectively. This will be the fundamental building blocks that will help us to make complex type structure. So, this is very important to understand how these types work on which places.

With that lets get started.

## The primitives: string, number, and boolean

These are the most common primitive types that we use in our JavaScript code. In TypeScript for each of the type has a corresponding type.

- number for number
- string for string
- boolean for boolean

```ts
const age: number = 22;
const username: string = "Laxman Krishnamurti";
const isAuthorized: boolean = true;
```

**Note: String, Number, Boolean, all are legal keyword but all of these are different from the type that we have used in above code. The following types (Number, String, Boolean) are used to convert a value from one type to another**

```js
let age = 22;
age = String(age);
console.log("typeof age is", typeof age);
```

Now, age type has changed from number to string. Hence, using these keyword converts a value from one type to another. So, don't get confused always use lowercase for TypeScript.

## Array

To specify the type of an array like [1, 2, 3], we can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on).

```ts
const marks: number[] = [85, 75, 91, 92, 89, 95];
console.log("marks", marks);
```

This syntax is also the same thing.

```ts
const marks: Array<number> = [85, 75, 91, 92, 89, 95];
console.log("marks", marks);
```

In TypeScript the syntax is generally used for _generics_ which we'll cover later on.

## any

TypeScript also has a special type _any_. This can be a worst thing in our program that we don't want to do this because it breaks(violate) the TypeScript boundry or we can say the TypeScript principles on which TypeScript stands.

Because it allows to do anything else that's syntactically legal. Lets understand it.

```ts
const userProfile: any = {
  name: "Laxman Krishnamurti",
  age: 22,
};

userProfile();
userProfile.country;
userProfile.getIpAddress();
```

Now, at this point TypeScript inference capability is get turned off because of the _any_ type and TypeScript will not thow any warning message to use because we have explicitly defined that the object is going to be _any_ type. TypeScript says- Ok!. Now, i'm not going to touch any code which is related to the _userProfile_ object but it should be syntactically valid otherwise i will thow an syntax error.

We must avoid such kind of thing to do in our codebase because it creates problems and become a threat for our application. So, use the _type_ very carefully.

**Use the compiler flag noImplicitAny to flag any implicit any as an error.**
**We don't need to explicitly define a type for a single line of variable. TypeScript will automatically inffered the type based on the value that we have assigned to the variable**

```ts
const username = "Laxman Krishnamurti"; // username: string (inffered type annotation)
```

## Functions

Funcationas are the primary means of passing data around in JavaScript. TypeScript allows use to specify the types of both the input and output values of functions.

1. **Type annotation after each parameter**

```ts
const sayHello = (name: string, date: Date) => {
  console.log(`Hello ${name}, today is ${date.toLocalDateString()}`);
};
```

- This will define what types of parameters the function accepts.
- When a parameter has a type annotation, arguments to that function will be checked means we can not pass a value which type is different from the type the function is expecting. Otherwise, TypeScript will throw a warning message.

```bash
sayHello(22, new Date())
# Argument of 'number' is not assignable to parameter of type 'string'
```

**_Even if we don't have type annotations on our parameter, TypeScript will still check that we passed the right number of arguments._**

```ts
function sayHello(name, date) {
  console.log(`Hello ${name}, today is ${date}`);
}
sayHello("Laxman Krishnamurti");
```

```bash
Warning message

Expected 2 arguments, but got 1.ts(2554)
everydayTypes.ts(7, 25): An argument for 'date' was not provided.
function sayHello(name: any, date: any): void
```

2. **Type annotations for return values**

We can also add return type annotations. Return type annotations appear after the parameter list:

```ts
function getIpAddress(requestDetails): string {
  return "192.168.16.254";
}
getIpAddress(requestObject);
```

- Actually what is happening here is we are forcing the function explicitly to return a string.

- We usually don't need a return type annotation because TypeScript will infer the function's return type based on its statements.

- Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.

- But we can use the explicit return type based on our use-cases, like this

```ts
function getIpAddress() {
  return "192.168.16.254";
}

const userIpAddress: number = getIpAddress();
```

```bash
warning

Type 'string' is not assignable to type 'number'.ts(2322)
const userIpAddress: number
```

Because the variable is expecting that the function will return me a number not a string so that's why TypeScript is giving a warning message by saying the Hey! this should not be done because the function is returning a string value not a number

Lets fix this..

```ts
function getIpAddress(): string {
  return "192.168.16.254";
}

const userIpAddress: string = getIpAddress();
```

**If a function is returning a Promise we can annotate like this**

```ts
async function getTotalSubscribers(): Promise<number> {
  return 10000000000;
}
```

### Anonymous Functions

If TypeScript encounter an anonymous function it uses the context to determine the type of the value. This same thing happens with _type inference_. When a function appears in a place where TypeScript can determine how it's going to be called, it used the current context for values to associate types.

```ts
const mixArr = ["laxman", 22, true];
mixArr.forEach((value) => {
  console.log("value is", value);
  console.log(typeof value.toFixed(2));
});
```

```bash
warning

Property 'toFixed' does not exist on type 'string | number | boolean'.
  Property 'toFixed' does not exist on type 'string'
```

TypeScript might be thinking that all values is of type _string_. I don't know lets take another example to analyze.

```ts
const newMix = [22, 32, "laxman krishnamurti"];
newMix.forEach(function (value) {
  console.log("value is", value);
  console.log("typeof value is", typeof value);
  console.log("fixed value", value.toFixed(2));
});
```

```bash
warning

Property 'toFixed' does not exist on type 'string | number'.
  Property 'toFixed' does not exist on type 'string'.
```

- **Contextual typing will only work if we passed a specific type of array.**

```ts
const newMix = [22, 32];
newMix.forEach(function (value) {
  console.log("value is", value);
  console.log("typeof value is", typeof value);
  console.log("fixed value", value.toFixed(2));
});
```

Now, TypeScript can infer type for every single value.

- TypeScript used the types of the _forEach_ function, along with the inferred type of the array, to determine the type _s_ will have.

- This process is called _contextual typing_ because the context that the function occurred within informs what type it should have.

## Object Types

Apart from primitives, the most common sort of type we'll encounter is an _object type._ To define an object type, we simply list the properties and their types.

```ts
function printUserDetails(user: { name: string; email: string }) {
  console.log("Hello", user.name);
  console.log("Your registered email id is", user.email);
}

const newUser = {
  name: "Laxman Krishnamurti",
  email: "laxmankrishnamurti@gmail.com",
};

printUserDetails(newUser);
```

- We can either use _,_ or _;_ to separate properties, and the last separator is optional.

- If we don't specify a type, it will be assumed to be _any_

```ts
function printUserDetails(user: { name: any; email: any }) {
  console.log("Hello", user.name);
  console.log("Your registered email id is", user.email);
}
```

**Optional Properties**

We can also mark properties to be optional

```ts
function printUserDetails(user: { name: string; email?: string }) {
  console.log("Hello", user.name);
  console.log("Your registered email id is", user.email);
}

const newUser = {
  name: "Laxman Krishnamurti",
  email: "laxmankrishnamurti@gmail.com",
};

const user = {
  name: "Harshad Mehta",
};

printUserDetails(newUser);
printUserDetails(user);
```

```bash
Both are OK!
```

- The **?** is also used for optional chaining.

- In JavaScript, if we try to access a property that dosen't exist, we'll get the _undefined_ rather than a _runtime error_.

- So, when we read from an optional property, we'll have to check for _undefined_ before using it.

```ts
function logUser(obj: { name: string; email?: string }) {
  console.log("you registered email id is", obj.email);
}
```

```bash
(property) email?: string | undefined

If value will be undefined it can crash the application. Always check for undefined we are accessing an optional property
```

Let's fix this .....

```ts
function showDetails(obj: { name: string; email?: string }) {
  if (obj.email !== undefined) {
    console.log("your registered email id is", obj.email);
  }
}
```

```bash
(property) email?: string

Now, we are good to go!
```

```ts
function logUser(obj: { name: string; email?: string }) {
  console.log("LOGUSER CALLED");
  console.log("you registered email id is", obj.email.toUpperCase());
}
```

```bash
warning

'obj.email' is possibly 'undefined'.ts(18048)
(property) email?: string | undefined
```

```ts
// A safe alternative using modern JavaScript syntax
function logUser(obj: { name: string; email?: string }) {
  console.log("LOGUSER CALLED");
  console.log("you registered email id is", obj.email?.toUpperCase());
}
```

```bash
no warnings but value can be undefined
```

## Union Types

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. It’s time to start combining them in interesting ways.

### Defining union types

- A union type is a type formed from two or more other types, representing values that may be any one of those types.

- We refer to each of these types as the union’s members.

```ts
function printUserId(id: number | string) {
  console.log("id", id);
}

printUserId("lsdjk");
printUserId(11);
printUserId({ name: "Laxman" }); //warning :- Argument of type '{ name: string; }' is not assignable to parameter of type 'number | string '.
```

**The separator of the union members is allowed before the first element, so you could also write this:**

```ts
function printId(id: "|" number | string) {
  console.log("userid is ", id);
}
printId("lakdsj");
printId(22);    // ignore the "" on the first one separator
```

- TypeScript will only allow an operation if it is valid for every member of the union. For example, if we have the union string | number, we can’t use methods that are only available on string:

```ts
function welcomeKit(x: number[] | string) {
  console.log(x.slice(0, 3));
}
```

Here, we don't need any kind of parameter validation because either the input is an array or a string both have the same method that we have used in the code.

```ts
function printId(id: "|" number | string) {
  console.log("userid is ", id.toFixed(2));
}
```

```bash
warning

Property 'toFixed' does not exist on type 'string | number'.
  Property 'toFixed' does not exist on type 'string'.
```

- **Solution :: Narrow down your code**
- **Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code**

```ts
function printId(id: "|" number | string) {
    if(typeof id === number){
        console.log("userid is ", id.toFixed(2));
    }
}
```

Because TypeScript knows that only a _number_ value will have a _typeof_ value _number_

```ts
function welcomeKit(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(x.join(" "));
  } else {
    console.log(x.toLocaleLowerCase());
  }
}
```

- TypeScript will automatically detect if this was not an array it must be a string so that's why it is not giving any kind or warning messages.

**_Only the intersection of those facts(string[] | string) applies to the union of the sets themselves. In short, the common part between the facts that is described as type will be union. Don't get confused about union is something called combining all facts, not this is not like that. In TypeScript UNION simply means the common part among all the facts. That's it._**

```ts
const marks1 = [15, 45, 8, 45, 8, 45, 8];
const marks2 = [4, 5, 8, 1, 2, 4, 5, 1, 8];

// The union will be [8,8] not this [15,45,8,4,5,1,2]
```

## Type Aliases

This is acts like a function means we can create once and use multiple times as a reference. This exactly done by _Type aliases_. We can create a type alias and use it anywhere which need the same kind of type.

```ts
type User = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};

const user1: User = {
  name: "Laxman krishnamurti",
  age: 22,
  isLoggedIn: true,
};

const user2: User = {
  name: "Harshad Mehta",
  age: 42,
  isLoggedIn: false,
};

function printUser(data: User) {
  for (let key in data) {
    console.log(`${key} : ${data.key}`);
  }
}

printUser({
  name: "Sonu Kumar",
  age: 17,
});

//Argument of type '{ name: string; age: number; }' is not assignable to parameter of type 'User'.
//Property 'isLoggedIn' is missing in type '{ name: string; age: number; }' but required in type 'User'
```

**Combining union with type aliases**

```ts
type userId = number | string;
```

## Interfaces

Interface is a way to pre-define an object shape which means anyone try to use the interface must have the shape that is defined in the interface.

This is same as _Type Aliases_ but not exactly. _Interfaces_ are especially designed for defining an object shape.

```ts
interface User {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

function showUserDetails(data: User) {
  for (let key in data) {
    console.log(`${key} : ${data[key]}`);
  }
}

showUserDetails({
  name: "Laxman Krishnamurti",
  age: 22,
  isLoggedIn: true,
});
```

### Difference Between Type Aliases and Interfaces

- Very similar
- We can choose any one of them
- Almost all features of an _interface_ are available in _type_

- **But the key distinct is that a _type_ cannot be re-opened to add add new properties**
- **On the other hand, _interface_ is always extendable**

```ts
//1. Extends with interfaces
interface User {
  name: string;
}

interface Book extends User {
  author: string;
}

function getBook(data: Book): Book {
  return data;
}

getBook({
  name: "KARMA: why everything you know about it is wrong",
  author: "Acharya Prashant",
});

const myBook = getBook();
console.log("Book name", myBook.name);
console.log("Book name", myBook.author);
```

```bash
# Output

Book name KARMA: why everything you know about it is wrong
Book name Acharya Prashant
```

```ts
//1. Extending a type via intersections

type Animal = {
  name: string;
};

type Dog = Animal & {
  legs: number;
};

function getAnimalInfo(data: Dog) {
  return data;
}

const myPet = getAnimalInfo({
  name: "Manohar",
  legs: 4,
});
console.log(`${myPet.name} has ${myPet.legs} legs`);
```

```bash
# Output
Manohar has 4 legs
```

### **_The main difference :: re-opening_**

```ts
interface RequestObj {
  origin: string;
}

interface RequestObj {
  ipAddress: string;
}

const newRequestObj: RequestObj = {
  origin: "India",
  ipAddress: "192.168.12.254",
};
console.log("newRequestObj", newRequestObj);
```

```bash
newRequestObj { origin: 'India', ipAddress: '192.168.12.254' }
```

```ts
type Req = {
  origin: string;
};

type Req = {
  ipAddress: string;
};
```

```bash
# Output
Duplicate identifier 'Req'.ts(2300)
type Req = {
    ipAddress: string;
}
```

- **Interfaces may only be used to declare the shapes of objects, not rename primitives.**

```ts
interface RequestObj {
  origin: string;
}

interface RequestObj {
  ipAddress: string;
  origin: number;
}
```

```bash
Subsequent property declarations must have the same type.  Property 'origin' must be of type 'string', but here has type 'number'.ts(2717)
everydayTypes.ts(126, 5): 'origin' was also declared here.
```

- **Type aliases may not participate in declaration merging, but interfaces can.**
- **Using interfaces with extends can often be more performant for the compiler than type aliases with intersections**

## Type Assertions

This is used in the scenario where we have a little bit more information than TypeScript for a particular value.

```html
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

- TypeScript only knows that this will return some kind of HTMLElement.
- But we might know that your page will always have an HTMLCanvasElement with a given ID.

**If the file is in .tsx then we can convert the syntax into this form**

```jsx
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

- Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of our code.

**Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong. This how TypeScript ensure the type safety of HTML element**

- TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:

```ts
const age = "22" as number;
```

```bash
warnings

Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
```

## Literal Types

Literal types means we are not actually assigning any kind of types to the variable instead we are assign a value which is static, cannot be changed.

```ts
let username = "Laxman Krishnamurti";
username = "Harshad";
username;
```

```bash
no warnings; because we are not changing the type of the variable so that's why its allowed. And also let gives the liberty to change the value of the variable but TypeScript prevent from changing the type of the variable
```

**Literal types**

```ts
let username: "Harshad" = "Harshad"; // fine
username = "Harshad"; // fine
username = "Laxman"; // Error :: Type '"Laxman"' is not assignable to type '"Harshad"'.ts(2322)
```

```ts
function username(name: "Laxman" | "Harshad" | "Sonu") {
  console.log("name", name);
}

// except this "Laxman" | "Harshad" | "Sonu" any value is not allowed to be passed in the function as an argument.

username("Rohit")

Argument of type '"Rohit"' is not assignable to parameter of type '"Harshad" | "Laxman" | "Sonu"'.ts(2345)
```

- Literal Type

  - number
  - string
  - boolean

- **We can experiment the feature with interfaces**

```ts
function getUser(user: <Interfacename> | <any literal types>){
    // code here
}
```

### Literal inference

When we initialize a variable with an object, TypeScript assumes that the properties of that object might change vlaues later.

```ts
const count = {
  counter: 0,
};
count.counter++;
```

T- ypeScript dosen't assume the assignment of _1_ to a field which previously had _0_ is an error.

- Another way of saying this is that obj.counter must have the type number, not 0, because types are used to determine both reading and writing behavior.

```ts
count.counter = "newCount"; // warn : Type 'string' is not assignable to type 'number'.ts(2322)
```

So, that's why whenever we try to change the type of the property TypeScript starts giving warnings. Because it dosen't focus on the value of the property but the type of the property.

Lets have a look on this code

```ts
declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
```

```bash
warning

Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.ts(2345)
```

Because the object can be evaluated(or changed) between the creation of _req_ and the call of _handleRequest_ which could assign a new string like "DELETE" to _req.method_, TypeScript considers this code to have an error.

Why we don't see any error regaring the url? Because the url is not specified that it should be static or sort of _unions_ it can take any vlaue which is simply a string.

The problem with the second argument in the function that is only expecting to pass either _"GET"_ or _"POST"_. But the problem with the object literal is its vlaue can be changed so that's why TypeScript assume this can create problem if it get changed. So, let me thown an error before anything goes wrong.

**SOLUTION :: There are two ways to work around this.**

1. **Change the inference to explicitly assing a vlaue by type assertion in the second argument**

   ```ts
   handleRequest(req.url, req.method as "GET");
   OR;
   const req = { url: "https://example.com", method: "GET" as "GET" };
   ```

2. **Convert the entire object to be type literals**

   ```ts
   const req = { url: "https://example.com", method: "GET" } as const;
   handleRequest(req.url, req.method);
   ```

   - **The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.**

## null and undefined

In JavaScript this means

- null ==> signal absent
- undefined ===> uninitialized

- **TypeScript has two corresponding _types_ by the same names.**
- **How these types behave depends on whether we have the _strictNullChecks_ option on.**

1. **_strictNullChecks_ off**

   - If it is off, values might be _null_ or _undefined_ can still be accessed normally and the values null and undefined can be assigned to a property of any type.

   - This is what we have disscussed previously that if the option is turn off, TypeScript will not give error related to _null_ or _undefined_ means any variable can hold _null_ or _undefined_ vlaue.

   - The lack of checking for these values tends to be a major source of bugs

Recommendation :: Always checks the _strictNullChecks_ flag in the configuration file.

2. **_strictNullChecks_ on**

   - If the flag is _on_ we explicitly need to check for the value before using any method or property on the vlaue.

   - Just like checking the _undefined_ before using any optional property.

   - For this, we can use _Narrowing_.

```ts
function One(id: number | null) {
  if (typeof id === number) {
    console.log(id.toFixed(2));
  }
}
One(null);
```

## Non-null Assertion Operator (Postfix !)

- This is a special kind of _Type Assertion_ that TypeScript provides us.
- Writing _! (exclamation mark)_ after any expression is effectively a _type assertion_ that the vlaue isn't _null_ or _undefined_

```ts
function One(id: Number | null) {
  console.log(id!.toFixed(3));
}
functionOne(null);
```

```bash
No Warning! 😊
```

But this doesn't mean we will not get any kind of error when we run the program. Let's run the program then see what heppen.

```bash
console.log(id.toFixed(3));
                   ^
TypeError: Cannot read properties of null (reading 'toFixed')
```

- **It means writing the _! (exclamation mark)_ after an expression is just ensure that the value is not either _null or undefined_. But here we have passed a null vlaue as an argument to the function so when engine starts running the code it see the _.toFixed(2)_ method on a null value, cause the error. **

- **This doesn’t change the runtime behavior of our code, so it’s important to only use _!_ when we know that the value can’t be _null or undefined_.**

## Enums (Enumeration)

- Enums are a feature added to JavaScript by TypeScript
- That allows for describing a value which could be one of a set of possible named constants.
- Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime.

**In short, enums allow use to define a set of named constacts or create a set of distinct cases. TypeScript provides both numeric and string-based enums.**

Just make it simple.

In TypeScript, an enum (short for "enumeration") is a way to give names to a set of related values. Think of it as a list of options or categories we define in your code. Each option in the list has a name, and TypeScript automatically assigns a number to each option in the background.

for example, let's say we have a list of colors:

```ts
enum Colors {
  Orange,
  White,
  Salmon,
}
```

Here, Colors is an enum with three options: Red, Green, and Blue. TypeScript assigns Orange the number 0, White the number 1, and Salmon the number 2.

**Real-world problem solution**

```ts
enum UserRole {
  Admin,
  Normal,
}

function checkRole(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access granted!");
  } else if (role === UserRole.Normal) {
    console.log(
      "You don't have permission to override the content of the file because you are a normal user"
    );
  } else {
    console.log("Unknown user role! Please enter a valid role");
  }
}

const user: UserRole = UserRole.Admin;
checkRole(user);
```

```bash
Full access granted!
```

## Summary ===> **In short, we try to do any kind of actions which exceeds the TypeScript Boundry it will always warn us. TypeScript is only concerned with the structure of the value. Being concerned only with the structure and capabilities of types is why we call TypeScript a structurally typed type system.**

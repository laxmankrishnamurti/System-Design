function sayHello(person: { name: string; age: number }) {
  console.log(`Hello ${person.name}`);
}

interface Person {
  name: string;
  age: number;
}

function sayHello1(person: Person) {
  console.log(`Hello ${person.name}`);
}

type Person1 = {
  name: string;
  age: number;
};

function sayHello2(person: Person1) {
  console.log(`Hello ${person.name}`);
}

console.log("OPTIONALE PROPERTY");

interface Person2 {
  name: string;
  age: number;
  email?: string;
  mob?: number;
}

function fetchAccountDetails({
  name = "laxman",
  age = 22,
  email = "demo@gmail.com",
  mob = 8252,
}: Person2) {
  if (email === "demo@gmail.com") {
    return "Oops! This is a Demo account!";
  }
}

console.log("READONLY PROPERTY");

interface Person3 {
  readonly name: string;
  age: number;
}

const Person3: Person3 = {
  name: "Laxman Krishnamurti",
  age: 22,
};

// Person3.name = "Harshad Mehta"
//Warning:  Cannot assign to 'name' because it is a read-only property.ts(2540)

interface Person4 {
  readonly name: {
    firstName: string;
    lastName: string;
  };
  age: number;
}

const Person4: Person4 = {
  name: {
    firstName: "Laxman",
    lastName: "Krishnamurti",
  },
  age: 22,
};

// Person4.name = {}
// Warning: Cannot assign to 'name' because it is a read-only property.ts(2540)

Person4.name.firstName = "Harshad";
Person4.name.lastName = "Mehta";

console.log("Person4", Person4);

// Person4 { name: { firstName: 'Harshad', lastName: 'Mehta' }, age: 22 }

interface Person5 {
  readonly name: string;
  readonly age: number;
}

interface Person6 {
  name: string;
  age: number;
}

const person5: Person5 = {
  name: "Laxman Krishnamurti",
  age: 22,
};

const person6: Person6 = person5;
console.log("person6 name", person6.name); // person6 name Laxman Krishnamurti
console.log("person6 age", person6.age); //  person6 age 22

console.log("INDEX SIGNATURE");

interface EnglishToHindi {
  [key: string]: string;
}

const dictionary: EnglishToHindi = {
  hello: "नमस्ते",
  bye: "अलविदा",
  welcome: "स्वागत है",
};

console.log(dictionary.hello); // नमस्ते
console.log(dictionary.bye); // अलविदा

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["1", "2", "3"];
console.log("second item", myArray[1]); // second item 2
console.log("second item", myArray["1"]);
// myArray.push("4")

interface DynamicObject {
  name: string;
  age: number;
  [key: string]: number | string;
}

interface DynamicObject2 {
  readonly [key: string]: string;
}

const user: DynamicObject2 = {
  name: "Laxman Krishnamurti",
  age: "22",
  email: "laxmankrishnamurti@gmail.com",
};
// user.name = "Sonu Kumar"

//Warnings
/*
 Index signature in type 'DynamicObject2' only permits reading.ts(2542)
 (index) DynamicObject2[string]: string
*/

interface ObjectInterface {
  name: string;
  age: number;
}

const person: ObjectInterface = {
  name: "Laxman Krishnamurti",
  age: 22,
};

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

console.log("newBook", newBook);

console.log("DIFFERENCE BETWEEN EXTEND AND INTERSECTION");

interface First {
  name: string;
}

interface First {
  name: string;
}

const myUser: First = {
  name: "Laxman Krishnamurti",
};

interface Second {
  username: string;
}

// Interface re-opening
interface Second {
  //   username: number;
}

interface Third {
  age: number;
}

interface Fourth {
  age: string;
}

type userAge = Third & Fourth;
declare const UserAge: userAge;
// UserAge.age;

console.log("GENERIC OBJECT TYPES");

interface Box<Type> {
  name: Type;
}

interface Apple {
  maxAge: string;
}

type AppleBox = Box<Apple>;

const appleBox: AppleBox = {
  name: {
    maxAge: "4 days",
  },
};

type TypeOrNull<Type> = Type | null;
type TypeOrArray<Type> = Type | Type[];

type TypeMany<Type> = TypeOrNull<TypeOrArray<Type>>;

const data1: TypeMany<number> = [1, 2, 3, 4, 5];
const data2: TypeMany<string> = "Laxman Krishnamurti";
const data3: TypeMany<null> = null;

console.log("data1", data1);
console.log("data2", data2);
console.log("data3", data3);

interface GenericWithTwoType<T, U> {
  name: T;
  age: U;
}

const newUserAdded: GenericWithTwoType<string, number> = {
  name: "Laxman Krishnamurti",
  age: 22,
};
console.log("newUserAdded", newUserAdded);

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

const marks: ReadonlyArray<number> = [1, 2, 3, 4, 5];
const marks2: readonly number[] = [1, 2, 3, 4, 5];
// console.log("marks", marks)
// console.log("marks2", marks2)

// marks.push(6);
// marks2.push(6);

let a: readonly string[] = ["a", "b", "c"];
let b: string[] = [];
a = b;
// b = a

console.log("TUPLES");

interface StringNumberPair {
  length: 2;
  0: string;
  1: number;
}

const myTuple: StringNumberPair = {
  length: 2,
  0: "Laxman Krishnamurti",
  1: 22,
};

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

function getParameterList(...args: [number, string, ...boolean[]]) {
  const [totalConnections, type, ...isValid] = args;

  console.log("totalConnections", totalConnections);
  console.log("Type", type);
  console.log("isValid", isValid);
}

getParameterList(10000, "object", false, true, true, false);

let point = [3, 4] as const;

function distanceFromOrigin(...args: [number, number]) {
  return Math.sqrt(args[0] ** 2 + args[1] ** 2);
}

let distance = distanceFromOrigin(...point);
console.log("distance", distance);

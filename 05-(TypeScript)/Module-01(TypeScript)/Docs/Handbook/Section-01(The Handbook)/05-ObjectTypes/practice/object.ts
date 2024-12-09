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

console.log("PRIMARY EXPRESSIONS");

const person = {
  name: "Laxman Krishnamurti",
  age: 21,
  getUserAge: function () {
    return this.age;
  },
};
console.log(person.getUserAge());

// new keyword
console.log("CLASS");

class User {
  username;
  age;

  constructor(username, age) {
    this.username = username;
    this.age = age;
  }
}
const user1 = new User("Laxman Krishnamurti", 21);
console.log("user1", user1);

// new.target
console.log("new.target");

function sayHello() {
  return "Hello!";
}

const obj = new sayHello();
obj.name = "Laxman Krishnamurti";
console.log(obj);
console.log(obj.name);

console.log("USING NEW.TARGET WITH CONSTRUCTOR");

function constructorFunc() {
  if (!new.target) {
    throw new Error("You must call this function with the 'new' keyword");
  }

  console.log("Constructor is called with new");
}

const constructorObj = new constructorFunc();
console.log("constructorObj", constructorObj);

/**
 * Constructor is called with new
 * constructorObj constructorFunc {}
 */

// const constructorObj1 = constructorFunc() // Error: You must call this function with the 'new' keyword
// console.log("constructorObj1", constructorObj1)

class Car {
  brand;
  wheel;

  constructor(brand, wheel) {
    this.brand = brand;
    this.wheel = wheel;

    if (!new.target) {
      console.log(
        "You must call the class with new keyword to create an instance of it"
      );
    } else {
      console.log("Class has been used with the new keyword");
    }
  }
}

const myCar = new Car("Scorpio", 4);
console.log("myCar", myCar);

console.log("IMPORT.META");

console.log(import.meta.url);

async function loadModule() {
  const currentDir = new URL(".", import.meta.url);
  console.log("currentDir", currentDir);

  //dynamically import a module from the same directory
  const { default: fn } = await import(`${currentDir}/anotherFile.js`);
  console.log("default", fn);
  fn();
}

// loadModule()

console.log("SUPER");

class Parent {
  mode;
  constructor(mode) {
    this.mode = mode;
  }

  getName = function () {
    return "Parent";
  };
}

class Child extends Parent {
  process;
  constructor(num) {
    super("development");
    this.process = num;
  }

  getProcesses = function () {
    return this.process;
  };
}

const childObj = new Child(10);
console.log("childObj", childObj);

console.log("UNARY");

const user = {
  username: "laxmankrishnamurti",
  age: 22,
  getAge: function () {
    return this.age;
  },
};

console.log("Before deleting the age property from the object", user);
delete user.age;
delete user.getAge;
console.log("After deleting the age property from the object", user);

console.log("VOID");

void function voidFunction() {
  console.log("vodi function is executed");
};

try {
  voidFunction();
} catch (error) {
  console.log("void function is not defined");
}

console.log("BITWISE NOT OPERATOR");

const num = 2;
console.log("Bit Not : ", ~num);

const username = null;
if (!username) {
  console.log("falsy value");
} else {
  console.log("truthy value");
}

console.log("RELATIONAL OPERATOR");

const newUser = {
  username: "laxmankrishnamurti",
  email: "laxmankrishnamurti@gmail.com",
};

console.log(newUser instanceof Object);
console.log(newUser instanceof Array);
console.log(newUser instanceof String);
console.log("age" in newUser);

console.log("BITWISE SHIFT");

console.log(5 >> 1);
console.log(5 << 1);
console.log(5 >>> 1);

console.log("BINARY LOGICAL");

console.log(2 & 5);
console.log(2 | 5);
console.log(2 ^ 5);

console.log(null ?? "laxman");
console.log(undefined ?? "harshad");
console.log("sonu" ?? 42);
console.log("harshad" ?? undefined);

let num1 = 11;
num1 %= 10;
console.log("num", num1);

console.log("DESTRUCTURING ASSIGNMENT");

let a, b;
[a, b] = [10, 20];
console.log("a", a);
console.log("b", b);

// adding extra elements to a variable

let rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log("rest", rest);

const myProfile = {
  username: "laxmankrishnamurt",
  age: 21,
  email: "freelancing.laxman@gmail.com",
};

console.log("myProfile", myProfile);
const { age, email: userEmail } = myProfile;
console.log("age", age);
console.log("userEmail", userEmail);

console.log("SPREAD OPERATOR")

const marks = [90,98,95, 85, 75, 89]
const spreadMarksAndAddNewElement = [...marks, 100]
console.log("new arr", spreadMarksAndAddNewElement)

const myUsername = "laxmankrishnamurti";
const modifyUsername = ["new",...myUsername]
console.log("new usernmae", modifyUsername)

const myProfileDetails  = {
  username: "laxmankrishnamurti",
  age: 22,
  email: "laxmankrishnamurti@gmail.com"
}

const newProfileDetails = {...myProfileDetails, dob: "31/10/2002"}
console.log("new Profile Details", newProfileDetails)

console.log("COMMA OPERATOR")

let myAge = 22;
myAge = (myAge++, myAge-10)
console.log("myAge", myAge)

let productPrice = 200;
productPrice > 150 ? productPrice = (0,200 - (200*0.15)) : productPrice

console.log("productPrice", productPrice)
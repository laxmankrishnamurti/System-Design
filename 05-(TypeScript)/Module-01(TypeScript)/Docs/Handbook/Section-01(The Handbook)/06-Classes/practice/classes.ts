class Player {
  wicket = 2;
  six = 6;
}

class Parent1 {
  name: string;
  constructor() {
    this.initializeNameProperty();
  }
  initializeNameProperty() {
    this.name = "Hello World!";
  }
}

class Child1 extends Parent1 {
  initializeNameProperty(): void {
    console.log("Hello world! from derived class");
  }
}

const instance12 = new Parent1();
console.log("instance12 name", instance12.name);

const instance1 = new Child1();
console.log("instance1 name", instance1.name);

// Definite assignment assertion operator "!"

class Parent2 {
  name!: string;
  readonly pan: string;
  constructor(pan: string) {
    this.pan = pan;
  }
}

const instance2 = new Parent2("KYAS9816E");
console.log("instance2 name", instance2.name);
instance2.name = "Laxman Krishnamurti";
console.log("instance2 name after initialization", instance2.name);

// instance2.pan = "abcdxyz"; (readonly property)

console.log("CONSTRUCTOR");

class Parent3 {
  userid: string;
  name: string;
  age: number;
  email: string;

  // part-1 (Constructor overloads = define all possible combinations)
  constructor(userid: number, name: string, age: string, email: string);
  constructor(userid: string, name: string, age: number, email: string);

  // part-2 (Constructor implimentation = uses all possible combinations, should adhered overlods)
  constructor(
    userid: number | string,
    name: string,
    age: string | number,
    email: string
  ) {
    this.userid = typeof userid === "number" ? userid.toString() : userid;
    this.name = name;
    this.age = typeof age === "string" ? parseInt(age, 10) : age;
    this.email = email;
  }
}

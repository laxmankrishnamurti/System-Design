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

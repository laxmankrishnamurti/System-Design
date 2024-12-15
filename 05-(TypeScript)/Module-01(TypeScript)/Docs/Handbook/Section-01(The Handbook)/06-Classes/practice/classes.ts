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

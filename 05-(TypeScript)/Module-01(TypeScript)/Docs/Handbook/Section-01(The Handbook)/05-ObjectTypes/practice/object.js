function sayHello(person) {
    console.log("Hello ".concat(person.name));
}
function sayHello1(person) {
    console.log("Hello ".concat(person.name));
}
function sayHello2(person) {
    console.log("Hello ".concat(person.name));
}
console.log("OPTIONALE PROPERTY");
function fetchAccountDetails(_a) {
    var _b = _a.name, name = _b === void 0 ? "laxman" : _b, _c = _a.age, age = _c === void 0 ? 22 : _c, _d = _a.email, email = _d === void 0 ? "demo@gmail.com" : _d, _e = _a.mob, mob = _e === void 0 ? 8252 : _e;
    if (email === "demo@gmail.com") {
        return "Oops! This is a Demo account!";
    }
}
console.log("READONLY PROPERTY");
var Person3 = {
    name: "Laxman Krishnamurti",
    age: 22,
};
var Person4 = {
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
var person5 = {
    name: "Laxman Krishnamurti",
    age: 22,
};
var person6 = person5;
console.log("person6 name", person6.name); // person6 name Laxman Krishnamurti
console.log("person6 age", person6.age); //  person6 age 22
console.log("INDEX SIGNATURE");
var dictionary = {
    hello: "नमस्ते",
    bye: "अलविदा",
    welcome: "स्वागत है",
};
console.log(dictionary.hello); // नमस्ते
console.log(dictionary.bye); // अलविदा
var myArray = ["1", "2", "3"];
console.log("second item", myArray[1]); // second item 2
console.log("second item", myArray["1"]);
var user = {
    name: "Laxman Krishnamurti",
    age: "22",
    email: "laxmankrishnamurti@gmail.com",
};
var person = {
    name: "Laxman Krishnamurti",
    age: 22,
};
function createSqare(obj) {
    return {
        color: obj.color ? obj.color : "Oranged",
        area: obj.width ? obj.width * obj.width : 200,
    };
}
var square = { colour: "Salmon", width: 200 };
var myShape = createSqare(square);
console.log("myShape", myShape);
var newBook = {
    author: "Acharya Prashant",
    name: "KARMA",
    year: 2020,
};
console.log("newBook", newBook);
console.log("DIFFERENCE BETWEEN EXTEND AND INTERSECTION");
var myUser = {
    name: "Laxman Krishnamurti",
};
// UserAge.age;
console.log("GENERIC OBJECT TYPES");
var appleBox = {
    name: {
        maxAge: "4 days",
    },
};
var data1 = [1, 2, 3, 4, 5];
var data2 = "Laxman Krishnamurti";
var data3 = null;
console.log("data1", data1);
console.log("data2", data2);
console.log("data3", data3);
var newUserAdded = {
    name: "Laxman Krishnamurti",
    age: 22,
};
console.log("newUserAdded", newUserAdded);
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.getItem = function () {
        return this.items;
    };
    return Stack;
}());
var numberStack = new Stack();
console.log(numberStack.isEmpty());
console.log(numberStack.getItem());
numberStack.push(10);
console.log(numberStack.peek());
console.log(numberStack.getItem());
console.log(numberStack.isEmpty());
console.log(numberStack.pop());
console.log(numberStack.isEmpty());

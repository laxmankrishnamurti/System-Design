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
    age: 22
};
var Person4 = {
    name: {
        firstName: "Laxman",
        lastName: "Krishnamurti"
    },
    age: 22
};
// Person4.name = {}
// Warning: Cannot assign to 'name' because it is a read-only property.ts(2540)
Person4.name.firstName = "Harshad";
Person4.name.lastName = "Mehta";
console.log("Person4", Person4);
var person5 = {
    name: "Laxman Krishnamurti",
    age: 22
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
// myArray.push("4")

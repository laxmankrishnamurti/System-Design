function isEligibleForVoting(age) {
    if (typeof age === "number") {
        if (age >= 18) {
            console.log("Yes, Your are eligible for voting. You can vote. ");
        }
        else {
            console.log("Oops! since you are a teenager so you can't vote.");
        }
    }
    else {
        console.log("Voter age is", age);
    }
}
isEligibleForVoting("18");
function printAllUses(users) {
    if (typeof users === "object") {
        users === null || users === void 0 ? void 0 : users.forEach(function (user) {
            console.log("user", user);
        });
    }
    else if (typeof users === "string") {
        console.log("users", users);
    }
    else {
        return false;
    }
}
console.log(printAllUses(null));
console.log("TRUTHINESS NARROWING");
console.log(Boolean("laxman"));
// console.log(!!"")
// console.log(!!"laxman")
function printAllUsess(users) {
    if (!users) {
        return "Invalid input";
    }
    else if (typeof users === "object") {
        users.forEach(function (user) {
            console.log("user", user);
        });
    }
}
function getMultiply(obj, factor) {
    if (obj.value != undefined) {
        return obj.value * factor;
    }
    else {
        return "Invalid input";
    }
}
function takeInput(obj) {
    if ("a" in obj) {
        console.log(obj);
    }
    else {
        console.log(obj);
    }
}
function checkLog(str) {
    if (str instanceof Error) {
        console.log("error", str);
        throw new Error("Err: New Error");
    }
    else {
        console.log("new Error", str);
    }
}
var foo = Math.random() < 0.5 ? 10 : "Foo";
foo = 1;
console.log("foo", foo);
foo = "FUBAR";
console.log("foo", foo);
function controlFlowAnalysis() {
    var foo;
    foo = true;
    console.log("foo", foo);
    if (Math.random() > 0.5) {
        foo = 4;
        console.log("foo", foo);
        foo = "laxmankrishnamurti";
        console.log("foo", foo);
    }
    return foo;
}
function isAnimal(obj) {
    return obj.sound !== undefined;
}
function getCollection() {
    var obj1 = {
        name: "Manohar",
        sound: function () { return "foo"; }
    };
    var obj2 = {
        name: "Scorpio",
        drive: function () { return "high-speed"; }
    };
    if (Math.random() < 0.6) {
        return obj1;
    }
    else {
        return obj2;
    }
}
var collection = [getCollection(), getCollection(), getCollection(), getCollection(), getCollection(), getCollection()];
console.log("collection", collection);
var collectionOfAnimal = collection.filter(isAnimal);
// const collection2: Car[] = collection.filter(!isAnimal)
var collectionOfCar = collection.filter(function (ele) {
    return !isAnimal(ele);
});
console.log("collection of Animals", collectionOfAnimal);
console.log("collection of Cars", collectionOfCar);

function highOrderFunction(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    console.log("newArr", newArr);
    return newArr;
}
function callback(ele) {
    return +ele;
}
highOrderFunction(["1", "2", "3", "4", "5"], callback);
function fn(x, y) {
}
// 2nd part (Function implimentation signature)
function fn1(x) {
    return x.length;
}
fn1("");
fn1([0]);
var condition = true;
// fn1(condition ? "true": ["false"])
console.log("THIS IN A FUNCTION");
var miss = [
    { name: "Laxman Krishnamurti" },
    { name: "Pallavi jain" },
    { name: "Kawya Krishnamurti" },
    { name: "Fruti Kumari" },
    { name: "Vikram Dhanush" },
    { name: "Jitendra Yadav" },
];
var users = [
    {
        name: "Laxman Krishnamurti",
        admin: true
    },
    {
        name: "Kawya Krishnamurti",
        admin: false
    },
    {
        name: "Pallavi Jain",
        admin: false
    },
    {
        name: "Jitendra Yadav",
        admin: true
    },
    {
        name: "Anjali Kumari",
        admin: true
    },
];
var db = {
    filterUsers: function (filter) {
        return users.filter(function (user) { return filter.call(user); });
    }
};
var admins = db.filterUsers(function () {
    return this.admin;
});
console.log("Admins", admins);
var person = {
    name: "Laxman Krishnamurti",
    age: 22,
    email: "laxmankrishnamurti@gmail.com",
    getUsername: function (name) {
        if (name === "Laxman Krishnamurti") {
            return "laxmankrishnamurti";
        }
        else {
            return "Oops! user doesn't exist";
        }
    }
};
console.log("username", person.getUsername("Laxman Krishnamurti"));
console.log("username", person.getUsername("Harshad Mehta"));
var marks = [91, 95, 85, 75, 89];
marks.sort(function (a, b) {
    return a - b;
});
console.log("marks", marks);
function sayHello(name) {
    // let checkLength = name.length;
    console.log("Hello ".concat(name, " !!"));
}
sayHello("Laxman");
function multiply(first) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (n) { return n * 10; });
}
console.log("multiply", multiply(0, 1, 2, 3, 4, 5));
var args = [8, 5];
var angle = Math.atan2.apply(Math, args);
console.log("angle", angle);
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log("sum", a + b + c);
}
sum({
    a: 10,
    b: 20,
    c: 30
});

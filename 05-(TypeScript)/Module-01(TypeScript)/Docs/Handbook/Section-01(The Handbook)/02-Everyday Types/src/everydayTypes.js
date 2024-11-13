var marks = [85, 75, 91, 92, 89, 95];
console.log("marks", marks);
var points = [0.5, 0.2, 0.3, 0.8, 0.9, 1];
console.log("points", points);
function sayHello(name, date) {
    console.log("Hello ".concat(name, ", today is ").concat(date));
}
sayHello("Laxman Krishnamurti", new Date());
function getIpAddress() {
    return "192.168.16.254";
}
var userIpAddress = getIpAddress();
// Anonymous function
var mixArr = ["laxman", 22, true];
mixArr.forEach(function (value) {
    console.log("value is", value);
    // console.log(typeof value.toFixed(2))
});
var newMix = [22, 32];
newMix.forEach(function (value) {
    console.log("value is", value);
    console.log("typeof value is", typeof value);
    console.log("fixed value", value.toFixed(2));
});
function logUser(obj) {
    var _a;
    console.log("LOGUSER CALLED");
    console.log("you registered email id is", (_a = obj.email) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    // console.log("you registered email id is", obj.email.toUpperCase());
}
logUser({ name: "Laxman Krishnamurti" });
function showDetails(obj) {
    if (obj.email !== undefined) {
        console.log("your registered email id is", obj.email);
    }
}
console.log("UNION");
function printId(id) {
    console.log("userid is ", id);
}
printId("lakdsj");
printId(22);
function welcomeKit(x) {
    if (Array.isArray(x)) {
        console.log(x.join(" "));
    }
    else {
        console.log(x.toLocaleLowerCase());
    }
}
console.log("TYPE ALIASES");
function printUser(data) {
    for (var key in data) {
        console.log("".concat(key, " : ").concat(data[key]));
    }
}
printUser({
    name: "Laxman Krishnamurti",
    age: 22,
    isLoggedIn: true
});
console.log("INTERFACE AND TYPES");
function getBook(data) {
    return data;
}
var myBook = getBook({
    name: "KARMA: why everything you know about it is wrong",
    author: "Acharya Prashant",
});
console.log("Book name", myBook.name);
console.log("Book name", myBook.author);
function getAnimalInfo(data) {
    return data;
}
var myPet = getAnimalInfo({
    name: "Manohar",
    legs: 4
});
console.log("".concat(myPet.name, " has ").concat(myPet.legs, " legs"));
console.log("DIFFERENCE");
var newRequestObj = {
    origin: "India",
    ipAddress: "192.168.12.254"
};
console.log("newRequestObj", newRequestObj);
// type Req = {
//     origin: string
// }
// type Req = {
//     ipAddress: string
// }
console.log("TYPE ASSERTION");
// const age = "22" as number
var username = "Harshad";
username = "Harshad";
// username = "Laxman"
function literalTypes(name) {
    console.log("name", name);
}
//   literalTypes("Rohit")
console.log("LITERAL INFERENCE");
var count = {
    counter: 0
};
count.counter++;
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method as "GET");
var req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method)
console.log("NON-NULL");
function functionOne(id) {
    console.log(id.toFixed(3));
}
// functionOne(null)
console.log("ENUMERATION");
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Normal"] = 1] = "Normal";
})(UserRole || (UserRole = {}));
function checkRole(role) {
    if (role === UserRole.Admin) {
        console.log("Full access granted!");
    }
    else if (role === UserRole.Normal) {
        console.log("You don't have permission to override the content of the file because you are a normal user");
    }
    else {
        console.log("Unknown user role! Please enter a valid role");
    }
}
var user = UserRole.Admin;
checkRole(user);

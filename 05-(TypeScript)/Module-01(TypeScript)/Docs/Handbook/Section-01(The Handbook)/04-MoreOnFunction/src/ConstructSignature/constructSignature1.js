function constructorCaller(cons) {
    var constructorOutput = new cons();
    console.log("constructor output", constructorOutput);
}
var Class1 = /** @class */ (function () {
    function Class1() {
    }
    return Class1;
}());
constructorCaller(Class1);
function constructorCaller2(cons, username) {
    var user = new cons(username);
    if (user) {
        return user;
    }
    else
        return "".concat(username, " does not exist");
}
var Class2 = /** @class */ (function () {
    function Class2(username) {
        //make db call
        if (username === "laxmankrishnamurti") {
            this.accountId = "12345";
            this.userEmail = "laxmankrishnamurti@gmail.com";
            this.ipAddress = "192.168.250.16";
        }
    }
    return Class2;
}());
var user = constructorCaller2(Class2, "laxmankrishnamurti");
console.log("user", user);
var Class3 = /** @class */ (function () {
    function Class3() {
        return {
            message: "This is not an instance of the class"
        };
    }
    return Class3;
}());
var output = new Class3();
console.log("output", output);
console.log("instance of Class3", output instanceof Class3);
var Class4 = /** @class */ (function () {
    function Class4() {
        return 4;
    }
    return Class4;
}());
var result = new Class4();
console.log("result", result);
console.log("result is an instance of Class4", result instanceof Class4);
var Class5 = /** @class */ (function () {
    function Class5(username) {
        if (username === "laxmankrishnamurt") {
            this.accountId = "678910";
            this.userEmail = "freelancing.laxman@gmail.com";
            this.ipAddress = "192.168.250.25";
        }
        else {
            // Explicitly return a non-instance object
            // return {
            //     status: 404,
            //     message: `${username} does not exist!!`
            // }
        }
    }
    Class5.prototype.getAccountId = function () {
        if (!this.accountId) {
            throw new Error("Access denied: Invalid user");
        }
        return this.accountId;
    };
    return Class5;
}());
// const user2 = new Class5("laxmankrishnamurti")
// console.log("user2", user2)
// console.log("user2 accountId", user2.getAccountId())

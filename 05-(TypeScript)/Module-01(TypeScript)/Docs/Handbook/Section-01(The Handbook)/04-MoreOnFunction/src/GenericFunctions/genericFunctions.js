function fn(arr) {
    return arr[0];
}
var firstElement = fn([1, 2, 3, 4, 5]);
console.log("firstElement", firstElement);
function fn1(arr) {
    return arr[0];
}
var getFirstElement = fn1([1, 2, 3, 4, 5]);
console.log("Get first element", getFirstElement);
function map(arr, func) {
    return arr.map(func);
}
var parsed = map(["1", "2", "3", "4", "5"], function (n) { return parseInt(n); });
console.log("parsed", parsed);
var parsed2 = map([1, 2, 3, 4, 5], function (n) { return String(n); });
console.log("parsed2", parsed2);
function func(x, y) {
    if (x.length >= y.length) {
        console.log("x", x);
    }
    else {
        console.log("y", y);
    }
}
func("abc", "def");
func([1, 2, 3, 1], ["laxman"]);
func([1, 2, 3, 1], ["sdf"]);
function test(para) {
    if (para) {
        return true;
    }
    return false;
}
var testReturn = test([1, 2, 3, 4, 5]);
var testReturn1 = test("laxman");
var testReturn3 = test(10);
function minimumLength(obj, minimum) {
    if (obj.length >= minimum) {
        return obj;
    }
    else {
        // return {
        //   length: minimum,
        // };
    }
    return obj;
}
minimumLength({
    username: "laxmankrishnamurti",
    email: "laxmankrishnamurti@gmail.com",
    age: 22,
    length: 12,
}, 20);
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
var union = combine([1, 2, 3, 4, 5], ["laxman"]);
console.log("Union", union);

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

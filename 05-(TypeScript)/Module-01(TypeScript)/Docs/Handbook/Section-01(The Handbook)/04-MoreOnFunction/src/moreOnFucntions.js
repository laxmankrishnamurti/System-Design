function parent1(fn) {
    fn("More on Functions");
}
function child1(str) {
    console.log(str);
}
parent1(child1);
console.log("CALL SIGNATURE");
function parent2(fn) {
    var result = fn(1000);
    console.log("Callback function description :: ", fn.description);
    console.log("Test Result", fn.result);
    return result;
}
function child2(num) {
    var randomNumber = Math.floor(Math.random() * 1e2);
    return num > randomNumber;
}
child2.description = "Calling from child2 function";
child2.result = "All test cases passed!!";
var result = parent2(child2);
console.log("result", result);

function highOrderFunction(arr, callback) {
    var newArr = [];
    arr.forEach(callback);
    console.log("newArr", newArr);
}
function callback(ele) {
    return +ele;
}
highOrderFunction(["1", "2", "3", "4", "5"], callback);

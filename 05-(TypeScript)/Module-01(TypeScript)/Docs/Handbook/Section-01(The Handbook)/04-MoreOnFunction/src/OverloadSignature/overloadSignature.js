function highOrderFunction(callback, arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
var arr = highOrderFunction(function (ele) { return +ele; }, ["1", "2", "3"]);
console.log("arr", arr);
console.log(typeof arr[0]);
// function highOrderFunction<T>(arr: T[], callback: (ele: T) => number): number[] {
//     const newArr: number[] = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(callback(arr[i]))
//     }
//     console.log("newArr", newArr)
//     return newArr
// }
// function callback(ele: any): number{
//     return +ele
// }
// highOrderFunction(["1", "2", "3", "4", "5"], callback)

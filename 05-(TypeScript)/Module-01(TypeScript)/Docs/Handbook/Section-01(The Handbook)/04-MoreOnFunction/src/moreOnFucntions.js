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
console.log("CONSTRUCT SIGNATURE");
function fn(ctor) {
    // Passing an argument of type `number` to `ctor` matches it against
    // the first definition in the `CallOrConstruct` interface.
    console.log(ctor(10));
    // Similarly, passing an argument of type `string` to `ctor` matches it
    // against the second definition in the `CallOrConstruct` interface.
    console.log(new ctor("10"));
}
fn(Date);
function parent3(fn) {
    var user = new fn("laxmankrishnamurti");
    return user;
}
// const CallSignatureConstructorFunction: CallSignature = class {
//     constructor(username: string){
//         if(username === "laxmankrishnamurti"){
//             return {
//                 accountId: "12345",
//                 userEmail: "laxmankrishnamurti@gmail.com",
//                 ipAddress: "192.168.250.16",
//               };
//         }
//         return false
//     }
// }
// parent3(CallSignatureConstructorFunction)
// class CallSignatureClass implements CallSignature {
//     accountId: string | null = null;
//     userEmail: string | null = null;
//     ipAddress: string | null = null;
//     isValid: boolean = false;
//     constructor(username: string) {
//         if (username === "laxmankrishnamurti") {
//             this.accountId = "12345";
//             this.userEmail = "laxmankrishnamurti@gmail.com";
//             this.ipAddress = "192.168.250.16";
//             this.isValid = true;
//         }
//     }
// }
// parent3(CallSignatureClass)
console.log("OPTIONAL PARAMETERS");
function fixedPriceBy(x) {
    if (x === void 0) { x = 3; }
    var finalPrice = 524516.1242;
    console.log("finalPrice", finalPrice.toFixed(x));
}
fixedPriceBy();
fixedPriceBy(10);
fixedPriceBy(undefined);

type CallbackFunctionType = (a: string) => void;

function parent1(fn: CallbackFunctionType){
    fn("More on Functions")
}

function child1(str: string){
    console.log(str)
}

parent1(child1)

console.log("CALL SIGNATURE")

type CallbackFunctionTypeWithAdditionalProperties = {
    description: string;
    result: string
    (num: number): boolean;
}

function parent2(fn: CallbackFunctionTypeWithAdditionalProperties): boolean{
    const result = fn(1000)
    console.log("Callback function description :: ", fn.description)
    console.log("Test Result", fn.result)
    return result
}

function child2(num: number){
    const randomNumber = Math.floor(Math.random() * 1e2)
    return num > randomNumber
}

child2.description = "Calling from child2 function"
child2.result = "All test cases passed!!"

const result = parent2(child2)
console.log("result", result)

console.log("CONSTRUCT SIGNATURE")

interface CallOrConstruct {
    (n?: number): string;
    new (s: string): Date;
  }
   
function fn(ctor: CallOrConstruct) {
    // Passing an argument of type `number` to `ctor` matches it against
    // the first definition in the `CallOrConstruct` interface.
    console.log(ctor(10));
   
    // Similarly, passing an argument of type `string` to `ctor` matches it
    // against the second definition in the `CallOrConstruct` interface.
    console.log(new ctor("10"));
                     
}
   
fn(Date);

interface User {
    accountId: string;
    userEmail: string;
    ipAddress: string;
}

type CallSignature = {
    new (username: string): User | boolean;
}

function parent3(fn: CallSignature){
    const user = new fn("laxmankrishnamurti");
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

console.log("OPTIONAL PARAMETERS")

function fixedPriceBy(x = 3){
    const finalPrice = 524516.1242;
    console.log("finalPrice", finalPrice.toFixed(x))
}

fixedPriceBy()
fixedPriceBy(10)
fixedPriceBy(undefined)

function parentFunction(arr: number[], callback: (val: number, opt?:number) => number){
    const fixedArray: number[] = []
    for(let i = 0; i < arr.length; i++){
        fixedArray.push(callback(arr[i], i))
    }
    return fixedArray;
}

function childFunction(val: number, opt?: number): number{
    // const modifyOpt = opt > 2 ? 3 : 5;
    return +val.toFixed(opt)
}

const finalArray = parentFunction([10.215, 25.24521,63541.21523],childFunction)
console.log("finalArray", finalArray)

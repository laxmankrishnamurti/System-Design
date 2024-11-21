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


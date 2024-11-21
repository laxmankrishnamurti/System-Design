function test(num){
    let randomNumber = Math.floor(Math.random() * 1e2)
    console.log("function description :: ",test.description)
    test.sayHello()
    console.log(test.result)
    return num > randomNumber
}

test.description = "This is a test function"
test.sayHello = () => {
    console.log(`Hello from ${test.name} function`)
}
test.result = "All test cases passed!!"

let resultVal = test(100000)
console.log("result", resultVal)

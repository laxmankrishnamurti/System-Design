// function multiply(x, y) {
//     assert(typeof x === "number");
//     assert(typeof y === "number");
//     return x * y;
// }

// multiply(4, 4)

function yell(str) {
    // assert(32 === 32)

    if (typeof str !== "string") {
      throw new TypeError("str should have been a string.");
    }
    // Error caught!
    // return str.toUppercase();
    return str.toUpperCase()
}

// condition checking assertion function 

function conditionCheckingAssertion(condition: any, msg: string): asserts condition {
    if(!condition){
        // throw new AssertionError(msg);
    }
}

// The other type of assertion signature doesn’t check for a condition, but instead tells TypeScript that a specific variable or property has a different type.

function assertIsString(val: any): asserts val is string {
    if(typeof val !== "string"){
        // throw new AssertionError("Not a string!")
    }
}

// Here asserts val is string ensures that after any call to assertIsString, any variable passed in will be known to be a string.

function getUpperValue(str: any) {
    assertIsString(str)

    return str.toUpperCase()
}

// These assertion signatures are very similar to writing type predicate signatures. 

function isString(val: any): val is string {
    return typeof val === "string"
}

function foo1(str: any){
    if(isString(str)){
        return str.toUpperCase()
    }

    return "Oops! input is not a type of string"
}
type CallbackFunctionType = (a: string) => void;

function parent1(fn: CallbackFunctionType){
    fn("More on Functions")
}

function child1(str: string){
    console.log(str)
}

parent1(child1)
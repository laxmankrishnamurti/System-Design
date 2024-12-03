function highOrderFunction<T>(arr: T[], callback: (ele: T) => number) {
    const newArr = [];

    console.log("newArr", newArr)
}

function callback(ele: string): number{
    return +ele
}

highOrderFunction(["1", "2", "3", "4", "5"], callback)
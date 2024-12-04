function highOrderFunction<T>(arr: T[], callback: (ele: T) =>  number): number[] 


function highOrderFunction<T>(arr: T[], callback: (ele: T) => number): number[] {
    const newArr: number[] = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]))
    }

    console.log("newArr", newArr)
    return newArr
}

function callback(ele: any): number{
    return +ele
}

highOrderFunction(["1", "2", "3", "4", "5"], callback)

function fn(x: boolean, y: string): void;
function fn(x: string, y: boolean): void;
function fn(x: string | boolean, y: string | boolean){

}
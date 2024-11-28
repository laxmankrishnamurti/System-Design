function fn(arr: any[]) {
  return arr[0];
}
const firstElement = fn([1, 2, 3, 4, 5]);
console.log("firstElement", firstElement);

function fn1<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const getFirstElement = fn1([1, 2, 3, 4, 5]);
console.log("Get first element", getFirstElement);

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3", "4", "5"], (n) => parseInt(n));
console.log("parsed", parsed);

const parsed2 = map([1, 2, 3, 4, 5], (n) => String(n));
console.log("parsed2", parsed2);

function func<Type extends { length: number }>(x: Type, y: Type) {
  if (x.length >= y.length) {
    console.log("x", x);
  } else {
    console.log("y", y);
  }
}

func("abc", "def");
func([1, 2, 3, 1], ["laxman"]);
func([1, 2, 3, 1], ["sdf"]);

function test<Type>(para: Type) {
  if (para) {
    return true;
  }

  return false;
}

const testReturn = test([1, 2, 3, 4, 5]);
const testReturn1 = test("laxman");
const testReturn3 = test(10);

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // return {
    //   length: minimum,
    // };
  }

  return obj;
}

minimumLength(
  {
    username: "laxmankrishnamurti",
    email: "laxmankrishnamurti@gmail.com",
    age: 22,
    length: 12,
  },
  20
);

function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const union = combine<number | string>([1, 2, 3, 4, 5], ["laxman"]);
console.log("Union", union);

function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = makePair<number | undefined, string>(undefined, "hello");

console.log("GUIDELINE")

function firstFunction<T>(arg: T[]){
  return arg[0]
}

function secondFunction<T extends any[]>(arg: T){
  return arg[0]
}


const firstFunElement = firstFunction([1,2,3,4,5])
const seconFunElement = secondFunction([1,2,3,4,5])

function thirdFunction<T>(arr: T[], func: (arg: T) => boolean): T[]{
  return arr.filter(func) 
}

function fourthFunction<T, Func extends (arg: T) =>  boolean>(arr: T[], func: Func): T[]{
  return arr.filter(func)
}

function greet<T extends string>(name: T){
  console.log(`Hello ${name}!!`)
}

function greet1(name: string){
  console.log(`Hello ${name}!!`)
}

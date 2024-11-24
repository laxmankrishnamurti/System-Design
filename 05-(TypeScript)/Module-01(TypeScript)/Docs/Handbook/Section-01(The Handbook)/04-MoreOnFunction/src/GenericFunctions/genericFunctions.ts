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

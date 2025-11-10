// 模組與匯入／匯出
import type { Person } from "./module";

const p: Person = {
    name: "Alice",
    age: 25
};
p.height = 177;
console.log(p);


// 型別斷言（Type Assertions）
let value: any = "hello";
let valueUpper: string = (value as string).toUpperCase();
console.log(valueUpper);
// 注意，編譯不會報錯，但執行出錯
// let strFilter: string[] = (value as string[]).filter(item => item == "hi")
// console.log(strFilter);


// 泛型（Generics）
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<number>(100);
let output2 = identity<string>("hello");
// let output3 = identity<boolean>("hello");
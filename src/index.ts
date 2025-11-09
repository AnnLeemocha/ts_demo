import { Person } from "./math";

const p: Person = {
    name: "Alice",
    age: 25
};
p.height = 177;
console.log(p);


let value: any = "hello";
let valueUpper: string = (value as string).toUpperCase();
console.log(valueUpper);

// 注意，編譯不會報錯，但執行出錯
// let strFilter: string[] = (value as string[]).filter(item => item == "hi")
// console.log(strFilter);

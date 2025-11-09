"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p = {
    name: "Alice",
    age: 25
};
p.height = 177;
console.log(p);
var value = "hello";
var valueUpper = value.toUpperCase();
console.log(valueUpper);
// 注意，編譯不會報錯，但執行出錯
// let strFilter: string[] = (value as string[]).filter(item => item == "hi")
// console.log(strFilter);

// 函式宣告
{
    function greet(name) {
        return "Hello, " + name;
    }
    console.log(greet("Node"));
    var greetArrow = function (name) { return "Hello, " + name; };
    console.log(greetArrow("Arrow"));
    function sayHi(name) {
        console.log("Hello, " + name);
    }
    sayHi("Ann");
    console.log(sayHi("Ann"));
}
// 類別
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.greet = function () {
            return "Hello, my name is ".concat(this.name, ", I'm ").concat(this.age, " years old.");
        };
        return Person;
    }());
    var bob = new Person("Bob", 28);
    console.log(bob.greet());
}
// 陣列宣告
{
    // let arr = [1, 2, 3];
    var arr = [1, 2, 3];
    // let arr : Array<number> = [1, 2, 3];
    console.log(arr);
    var arr2 = [1, "hi", false, function () { }];
    console.log(arr2);
    // 聯合型別
    var arr3 = [1, "hi", 3];
    console.log(arr3);
}
// 物件宣告
{
    var p = { id: 1, name: "Duo" };
    // p.id = 2; ❌ 錯誤，唯讀
    console.log(p);
    var p2 = { id: 1, name: "Ann", age: 18 };
    console.log(p2);
}
{
    var p = { id: 1, name: "Duo" };
    // p.id = 2; ❌ 錯誤，唯讀
    console.log(p);
    var p2 = { id: 1, name: "Ann", age: 18 };
    console.log(p2);
}
// interface
// 專門用來描述物件或類別的型別，可以被 extends 或 implements
{
    var alice = { name: "Alice", age: 25 };
    alice.height = 170;
    var emp = { name: "John", age: 25, salary: 5000 };
}
// type
// 可以定義物件型別，也可以定義聯合型別、交集型別、原始型別別名等，更靈活
// 不可以被重複宣告
{
    // type PersonType = {
    //     height?: number;
    // }
    var alice = { name: "Alice", age: 25 };
    var emp = { name: "Jane", age: 25, salary: 6000 };
}

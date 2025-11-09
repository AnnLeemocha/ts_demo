// 函式宣告
{
    function greet(name: string): string {
        return "Hello, " + name;
    }

    console.log(greet("Node"));

    const greetArrow = (name: string): string => "Hello, " + name;

    console.log(greetArrow("Arrow"));

    function sayHi(name: string): void {
        console.log("Hello, " + name);
    }

    sayHi("Ann");
    console.log(sayHi("Ann"));
}

// 類別
{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet(): string {
            return `Hello, my name is ${this.name}, I'm ${this.age} years old.`;
        }
    }

    const bob = new Person("Bob", 28);
    console.log(bob.greet());
}

// 陣列宣告
{
    // let arr = [1, 2, 3];
    let arr: number[] = [1, 2, 3];
    // let arr : Array<number> = [1, 2, 3];
    console.log(arr);

    let arr2: any[] = [1, "hi", false, () => { }];
    console.log(arr2);

    // 聯合型別
    let arr3: (string | number)[] = [1, "hi", 3];
    console.log(arr3);
}

// 物件宣告
{
    interface Person {
        readonly id: number;  // 只讀屬性
        name: string;
        age?: number;         // 可選屬性
    }

    const p: Person = { id: 1, name: "Duo" };
    // p.id = 2; ❌ 錯誤，唯讀
    console.log(p);


    const p2: Person = { id: 1, name: "Ann", age: 18 };
    console.log(p2);
}
{
    type Person = {
        readonly id: number;  // 只讀屬性
        name: string;
        age?: number;         // 可選屬性
    }
    const p: Person = { id: 1, name: "Duo" };
    // p.id = 2; ❌ 錯誤，唯讀
    console.log(p);

    const p2: Person = { id: 1, name: "Ann", age: 18 };
    console.log(p2);
}

// interface
// 專門用來描述物件或類別的型別，可以被 extends 或 implements
{
    interface Person {
        name: string;
        age: number;
    }
    interface Person {
        height?: number;
    }

    const alice: Person = { name: "Alice", age: 25 };
    alice.height = 170;

    interface Employee extends Person {
        salary: number;
    }

    const emp: Employee = { name: "John", age: 25, salary: 5000 };
}

// type
// 可以定義物件型別，也可以定義聯合型別、交集型別、原始型別別名等，更靈活
// 不可以被重複宣告
{
    type PersonType = {
        name: string;
        age: number;
    };

    // type PersonType = {
    //     height?: number;
    // }

    const alice: PersonType = { name: "Alice", age: 25 };

    // 交集型別
    type EmployeeType = PersonType & { salary: number };

    const emp: EmployeeType = { name: "Jane", age: 25, salary: 6000 };

    // 聯合型別
    type ID = string | number;
}
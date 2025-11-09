# TypeScript 物件型別宣告示範

## 1. 基本物件型別

```ts
// 直接宣告物件型別
let person: { name: string; age: number };

person = { name: "Alice", age: 25 }; // ✅
```

---

## 2. 可選屬性與唯讀屬性

```ts
interface Person {
    readonly id: number;  // 只讀屬性
    name: string;
    age?: number;         // 可選屬性
}

const p: Person = { id: 1, name: "Bob" };
// p.id = 2; ❌ 錯誤，唯讀
```

---

## 3. 動態屬性（索引簽章）

```ts
interface Dictionary {
    [key: string]: string;  // key 是字串，value 也是字串
}

const dict: Dictionary = {};
dict["apple"] = "蘋果";
dict["banana"] = "香蕉";
```

---

## 4. 混合型物件（函式 + 屬性）

```ts
interface Counter {
    (start: number): string;  // 可以作為函式
    interval: number;          // 同時有屬性
    reset(): void;             // 同時有方法
}

function getCounter(): Counter {
    let c = (function(start: number) {}) as Counter;
    c.interval = 123;
    c.reset = function() {};
    return c;
}

const counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5;
```

---

## 5. 交集型別（Intersection Type）

```ts
interface Person { name: string }
interface Employee { salary: number }

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = { name: "Alice", salary: 5000 };
```

---

## 6. 泛型物件型別

```ts
interface Box<T> {
    value: T;
}

const box1: Box<number> = { value: 100 };
const box2: Box<string> = { value: "Hello" };
```

---

## 7. Mapped Type（映射型別）

```ts
type Person = { name: string; age: number };

// 將屬性變成可選
type PartialPerson = {
    [K in keyof Person]?: Person[K]
};

const p: PartialPerson = { name: "Bob" };
```

---

## 8. Conditional Type + 物件

```ts
type Message<T> = T extends string ? { text: string } : { code: number };

const msg1: Message<string> = { text: "Hello" };
const msg2: Message<number> = { code: 404 };
```

---

## 9. 索引類型查詢與 keyof

```ts
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"

const key: PersonKeys = "name"; // ✅
```

---

## 10. Readonly、Partial、Required、Record 等工具型別

```ts
type Person = { name: string; age: number };

type ReadonlyPerson = Readonly<Person>; // 所有屬性只讀
type PartialPerson = Partial<Person>;   // 所有屬性可選
type RequiredPerson = Required<PartialPerson>; // 轉回必填
type AgeRecord = Record<"age1" | "age2", number>; // key 是固定字串
```

---

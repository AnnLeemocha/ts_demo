# TypeScript 進階型別系統教學

## 課程目標

* 理解 TypeScript 高級型別系統的概念
* 掌握 Union、Intersection、Literal、Mapped、Conditional 等型別
* 提升程式型別安全性與可維護性

---

## 1. 聯合型別（Union Types）

Union 型別允許一個變數可以是多個型別之一。

```ts
let value: string | number;

value = "hello";  // 正確
value = 100;      // 正確
// value = true;  錯誤
```

適用場景：函式參數或變數可能接受多種型別。

---

## 2. 交集型別（Intersection Types）

Intersection 型別可以把多個型別合併成一個型別，包含所有屬性。

```ts
interface Person { name: string }
interface Employee { salary: number }

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = { name: "Alice", salary: 5000 };
```

適用場景：需要結合多個介面的屬性。

---

## 3. 字面量型別（Literal Types）

字面量型別可以指定變數只能取特定值。

```ts
type Direction = "up" | "down" | "left" | "right";

let move: Direction;
move = "up";   // 正確
move = "down"; // 正確
// move = "forward"; 錯誤
```

適用場景：需要固定選項的變數（像 enum）。

---

## 4. 可選屬性與唯讀屬性

```ts
interface Person {
    readonly id: number; // 只讀
    name: string;
    age?: number;        // 可選
}

const p: Person = { id: 1, name: "Alice" };
// p.id = 2; 錯誤
```

---

## 5. Mapped Types（映射型別）

Mapped Types 可以從已有型別生成新型別，非常靈活。

```ts
type Person = { name: string; age: number };

// 將屬性變成可選
type PartialPerson = {
    [K in keyof Person]?: Person[K]
};

const p: PartialPerson = { name: "Bob" }; // age 可以省略
```

常用工具型別：`Partial<T>`、`Required<T>`、`Readonly<T>`、`Record<K, T>`

```ts
type ReadonlyPerson = Readonly<Person>; // 將所有屬性設為只讀
type AgeRecord = Record<"age1" | "age2", number>; // key 是固定字串
```

---

## 6. Conditional Types（條件型別）

條件型別根據型別來決定另一個型別。

```ts
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "unknown";

type A = TypeName<string>;  // "string"
type B = TypeName<boolean>; // "boolean"
type C = TypeName<Date>;    // "unknown"
```

適用場景：泛型型別的條件判斷。

---

## 7. 泛型型別與約束（Generics with Constraints）

泛型可以與條件型別或 interface 約束結合，提高型別安全性。

```ts
interface Lengthwise { length: number }

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity([1, 2, 3]);  // 正確
loggingIdentity("Hello");    // 正確
// loggingIdentity(123);      錯誤
```

---

## 8. 型別推斷與型別守衛

型別守衛能夠在運行時縮小變數型別範圍。

```ts
function isNumber(x: any): x is number {
    return typeof x === "number";
}

function double(x: string | number) {
    if (isNumber(x)) {
        return x * 2; // x 被推斷為 number
    }
    return x + x;     // x 被推斷為 string
}
```

---

## 9. 高級型別工具

* `keyof`：取得物件鍵的聯合型別
* `typeof`：取得變數型別
* `infer`：條件型別內推斷型別
* `Exclude<T, U>`：從 T 中排除 U
* `Extract<T, U>`：從 T 中抽取 U

```ts
type Keys = keyof Person; // "name" | "age"
type T1 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

---

## 小結

掌握這些進階型別系統後，你將能：

* 定義複雜型別，提升程式安全性
* 使用泛型與條件型別寫更通用的函式與類別
* 建立可維護且可擴充的型別架構

下一步可以將這些概念應用到 React、Node.js 或專案型專案中，寫出型別安全的實戰程式碼。

---
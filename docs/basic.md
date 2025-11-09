# TypeScript：基本結構教學

## 課程目標

* 理解 TypeScript 程式的「基本結構」有哪些部分。
* 看懂每個部分的用途與簡單範例。
* 為後續進階學習（如型別、泛型、模組化）打下基礎。

---

## 程式的常見組成部分

一個完整的 TypeScript 程式通常包含以下部分：

* 聲明部分（宣告型別、介面）
* 變數宣告（`let`、`const`、`var`）
* 函式宣告（傳統函式或箭頭函式）
* 類別宣告（Class）
* 介面與型別別名（Interfaces & Type Aliases）
* 模組化（`import` / `export`）
* 型別斷言（Type Assertions）
* 泛型（Generics）
* 註解（Comments）
* 型別推斷（Type Inference）
* 型別守衛（Type Guards）
* 非同步程式（Async／Await）
* 錯誤處理（Try／Catch）
  這些部分共同構成了 TypeScript 程式的基本結構，讓我們的代碼具有更好的型別檢查、結構清晰與可維護性。

---

## 1. 聲明部分（Declarations）

TypeScript 是靜態型別語言，可以透過聲明來明確變數、函式、類別等的型別。
例如：

```ts
let name: string = "Alice";
let age: number = 30;

interface Person {
    name: string;
    age: number;
}
```

這裡 `name` 被聲明為 `string` 型別，`age` 為 `number` 型別，而介面 `Person` 定義了一個物件的結構。

---

## 2. 變數宣告（Variable Declarations）

在 TypeScript 中，我們可以使用 `let`、`const` 與 `var` 來宣告變數。不過推薦主要使用 `let` 和 `const`，而 `var` 較少使用。
範例：

```ts
let age: number = 25;
const pi: number = 3.14;
```

---

## 3. 函式宣告（Function Declarations）

你可以像 JavaScript 一樣宣告函式，同時也可以為參數與返回值指定型別。箭頭函式也支援。
範例：

```ts
function greet(name: string): string {
    return "Hello, " + name;
}

const greetArrow = (name: string): string => "Hello, " + name;
```

---

## 4. 類別宣告（Class Declarations）

TypeScript 支援面向物件編程（OOP），可宣告類別、其屬性與方法。
範例：

```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

const bob = new Person("Bob", 28);
console.log(bob.greet());
```

---

## 5. 介面與型別別名（Interfaces & Type Aliases）

### 介面（Interface）

用於描述物件結構、可被擴展、也可用來實作類別。

```ts
interface Animal {
    name: string;
    sound: string;
    makeSound(): void;
}
```

### 型別別名（Type Alias）

允許為物件型別、聯合型別、交叉型別等設定別名。

```ts
type ID = string | number;
```

---

## 6. 模組與匯入／匯出（Modules & Imports/Exports）

TypeScript 支持模組化程式碼，讓你把類別、函式或型別拆分成多個檔案，再透過 `export` 和 `import` 來組織。
範例：

```ts
// person.ts
export class Person {
    constructor(public name: string) {}
}

// main.ts
import { Person } from "./person";
const p = new Person("Alice");
console.log(p.name);
```

---

## 7. 型別斷言（Type Assertions）

當你知道一個變數實際上是某個型別，但編譯器不知道時，可以用型別斷言來告訴編譯器。
範例：

```ts
let value: any = "hello";
let strLength: number = (value as string).length;
```

---

## 8. 泛型（Generics）

泛型使程式碼能夠在定義時不指定具體型別，使用時再傳入，從而增加復用性與型別安全。
範例：

```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<number>(100);
let output2 = identity<string>("hello");
```

---

## 9. 註解（Comments）

註解可提高程式的可讀性與維護性。

```ts
// 這是一個單行註解

/*
  這是一個
  多行註解
*/
```

---

## 10. 型別推斷（Type Inference）

當你宣告變數時直接賦值，TypeScript 可以自動推斷其型別。
範例：

```ts
let num = 10;  // Compiler 推斷 num 為 number
```

---

## 11. 型別守衛（Type Guards）

在執行時，如果你需要檢查一個變數型別並縮小其型別範圍，可使用 `typeof`、`instanceof` 或自訂型別守衛。
範例：

```ts
function isString(value: any): value is string {
    return typeof value === "string";
}

function printValue(value: string | number) {
    if (isString(value)) {
        console.log("String value:", value);
    } else {
        console.log("Number value:", value);
    }
}
```

---

## 12. 非同步程式（Asynchronous Programming）

TypeScript 完全支援 `async/await` 語法，使寫非同步程式碼更容易理解。
範例：

```ts
async function fetchData(): Promise<string> {
    const response = await fetch("https://example.com");
    const data = await response.text();
    return data;
}

fetchData().then(result => console.log(result));
```

---

## 13. 錯誤處理（Error Handling）

你可使用 `try/catch` 來捕獲運行時錯誤，並可在 catch 區塊中為錯誤物件指定型別。
範例：

```ts
try {
    throw new Error("Something went wrong");
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
```

---

## 小結

這份教學介紹了 TypeScript 程式的 **基本結構**，包含聲明、變數、函式、類別、型別系統、模組、非同步等等。掌握這些基礎後，你便能更有信心進入 TypeScript 的 **型別系統深潛**（如 union、intersection、映射型別）與 **實戰應用**（例如在 React 或 Node 專案中使用）。


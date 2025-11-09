# TypeScript 進階型別練習題

## 課程目標
- 練習 Union、Intersection、Literal、Mapped、Conditional、泛型、型別守衛  

---

## 題目 1：聯合型別判斷
完成函式 `formatValue`，依型別返回不同字串：
```ts
function formatValue(value: string | number): string {
    // TODO
}
```

---

## 題目 2：交集型別

有兩個介面：

```ts
interface Person { name: string }
interface Employee { salary: number }
```

定義變數 `emp`，型別為 `Person & Employee`。

---

## 題目 3：字面量型別

定義型別 `Direction`，只允許 `"up" | "down" | "left" | "right"`，寫函式 `move` 返回 `"Moving {direction}"`。

---

## 題目 4：Mapped Type

有型別：

```ts
type Person = { name: string; age: number; address: string }
```

定義 `OptionalPerson`，將所有屬性變成可選。

---

## 題目 5：Conditional Type

定義條件型別 `TypeName<T>`：

* T 為 string → "string"
* T 為 number → "number"
* T 為 boolean → "boolean"
* 否則 → "unknown"

---

## 題目 6：泛型約束

寫函式 `loggingIdentity`，參數必須有 `length` 屬性，並在函式內印出 `length`，最後返回參數。

---

## 題目 7：型別守衛

完成函式 `double`，參數型別為 `string | number`：

* number → 乘以 2
* string → 字串接自己


---

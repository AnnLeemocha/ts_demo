# TypeScript 進階型別範例答案

## 答案 1：聯合型別判斷
```ts
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return `String: ${value}`;
    } else {
        return `Number: ${value}`;
    }
}
```

## 答案 2：交集型別

```ts
type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
    name: "Alice",
    salary: 5000
};
```

## 答案 3：字面量型別

```ts
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): string {
    return `Moving ${direction}`;
}
```

## 答案 4：Mapped Type

```ts
type OptionalPerson = {
    [K in keyof Person]?: Person[K]
};

const p: OptionalPerson = { name: "Bob" };
```

## 答案 5：Conditional Type

```ts
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "unknown";

type A = TypeName<string>;  // "string"
type B = TypeName<number>;  // "number"
type C = TypeName<Date>;    // "unknown"
```

## 答案 6：泛型約束

```ts
interface Lengthwise { length: number }

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity([1, 2, 3]);
loggingIdentity("Hello");
```

## 答案 7：型別守衛

```ts
function isNumber(x: any): x is number {
    return typeof x === "number";
}

function double(x: string | number) {
    if (isNumber(x)) {
        return x * 2;
    } else {
        return x + x;
    }
}
```


---

# TypeScript 基本型別範例答案

## 答案 1：型別註記
```ts
let username: string = "Alice";
````

## 答案 2：陣列型別

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
```

## 答案 3：Tuple

```ts
let person: [string, number] = ["Bob", 25];
```

## 答案 4：Enum

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

## 答案 5：Any

```ts
let data: any = 100;
data = "Hello";
```

## 答案 6：Void

```ts
function logMessage(msg: string): void {
    console.log(msg);
}
```


---

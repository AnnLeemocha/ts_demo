
// 基本型別宣告
{
    // let word: string = 2;  // ❌ 錯誤
    let word: string = "hello";
    // word = 4;   // ❌ 錯誤
    word = "world";

    console.log(word);

    let word2 = "hello";
    // word2 = 4;   // ❌ 錯誤
    word2 = "world";

    console.log(word2);

    // boolean, number, null, undefined, ...

    // boolean
    let v1: boolean;
    // v1 = 2;  // ❌ 錯誤
    v1 = true;

    // number
    let v2: number;
    // v2 = "str";  // ❌ 錯誤
    v2 = 100;

    // null
    let v3: null;
    // v3 = 2;  // ❌ 錯誤
    // v3 = undefined;  // ❌ 錯誤
    v3 = null;

    // undefined
    let v4: undefined;
    // v4 = 2;  // ❌ 錯誤
    // v4 = null;  // ❌ 錯誤
    v4 = undefined;

    // any
    let value: any = 1;
    value = "hi";
    value = false;
    value = () => {
        console.log("I'm any type.");
    }
    value();

    // 聯合型別
    let value2: string | number;
    value2 = 100;
    value2 = "hello world";

    // 字面量聯合型別
    type Direction = "up" | "down" | "left" | "right";
    let move: Direction;
    move = "up";   // 正確
    move = "down"; // 正確
    // move = "forward";  // ❌ 錯誤

}

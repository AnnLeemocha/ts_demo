
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

    // boolean, number, null, undefine, ...

    // any
    let value: any = 1;
    value = "hi";
    value = false;
    value = () => {
        console.log("I'm any type.");
    }
    value();
}

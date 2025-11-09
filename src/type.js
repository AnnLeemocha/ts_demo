// 基本型別宣告
{
    // let word: string = 2;  // ❌ 錯誤
    var word = "hello";
    // word = 4;   // ❌ 錯誤
    word = "world";
    console.log(word);
    var word2 = "hello";
    // word2 = 4;   // ❌ 錯誤
    word2 = "world";
    console.log(word2);
    // boolean, number, null, undefine, ...
    // any
    var value = 1;
    value = "hi";
    value = false;
    value = function () {
        console.log("I'm any type.");
    };
    value();
}

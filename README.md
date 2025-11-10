
* why use ts

* install ts (-g)
  * npm install typescript -D 
    * npx tsc src/index.ts. -> index.js
  * npm install typescript -g
    * tsc src/index.ts. -> index.js
  * npx tsc --init (tsconfig.json)
    * rootDir (src)
    * outDir (dist)
    * sourceMap

* 靜態型別檢查 (type.ts)
  * let var : type = value; (same type)
  * var =  value2;

* 類型推斷 (type.ts)
  * let var = value;
  * var =  value2; (same value type)

* 基本與物件類型 (type.ts, object.ts)
  * 聯合型別 |
  * 字面量聯合型別

* 介面和類型定義 (object.ts)
  * interface
    * optional
    * 交集型別 &
  * type
  
* 模組支援 (module.ts, index.ts)
    * import, export
* 斷言 (index.ts)
  * any -> type
* 泛型 (index.ts)
  * type -> fn -> type
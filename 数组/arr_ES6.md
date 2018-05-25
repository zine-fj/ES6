##### ES6里新增的数组

``` shell
let arrStr = ['apple','banana','orange','tomato'];
let arrJson = [
        {title:'aaaaa',read:100,hot:true},
        {title:'bbbbb',read:100,hot:false},
        {title:'ccccc',read:100,hot:true}
    ];
let arrNum = [1,3,5,7,9];
```

1. for...of...
``` shell
    arr.keys()  // 数组下标。
    arr.entries()  // 数组某一项。

    // 循环值。
    for(let val of arrStr) {
        console.log(val);
    };
     // 循环索引。
    for(let index of arrStr.keys()) {
        console.log(index);
    };
    // 循环索引 + 值。
    for(let item of arrStr.entries()) {
        console.log(item);
    };
    for(let [key,val] of arrStr.entries()) {
        console.log(key,val);
    };
```
2. Array.from:
// 作用：把类数组对象转成数组。
// 类数组：具备length就靠谱，获取的一组元素、arguments...（像aLi = $('ul li');）。
3. Array.of()
``` shell
    // 作用：把一组值转为数组。
    let arrOf = Array.of('apple','banana','orange');
    console.log(arrOf);
```
4. arr.find()
``` shell
    // 查找，找出第一个符合条件的数组成员，如果没找到，返回undefined。
    let arrFind = arrNum.find((val,index,arr)=>{
        return val > 3; 
    });
```
5. arr.findIndex()
``` shell
    // 查找，找出第一个符合条件的数组成员的位置，如果没找到，返回-1。
    let findIndex = arrNum.findIndex((val,index,arr)=>{
        return val > 3; 
    });
```
6. arr.fill()
``` shell
    // arr.fill(填充的东西,开始位置,结束位置)。
    let arrFill = new Array(10); // 默认传入10项空值。
    arrFill.fill('默认值',1,3); // (从1开始到3结束，不包括3)
```
7. arr.includes()  
``` shell
    // 判断数组里是否有该值，有的话返回true。
    let arrIncludes = arrStr.includes('orange');
```
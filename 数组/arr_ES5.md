#### ES5里新增的数组

1 - 5接收的参数一样，均为(val,index,arr)；一般情况下用1 - 2最多。  
val：当前的val值；index：当前的index值；arr：循环的数组（一般不用）。  
``` shell
let arrStr = ['apple','banana','orange','tomato'];
let arrJson = [
        {title:'aaaaa',read:100,hot:true},
        {title:'bbbbb',read:100,hot:false},
        {title:'ccccc',read:100,hot:true}
    ];
let arrNum = [1,3,5,7,9];
```

1. arr.forEach();
``` shell
    // 代替普通的for循环
    arrStr.forEach((val,index,arr)=>{
        console.log(val,index,arr);
    })
```
2. arr.map();
``` shell
    // 非常有用，做数据交互 '映射'; 需要配合 return，返回一个新的数组；若是没有return，则相当于forEach。
    // 平时只要用map，一般用return，否则还是用forEach。
    // 重新整理数据结构。
    let newArr = arrJson.map((val,index,arr)=>{
        let json = {};
        json.t = `^_^${val.title}---`;
        json.r = val.read + 200;
        json.hot = val.hot == true && '真棒！！';
        return json;
    })
    console.log(newArr);
```
3. arr.filter();
``` shell
    // 过滤，过滤一些不合格'元素',如果回调函数返回true，就留下来。
    let newArr1 = arrJson.filter((item,index,arr)=>{
        return item.hot;
    });
```
4. arr.some();
``` shell 
    // 类似查找，数组里面某一个元素符合条件，返回true。
    let newArr2 = arrStr.some((val,index,arr)=>{
        return val = 'apple';
    });
```
5. arr.every();
``` shell
    // 类似查找，数组里面所有元素符合条件，返回true。
    let newArr3 = arrNum.every((val,index,arr)=>{
        return val % 2 == 1; //判断奇数，都为奇数则返回true。
    });
```
6. arr.reduce() / arr.reduceRight();
``` shell
    // 前者从左到右，后者从右到左；可用来求数组和、阶乘。
    // prev：前一个值；cur：当前值；index：索引；arr：当前数组。
    let newArr4 = arrNum.reduce((prev,cur,index,arr)=>{
        return prev + cur; // 求和
        return Math.pow(prev,cur); //阶乘
        return prev ** cur; //阶乘
    })
```


## 数组本身固有的一些用法

``` shell
let arrStr = ['apple','banana','orange','tomato'];
let arrNum = [1,3,5,7,9];
```

1. join()
``` shell
    // 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符;
    // 该方法只接收一个参数：即分隔符
    let arrJoin = arrNum.join();
    let arrJoin1 = arrNum.join('-');
```
2. push() 和 pop()
``` shell
    // push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 
    // pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
    let arrPush = arrStr.push('litchi','good');
    let arrPop = arrStr.pop();
```
3. shift() 和 unshift()
``` shell
    // shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 
    // unshift()：将参数添加到原数组开头，并返回数组的长度 。
    let arrUnshift = arrStr.unshift('no-bad','bad');
    let arrShift = arrStr.shift();
```
4. sort()
``` shell
    // 按升序排列数组项——即最小的值位于最前面，最大的值排在最后面(数字、字母均可)。
    let arrSort = arrNum.sort();
```
5. reverse()
``` shell
    // 反转数组项的顺序。
    let arrReverse = arrNum.reverse();
```
6. concat()
``` shell
    // 将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
    // 描述看不懂没问题，看例子！！！
    let arrConcat = arrNum.concat(9,[11,13]);
    let arrConcat1 = arrNum.concat([9,[11,13]]);
```
7. slice()
``` shell
    // 返回从原数组中指定 开始下标(包含)到 结束下标(不包含!)之间的项组成的新数组。
    let arrSlice = arrNum.slice(1); // 从 1 到 结束。
    let arrSlice2 = arrNum.slice(1,4); // 从 1 到 4。
    let arrSlice3 = arrNum.slice(1,-2); // 从 1 到 arrNum.length + (-2)。
    let arrSlice4 = arrNum.slice(-4,-1); // 从 arrNum.length + (-4) 到 arrNum.length + (-4)
```
8. splice()
``` shell
    // 删除功能：.splice(0,2)。从 0 到 2 结束(不包括2)。
    // 插入功能：.splice(2,0,4,6)。从 1 到 2 中间开始 插入4,6；第二位必须是0,否则变为替换功能。
    // 替换功能：.splice(1,1,2,4)。从 1 开始 将 第一位转换为2,4；若第二位为2，则从 1 到 2,将这两位替换为2,4
    let arrSpliceIns = arrNum.splice(2,0,4,6);
    let arrSpliceDel = arrNum.splice(0,2);
    let arrSpliceRep = arrNum.splice(1,1,2,4);
```
9. indexOf() 和 lastIndexOf()
``` shell
    // 可接收两个参数(要查找的项,开始查找的起点索引)，一般第二个参数不需用。
    // indexOf：输入查找的数字，从左到右查找，有则返回该数字索引，没有则返回-1。
    // lastIndexOf：输入查找的数字，从右到左查找。
    let arrIndexOf = arrNum.indexOf(5);
    let arrLastIndexOf = arrNum.lastIndexOf(5);
```

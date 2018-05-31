## symbol
数据类型(之前):
``` shell
    number、string、boolean、Object、undefined、function

    new Number(12);
    new String()
    new Array()
```
现在新增 symbol (使用情况一般)
``` shell
    let syml = Symbol('aaa');
```
注意：  
1. Symbol不能new。
2. Symbol() 返回是一个唯一值(一般做一个key,定义一些唯一或者私有的东西)。
3. symbol是一个单独数据类型，就叫symbol，基本数据类型。
4. 如果symbol作为key，用for in循环，出不来。


## generator 函数 生成器
主要作用：解决异步问题，深度嵌套的问题。async    
``` shell
    function * show() {
        yield
    }

    # 具体例子
    function * gen() {
        yield 'welcome';
        yield 'to';
        return '我是谁';
    }

    # 调用 一
    let g1 = gen();
    console.log(g1.next());

    # 调用 二 (for...of)
    for...of : 自动遍历generator，return的东西，它不会遍历。
    let g2 = gen();
    for(let val of g2) {
        console.log(val)
    }

    # 调用 三 (解构赋值)
    let g3 = gen();
    let [a,b] = gen();

    # 调用 四 (扩展运算符)
    let g4 = gen();
    console.log(...gen());

    # 调用 五 (Array.from())
    let g5 = gen();
    console.log(Array.from(g5));
```

## 异步、同步
异步：不连续，上一个操作没有执行完，下一个操作照样开始。    
同步：连续执行，上一个操作没有执行完，下一个没法开始。  
关于异步，解决方案：  
1. 回调函数
2. 事件监听
3. 发布/订阅
4. promise对象


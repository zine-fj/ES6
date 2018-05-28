## let const
之前定义(声明)变量: 
``` shell
    // 作用域：全局、函数作用域。
    var a = 1;
    for(var i = 1; i < 10; i++) {
        // todo
    }

    // 立即执行函数(IIFE)，模拟块级作用域。
    (function() {
        // todo
    })()
```
现在定义变量:
``` shell
    let // 相当于之前的var。
    const // 常量，定义好了不能改变。

    // 作用域：块级作用域( {} )，块级作用域写法
    {}
```

#### let注意地方:  
1. 没有预解析，不存在变量提升。在代码块内，只要let定义变量，在使用之前都报错，必须先定义再使用。
``` shell
    let a = 12;
    function fn() {
        console.log(a); // TDZ 暂时性死区
        let a = 5;
    };
    fn();
```
2. 在同一个作用域里面不能重复定义变量，但是可以给变量赋值。
``` shell
    let b = 1;
    let b = 2;

    let b1 = 1;
    b1 = 2;
```
3. for循环，for循环里面是父级作用域，里面又一个作用域。
``` shell
    for(let i =0; i < 2; i++) {
        let i = 'abc';
        console.log(i);
    }

    let arr1 = [];
    for(let i = 0; i < 10; i++) {
        arr1[i] = function() {
            console.log(i); // 5
        }
    }
    arr1[5]();
```
#### const注意地方:  
1. 用法和let一样，但定义好了不能改变(变量赋值)。
``` shell
    const c = 1;
    c = 2;

    // 定义完变量必须赋值，不能后赋值，不能修改。
    const d;
    d = 3;

    // 单纯定义也会报错
    const e;
```
2. 不在一个作用域里面就随便了。
``` shell
    const f = 1;
    function fnc() {
        const f = 2;
        console.log(f);
    };
    fnc();
```
3. 但在对象里面可以添加改变，因为对象属于引用关系。
``` shell
    const arrc = ['apple','banana','orange'];
    arrc.push('tomato')
```
4. 但如果用Object.freeze(对象)，就真的不能修改了。
``` shell
    const arrd = Object.freeze(['apple','banana','orange']);
    arrd.push('tomato')
```
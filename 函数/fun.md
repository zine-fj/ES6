## 函数变化
1. 函数默认参数
``` shell
    function show1(a = '欢迎',b = 'mmr') {
        console.log(a,b);
    }
    show1('welcome',);
    
    function show({x = 0,y = 1} = {}) {
        console.log(x,y)
    }
    show();
```
2. 函数的参数默认已经定义了，不能再使用let，const声明了
``` shell
    function show(a = 13) {
        let a = 5; // 报错
        console.log(a);
    }
    show();
```
3. 箭头函数
``` shell
    let show = () => 1;

    let fun = (a,b) => {
        return a+b;
    }
    console.log(fun(1,2)))

    # 1、this问题，定义函数所在对象，不再是运行时所在的对象
    let json = {
        id:1,
        oJson: function() {
            setTimeout(() => {
                alert(this.id); // 1
            },1000)
        }
    }
    json.oJson()

    // 2、箭头函数里面没有arguments，用'...'
    let oArg = (...args)=>{
        console.log(args);
    }
    oArg(1,2,3,4,5);

    // 3、箭头函数不能用构造函数
    let arg = ()=>{
        this.name = 'abc';
    }
    let s = new arg();
    console.log(s.name) // 报错
```
1. ES2017，函数参数最后逗号可以有了
``` shell
    let arg3 = (a,b,c,)=>{
        console.log(a,b,c)
    };
    arg3(1,2,3)
```
## 扩展运算符、reset(剩余)运算符
写法：...
1. 展开
``` shell
    let arr = ['apple','banana','orange'];
    console.log(...arr);

    function show(a,b,c) {
        console.log(a,b,c)
    }
    show(...[1,9,8])
```
2. reset(剩余)，收起，变为数组
``` shell
    function show(...a) {
        console.log(a)
    }
    show(1,2,3,4,5)

    // 变为数组 并排序
    function show(...a) {
        return a.sort();
    }
    console.log(show(1,6,3,5,2));

    // 剩余运算符，必须放到最后
     function show(a,b,...c) {
        console.log(a,b);
        console.log(c);
        console.log(...c);
    }
    show(1,2,3,4,5)
```










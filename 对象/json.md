## 对象
1. 对象简洁语法(相当有用)。
``` shell
    let name = 'fj';
    let age = 25;

    #  之前写法:
    let json = {
        name : name,
        age : age,
        showA:function() {
            return this.name;
        }
    }

    #  现在写法(里面不要用箭头函数!):
    let json = {
        name,
        age,
        showA() {
            return this.name;
        }
    }
```
2. Object.is(): 用来比较两个值是否相等(肉眼看到相等即相等)。
写法：Object.is('a','a');
``` shell
    #  将NaN处理了
    let b = Object.is(NaN,NaN);
    console.log(b); // true

    console.log(Object.is(+0,-0)); // false
```
3. Object.assign(): 用来合并对象。
写法：Object.assign(目标对象,source1,source2...); 
``` shell
    #  合并参数
    let json01 = {a:1};
    let json02 = {b:2};
    let json03 = {c:3};
    let obj = Object.assign({},json01,json02,json03);

    #  复制一个对象(改变新对象，对老对象没有影响)
    let arr = ['apple','banana','orange'];
    let arr2 = Object.assign([],arr);
```
4. ES2017引入以下内容。
1、Object.keys();2、Object.entries();3、Object.values();
``` shell
    # 基本用法
    let json04 = {
        a:1,
        b:2,
        c:3
    };

    for(let key of Object.keys(json04)) {
        console.log(key)
    }

    # 简洁用法
    # 先将其解构
    let {keys,values,entries} = Object;

    for(let key of keys(json04)) {
        console.log(key)
    }

    for(let value of values(json04)) {
        console.log(value)
    }

    for(let item of entries(json04)) {
        console.log(item)
    }

    for(let [key,val] of entries(json04)) {
        console.log(key,val)
    }
```
1. (...)在对象身上也可以用了，计划在ES2018引入。
``` shell
    let {i,j,...k} = {i:1,j:2,k1:3,k2:4};

    let json = {a:1,b:2};
    let json2 = {...json};
```


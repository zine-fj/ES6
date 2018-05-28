## 解构赋值
### 非常有用，特别是在做数据交互 ajax
解构赋值(注意：左右两边，结构格式要保持一致)。
1. 普通数组解构。
``` shell
    let [a,b,c] = [1,2,3];

    let [a,[b,c]] = [1,[2,3]];
```
2. json解构。
``` shell
    let json = {
        name: 'fj',
        age: 25,
        job: '码农'
    };
    let {name,age,job} = json;

    // 可自定义名字
    let {name:n,age:a,job:j} = json;
```
3. 数据不对应时可给默认值。
``` shell
    let [a,b,c='暂无...'] = ['aa','bb'];

    // 传入undefined时也可以用
    let [a,b,c='暂无...'] = ['aa','bb',undefined];

    // 传入null时则不可以，返回的还是null
    let [a,b,c='暂无...'] = ['aa','bb',null];
```
4. 交互两数位置
``` shell
    let x = 1;
    let y = 2;
    [x,y] = [y,x];
```
5. 封装函数
``` shell
    function getPos() {
        return {
            left: 10,
            top: 20
        }
    }
    // 因为top默认为window，所以应换个名字
    let {left,top:t} = getPos();
```
1. 函数参数
``` shell
    function show({a,b}) {
        console.log(a,b)
    }
    show({a:1,b:2});

    function show({a,b='默认'}) {
        console.log(a,b)
    }
    show({a:1});

    function show({a='默认',b='默认'}) {
        console.log(a,b)
    }
    show({});
```
 
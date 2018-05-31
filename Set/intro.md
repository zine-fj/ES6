## 数据结构
1. 之前：数组、json，二叉树...
``` shell
    let arr = ['a','b','a'];
```  
2. 现在：set数据结构，类似数组，但是里面不能有重复值(有的话默认不显示)
``` shell
    new Set(['a','b']);

    # 添加
    let setArr = new Set([]);
    setArr.add('a');
    setArr.add('b');
    # 也可以这样写
    let setArr = new Set().add('a').add('b').add('c');

    # 删除
    setArr.delete('b');

    # 判断是否有某值(返回true false)
    setArr.has('a');

    # 判断个数
    setArr.size;

    # 清空
    setArr.clear();

    # 可循环，默认为value，且下标key和value一样，推荐用forEach循环
```
3. 用法（变数组）
``` shell
    # 变数组 然后数组中用法都能用了
    let arr = [...new Set()];

    # 数组再变为set对象
    let set = new Set[...new Set()]

    # 数组去重
    let arr = [1,2,4,5,6,4,3,5,6,7,9];
    let newArr = [...new Set(arr)];
```
4. Set中一般放数组(也可放对象)，WeakSet中一般放对象
注意：出事往里面添加东西是不行的，都需要用add添加
``` shell
    # 靠谱
    let set = new Set([]);

    # 不靠谱 不能用size
    let weakset = new WeakSet({});
```
总结：用new Set()就可以了
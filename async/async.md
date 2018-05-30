## async
语法：
``` shell
    async function fn() { // 表示异步，这个函数里面有异步任务
        await xxx         // 表示后面结果需要等待
    }
```
特点：  
1. await只能放到async函数中
2. 相比generator语义化更强
3. await后面可以是promise对象，也可以是数字、字符串、布尔
4. async函数返回是一个promise对象
5. 只要await语句后面Promise状态变成reject，那么整个async函数会中断执行

如何解决asyc函数中抛出错误影响后续代码？
``` shell
    # 方法一
    try{

    }catch(e) {}

    # 方法二
    promise本身catch

    # 建议
    任何有 await 的地方，都 try catch 掉
```




## Promise
字面含义： 承诺，许诺的意思  
作用：解决异步回调问题

1. 传统方式：大部分用回调函数，事件
``` shell
    # 通过回调，一层层调用
    ajax(url,{ // 获取token
        ajax(url,()=>{ // 获取用户信息
            ajax(rul,()=>{ // 获取用户相关新闻

            })
        })
    })
```
2. 语法：
``` shell
    new Promise(function(resolve,reject) {
        #  resolve, 成功时调用
        #  reject, 失败时调用
    })

    # 例子
    let a = 10;
    let promise = new Promise(function(resolve,reject) {
        if(a == 10) {
            resolve('成功')
        } else{
            reject('失败')
        }
    });
    promise.then(res=>{
        console.log(res);
    },err=>{
        console.log(err);
    })

    # 捕获错误的另一种写法
    promise.catch(err=>{

    })

    # 所以一般这样用
    promise.then(res=>{

    }).catch(err=>{
        
    })
```
3. 转换为Promise对象：
``` shell
    # 将现有的东西，转成一个promise对象，resolve状态，成功状态
    Promise.resolve('aa');
    # 等价于
    new Promise(resolve=>{
        resolve('aa')
    })

    # 将现有的东西，转成一个promise对象，reject状态，失败状态
    Promise.reject('aa');
    # 等价于
    new Promise(reject=>{
        reject('aa')
    })
```
4. Promise.all()  
写法：Promise.all([p1,p2,p3]); 把Promise打包，扔到一个数组里面，打包完还是一个Promise对象。    
注意：必须确保所有的Promise对象都是resolve状态(成功状态)。
``` shell
    let p01 = Promise.resolve('aaa');
    let p02 = Promise.resolve('bbb');
    let p03 = Promise.resolve('ccc');
    Promise.all([p01,p02,p03]).then(res=>{
        console.log(res);

        # 解构
        let [res1,res2,res3] = res;
        console.log(res1,res2,res3);
    })
```
5. Promise.race()  
用法：和Promise.all()类似，但是只要有一个Promise对象是resolve状态即可返回。
``` shell
    let p11 = Promise.reject('aaa');
    let p12 = Promise.reject('bbb');
    let p13 = Promise.resolve('ccc');
    Promise.race([p11,p12,p13]).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err); 
    })
```











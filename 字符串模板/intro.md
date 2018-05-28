## 字符串模板
字符串模板：``，优点：可以随意换行，用法：`${变量名字}`。
``` shell
    let name = 'fj';
    let age = 18;
    let str = '我叫xxx，今年xx岁';
    // 之前写法
    let str1 = '我叫'+ name +'，今年'+ age +'岁';
    // 字符串模板写法
    let str2 = `我叫${name}，今年${age}岁`;
```
具体例子
``` shell
    let data = [
        {title:'习近平将主持上合青岛峰会',read:100},
        {title:'西安4月房价同比涨73.89%全国第一 ',read:9},
        {title:'美舰擅入西沙群岛领海 我军警告驱离',read:10},
        {title:'这2年 澳为何频频敌视中国',read:900}
    ]
    let oList = document.querySelector('#list');
    for(let i = 0; i < data.length; i++) {
        let oLi = document.createElement('li');
        oLi.innerHTML = `<span>${data[i].title}</span>
                        <span>${data[i].read}</span>
                        <a href="#">详情</a>`
        oList.appendChild(oLi)
    }
```
#### 字符串查找
``` shell
    // 返回索引(位置)，没找到返回-1
    str.indexOf(要找的东西)
    // 返回值 true/false
    str.includes(要找的东西) 
```
判断浏览器
``` shell
    if(navigator.userAgent.includes('Chrome')) {
        alert('是Chrome')
    } else {
        alert('不是Chrome')
    }
```
#### 字符串其他
``` shell
    // 判断以谁开头(比如 判断网址开头)，返回值 true 和 false
    str.startsWidth(检测东西)  

    // 判断以谁结尾(比如 是否是.png结尾)，返回值 true 和 false
    str.endsWidth(检测东西)  

    // 重复n次(n >= 1)，0的话为空
    str.repeat(n)

    // 填充字符串
    str.padStart(整个字符串长度,填充东西) // 往前填充
    str.padEnd(整个字符串长度,填充东西) // 往后填充

    let oStr = 'a';
    let padStr = 'xxx';
    console.log(oStr.padStart(oStr.length + padStr.length,padStr))
```
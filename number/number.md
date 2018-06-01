## 数字(数值)变化
1. 二 八 进制
``` shell
    # 二进制 Binary
    let a = 0b010101;

    # 八进制 Octal
    let a = 0o666;

    # 十六进制
    #ccc

```
2. 之前转换为数字：Number()、parseInt()、parseFloat()
3. 现在转换为数字
``` shell
    # 判断是否为数字
    Number.isFinite(a);

    # 判断数字是不是整数
    Number.isInteger(a);

    # 安全整数：-(2^53 - 1) 到 (2^53 - 1)
    # 分别对应：Number.MIN_SAFE_INTEGER   Number.MAX_SAFE_INTEGER  
    Number.isSafeInteger(a);
```
4. Math
ES6新增的
``` shell
    # 截断 只截取整数，没有四舍五入
    Math.trunc();

    # 判断一个数是正数、负数、0，返回值为1，-1，0，其他值返回NaN
    Math.sign();

    # 计算一个数的立方根
    Math.cbrt()

    ...
```




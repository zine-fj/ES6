## 类，面向对象(属性，方法)
1. 之前写法：函数模拟      
``` shell
    # 写法
    function Person() {
        this.name = 'aaa';
    }
    Person.prototype.showName = function() {}

    # 具体例子
    function Person(name,age) {
        # 属性
        this.name = name;
        this.age = age;
    }
    
    # 方法一
    Person.prototype.showName = function() {
        return `名字为：${this.name}`
    }
    Person.prototype.showAge = function() {
        return `年龄为：${this.age}`
    }

    # 方法二
    Object.assign(Person.prototype,{
        showName() {
            return `名字为：${this.name}`;
        },
        showAge() {
            return `年龄为：${this.age}`;
        }
    });

    let p1 = new Person('fj',24);
    console.log(p1.showName(),p1.showAge())
```
2. 现在写法：ES6变形(class)  
注意：1、ES6里面class没有提升功能，在ES5中用函数模拟是可以的(默认函数提升)。   
2、ES6里面this比之前轻松多了。
``` shell
    # 写法一
    class Person {
        # 注意：不加逗号
        # 构造方法(函数)，调用new，自动执行
        constructor() {
            this.name = 'aaa';
        }
        showName() {

        }
    }

    # 写法二(不推荐)
    let Person = class{
        # todo
    }

    # 具体例子
    class Person1{
        # 构造方法(函数)，调用new，自动执行
        constructor(name,age) {
            console.log(`构造函数执行了，${name}，${age}`);
            # 属性
            this.name = name;
            this.age = age;
        }

        # 方法
        showName() {
            return `名字为：${this.name}`;
        }
        showAge() {
            return `年龄为：${this.age}`;
        }
    }
    let p1 = new Person1('fj',18);
    console.log(p1.showName(),p1.showAge());
```
3. 类的其他种写法(ES6里面属性名可以放到表达式里面，只要能执行就可)
``` shell
    let a = 'strive';
    let b = 'method';

    class Person {
        [a+b]() {

        }
    }
```
4. 矫正this:
``` shell
    fn.call(this指向谁,args1,args2...);

    fn.apply(this指向谁,[args1,args2...]);

    fn.bind();
```
5. getter(获取属性)、setter(设置属性)，如果不封装框架，一般很少用。
6. 静态方法：就是类身上的方法(加 static)。
``` shell
    class Person{
        constructor() {}

        showName() {
            return '这是showName方法';
        }

        static aaa() {
            return '这是静态方法';
        }
    }

    let p1 = new Person();
    console.log(p1.showName(),Person.aaa());
```
















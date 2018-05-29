## 继承
1. 之前写法
``` shell
    # 父类
    function Person(name) {
        this.name = name;
    }
    Person.prototype.showName = function() {
        return `名字是:${this.name}`;
    };

    # 子类
    function Student(name,skill) {
        Person.call(this,name); // 继承属性

        this.skill = skill;
    }

    # 继承showName
    Student.prototype = new Person();

    # 调用
    let stu1 = new Student('strive','逃学');
    console.log(stu1.name,stu1.showName());
```
2. 现在写法
接下来例子中因为父类都一样，所以提取出来:
``` shell
    # 父类
    class Person{
        constructor(name) {
            this.name = name;
        }
        showName() {
            return `名字为:${this.name}`;
        }
    }
```
``` shell
    # 子类
    class Student2 extends Person{

    }

    # 调用
    let stu2 = new Student2('strive','逃学');
    console.log(stu2.name,stu2.showName());
```
3. 子类中如果要定义自身属性、方法的时候
注意：主要起作用代码为  -->  super();
``` shell
    #  子类
    class Student extends Person{
        constructor(name,skill) {
            super(name)
            this.skill = skill
        }
        showSkill(){
            return `技能表现:${this.skill}`;
        }
    }

    #  调用
    let stu1 = new Student('strive','逃学');
    console.log(stu1.name,stu1.skill,stu1.showName(),stu1.showSkill());
```
4. 子类中方法把父类中方法覆盖了怎么办
``` shell
    #  子类
    class Student extends Person{
        constructor(name,skill) {
            super(name)
            this.skill = skill
        }
        showSkill(){
            return `技能表现:${this.skill}`;
        }

        showName() {
            # 父级方法的执行
            super.showName(); 

            # 做子级自己的事情
            console.log('子类里的showName');
            return '子类里的返回值'
        }
    }

    #  调用
    let stu1 = new Student('strive','逃学');
    console.log(stu1.showName())
```












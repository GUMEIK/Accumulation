# class
```javascript
// 可计算的成员名
// 字段初始化器 ：写个成员，然后直接等号赋值
const printName = "print"

class Animal{
    // ES7支持……字段初始化器
    leg = "four";//相当于在constructor 中写上 this.leg = "four";
    // 字段初始化器添加的成员位于对象上
    // 这里的constructor就相当于ES5中的构造函数
    // this指向构造器构造出来的对象
    constructor(name,sex,age){
        this.name = name;
        this.sex = sex;
        // 在这里已经进行赋值了
        this.age = age;
    }

    set age (age){
        this._age = age;
    }
    get age(){
        return this._age;
    }

    [printName](){
        console.log("print")
    }

    // 静态方法和属性
    static type = 'animal'//字段初始化器添加静态成员
    static breath(){
        console.log("breath")
    }

    // 注意：这样写this始终会绑定到创建对象上
    // 字段初始化器的作用
    // 因为，箭头函数的this由定义时的环境决定
    // 而定义时的环境恰巧是构造函数，当创建一个对象时，
    // this就指向这个对象
    test = ()=>{
        // this指向被调用此方法的对象
        console.log(this)
    }


}


const dog = new Animal('dog','male',12)
// 调用可计算的成员名
dog[printName]();
console.log(dog.age)
console.log(dog)
dog.test();

// 如果原型方法写的是
 // 注意：
//  test(){
//     // this指向被调用此方法的对象
//     console.log(this)
// }
// 上文中的this输出的是undefined
// class 是严格模式，严格模式下this指向undefined 而不是window
// 使用箭头函数可解决此问题：箭头函数在字段初始化器位置上指向当前对象
const p = dog.test;
p();


// 类的继承
class Pig extends Animal{
    // 这里的constructor 可以不写，不写的话，默认为父类的构造函数，并调用父类的构造器
    // 当写了constructor 就必须写super()关键字来表示继承，不然会报错
    constructor(){//constructor表示本类的构造器
        // 这里表示调用父类构造函数,参数也是按照父类的来
        super('gog');
    }

    demo(){
        super.test();
    }
}

const oP = new Pig("hahha")
oP.test()//方法中的this指向pig类创建出来的对象
console.log(oP)

// super两种用法，直接当做函数调用，表示调用父类构造函数
// super 当做对象使用，表示调用父类的方法
```
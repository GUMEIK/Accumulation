// class 的本质还是一个函数
// 通过class 构造的函数，没有办法在原型上加普通属性， name = 'xzl';//es7是可以的，但它是私有属性，
// class Plane{
//     // 静态属性(es6不支持非方法的静态属性)
//     // 静态方法是Plane上的方法，就比如Date.now(),构造函数的静态方法；
//     static alive(){
//         return true;
//     }
//     // 私有属性
//     constructor(name){
//         this.name = name || '普通飞机';
//         this.blood = 100;
//     }
//     // 在原型上加方法(公有属性)
//     fly(){
//         console.log('fly');
//     }
// }

// // 传参到私有属性
// var oP = new Plane('小飞机');
// console.log(oP)
// oP.fly();
// // 继承(本质上还是原型和静态属性(静态属性继承过来，也只能当做静态属性使用))
// // super()继承私有属性，
// class AttackPlane extends Plane{
//     // constructor(){
//     //     // Plane.call()
//     //     // super()//要写在constructor第一行
//     //     super();
//     //     // this.logo = 'duyi'
//     // };
//     dan(){
//         console.log('biubiubiu');
//     }
// }

// var oA = new AttackPlane();
// console.log(oA)

// 通过class定义的类(也是有原型的，但原型属性不能够枚举)，不通过new执行，一定会报错;

// 父类的constructor中返回一个对象时，继承的就是这个对象


// class Person{
//     static breath(){
//         return '我是人，我最基本的技能之一就是会呼吸。'
//     }
//     constructor(name,sex,age,distance){
//         // console.log(distance)
//         this.name = name || '无名之辈';
//         this.sex = sex || '不知男女';
//         this.age = age || '年龄未知';
//         // this.distance = distance;
//         this.run = function(distance){
//             console.log('我能跑'+distance+'米！')
//         }
//         // return {
//         //     name:'xxx'
//         // }
//     }
//     smoking(){
//         return '我喜欢抽烟！'
//     }
// }

// var oP1 = new Person('xzl','male',18,'500');
// var oP2 = new Person('yhs','female',28,1000);

// class Girl extends Person{
//     constructor(name,sex,age,distance){
//         super('女孩子','female','55',0);
//     }
// }

// var oGirl = new Girl();

// ES5  继承
// 1.原型链继承(传统形式)
// Father.prototype.lastName = 'XZL'
// function Father(){
//     this.name = 'father'
// }

// var father = new Father();

// Son.prototype = father;
// function Son(){

// }

// var son = new Son();
// 2.共享原型
// 3.圣杯模式
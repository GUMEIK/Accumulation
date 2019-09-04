// 解构对象
// 将对象里面的值单独拿出来变量对其进行操作
// let obj = {
//     name:'GUMEI',
//     age:18
// };
// 要注意此处声明的变量要和需要解构的obj里面的属性名相似(最好都写成相同的)
// let name,age;
// ({name,age} = obj)
// let {name,age} = obj;
// 如果obj里面的name的值不想用name变量接受，则可以：
// let {name:newName,age:newAge} = obj
// newAge -->18  newName -->GUMEI
// 默认赋值,若obj中有male属性，则用obj中的male属性对应的值，若没有，则使用默认赋的值
let {name:newName,age:newAge,sex = 'male'} = obj
// 函数中也可以默认赋值
// function add(a = 9 ,b = 28){
//     return a +b;
// }
// console.log(add());

// 也可以解构数组

let arr = [1,2,3]
// let {0:x,1:y,2:z} = arr;
// 长的很相似
let [x,y,z] = arr;
// let {length} = arr;//length = arr;--->3
// 只想要数组中的对象的值
// let arr = [1,2,3,{name:'gumei',age:18}];
// ,,,表示相应位置的值我不想要，放空
// let [,,,{name,age}] = arr;



// // function outer(){
// //     let sum = (a,b) =>{
// //         console.log(arguments,a,b);
// //     }
// //     sum(2,8);
// // }
// // outer(3,9,0);
// // // arguments --> [3,9,0]
// // // a         --> 2
// // // b         --> 8

// a = 10;//默认挂载到window
// let sum = () =>{
//     console.log(this.a)//这里定义时的this指向window
// }
// let obj = {
//     a:'objinnerA',
//     func:sum
// }
// obj.func();//结果输出 10，而不是 objinnerA
// a = 10;//默认挂载到window
// let obj = {
//     a:'objinnerA',
//     func(){
//         let test = () => {
//             console.log(this.a)
//         }
//         test();
//     }
    
// }
// obj.func();//结果输出 objinnerA

// var name = 'global';
// var obj = {
//     name:'obj',
//     func:() =>{
//         this.name = 'loacl';
//         return function(){
//             return this.name;
//         }
//     }
// }

// obj.func()//global(func为非箭头函数);local(func为箭头函数)


var name = 'global'
var obj = {
    name:'obj',
    func:function(){
        // 此处的this
        this.name = 'local';
        function son (){
            console.log(this)
            // 此处的this指向window
            // return this.name;
        }
        son()
    }
}
obj.func();
// console.log(obj.func())
// var temp = obj.func();
// temp()
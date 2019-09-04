// function sum(){
//     var arr = [].slice.call(arguments,0);
//     var num = 0;
//     arr.forEach(function(ele){
//         num += ele;
//     })
//     return num;
// };
// console.log(sum(1,2,3,4,5))
// 将值写入(收集)到arg
// 收集以后，arg 是一个数组
// function sum (...arg){
//     var num = 0;
//     arg.forEach(function(ele){
//         num += ele;
//     })
//     return num;
// }

// console.log(sum(1,2,3,4,5))

// function test(a,b,...arg){
//     // console.log(arg)
//     // arg = [3,4,5]
// }
// test(1,2,3,4,5)

// 读
// function test(a,b){
//     return a +b;
// }
// var arr = [8,28];
// console.log(test(...arr))
let arr1 = [828,890]
let arr2 = [737,963]
let arr = [...arr1,...arr2]
// arr---->[828,890,737,963]
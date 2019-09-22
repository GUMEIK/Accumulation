// 不依赖于外部变量，并且能反复执行的函数累加器
// 统计函数执行次数
// 不利用闭包就必须借助全局变量
// var num = 0;
// function test(){
//     num ++;
// }

// function test(){
//     var num = 0;
//     return function (){
//         num ++;
//         return num;
//     }
// }

// var temp = test();
// temp();
// temp();
// temp();

// 2.可以做缓存（储存结构）

function test(){
    var food = 'apple';
    return {
        likea:function(){
            return 'i like '
        }
    }
}


// let oP = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log(0)
//     },0)
//     console.log(1)
//     resolve(2);//在此处触发成功的回调
// })
// oP.then((val)=>{
//     console.log(val)
// },(reason)=>{
//     console.log(reason)
// })
// console.log(3)
// // 如果注册的回调的异步是通过定时器执行，那么会按照放入任务队列里面的先后顺序进行执行，
// // 输出结果应该为： 1 3 0 2 
// // 但实际输出却为： 1 3 2 0
// // 这说明，注册的回调函数执行的优先级高于定时器，因此，其异步执行不是定时器实现的



// let oP = new Promise((resolve,reject)=>{
//     throw new Error('error')
// })

// function getData(bool,tips){
//     return new Promise((res,rej)=>{
//         if(bool){
//             res(tips);
//         }else{
//             rej(tips);
//         }
//     })
// }
// Promise.race([getData(false,'失败咯'),getData(false,'2 也失败咯')]).then((val)=>{
//     console.log('success')
//     console.log(val)
// },(reason)=>{
//     console.log('fail')
//     console.log(reason)
// })


// 传入一个 异步函数，对其进行promise化
function promise(func){
    return function(...arg){
        return new Promise((res,rej)=>{
            func(...arg,(err,data)=>{
                if(data){
                    res(data)
                }else{
                    rej(err);
                }
            })
        })
    }
}
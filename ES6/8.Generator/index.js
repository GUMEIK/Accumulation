// let obj = {
//     name:'gumei',
//     toString:function(){
//         return 'GUMEIK'
//     }
// }
// let os = Symbol(obj)

// console.log(os)

// var obj = {
//     name:'gumei',
//     age:18,
//     money:0,
//     [Symbol.iterator]:function(){
//         var arr = [];
//         for(let prop in this){
//             arr.push(this[prop]);
//         }
//         this.length = arr.length;
//         let index = 0;
//         let next = () => {
//             return {
//                 value:arr[index],
//                 done:this.length == index++
//             }
//         };
//         return {
//             next
//         }
//     }
// }


// function * Gen(){
//     let a = yield 1;
//     console.log(a)
//     let b = yield 2;
//     console.log(b)
//     let c = yield 3;
//     console.log(c)
//     return true;
// }
// let oG = Gen();


// var obj = {
//     0:'gumei',
//     1:18,
//     2:'0',
//     length:3,
//     [Symbol.iterator]:function * (){
//         let index = 0;
//         while(index != this.length){
//             yield this[index++]
//         }
//     }
// }

let fs = require('fs');
function searchAnswer (path){
    return new Promise(( resolve,reject )=> {
        fs.readFile(path,'utf-8',(error,data)=>{
            if(data){
                resolve(data)
            }else{
                reject(error)
            }
        })
    })
}

function * search (){
    let val1 = yield searchAnswer('./ES6/8.Generator/data/answer1.txt');
    let val2 = yield searchAnswer(val1);
    let val3 = yield searchAnswer(val2);
    return val3;
}
// let os = search();
// let {value , done } = os.next();
// 此时的value就是返回的promise对象
// value.then((val)=>{
//     let {value , done } = os.next(val);
//     value.then((val)=>{
//         let {value,done} = os.next(val);
//         value.then((val)=>{
//             console.log(val)
//         })
//     })
// })
// // 返回promise是为了方便处理执行的结果
// 接收参数为迭代对象
function Co(oIt){
    return new Promise((res,rej)=>{
        let next = (data)=>{
            let {value,done } = oIt.next(data);
            if(done){
                res(value)
            }else{
                value.then((val)=>{
                    next(val);
                },rej)
            }
        }
        next();
    })
}

Co(search() ).then((val)=>{
    console.log(val)
},(reason)=>{
    console.log(reason)
})

// searchAnswer('./ES6/8.Generator/data/answer1.txt').then((val)=>{
//     console.log(val);
//     return searchAnswer(val)
// },(reason)=>{
//     console.log(reason)
// }).then((val)=>{
//     console.log(val);
//     return searchAnswer(val)
// },(reason)=>{
//     console.log(reason)
// }).then((val)=>{
//     console.log(val)
// },(reason)=>{
//     console.log(reason)
// })
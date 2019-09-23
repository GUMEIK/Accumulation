




// let fs = require('fs');
// function searchAnswer (path){
//     return new Promise(( resolve,reject )=> {
//         fs.readFile(path,'utf-8',(error,data)=>{
//             if(data){
//                 resolve(data)
//             }else{
//                 reject(error)
//             }
//         })
//     })
// }
// async function search(url){
//     let val1 = await searchAnswer(url);
//     let val2 = await searchAnswer(val1);
//     let val3 = await searchAnswer(val2)
//     return val3;
// }
// search('./ES6/8.Generator/data/answer1.txt').then((val)=>{
//     console.log(val)
// })
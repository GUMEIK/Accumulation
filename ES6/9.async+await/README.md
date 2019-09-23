首先要注意，async和await是ES7的语法
# async 简介
async函数，是generator函数的语法糖，通过babel编译后可以看出它就是Genetator + Promise + Co 思想实现的，一般在使用的时候需配合await进行使用，可以优雅的解决异步操作问题

# 回顾异步操作中出现的问题以及解决
## 1.回调地狱
```javascript
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
async function search(url){
    let val1 = await searchAnswer(url);
    let val2 = await searchAnswer(val1);
    let val3 = await searchAnswer(val2)
    // 返回的是promise对象
    return val3;
}
search('./ES6/8.Generator/data/answer1.txt').then((val)=>{
    console.log(val)
})
```
## 2.try catch 不能够捕获异步任务
下面这个样子，当路径读取不到的时候是可以对一场进行捕获的
```javascript
async function search(url){
    try{
        let val1 = await searchAnswer(url);
        let val2 = await searchAnswer(val1);
        let val3 = await searchAnswer(val2)
        // 返回的是promise对象
        return val3;
    }catch(e){
        console.log(e)
    }
}
search('错误路径').then((val)=>{
    console.log(val)
})
```
## 3. 同步并发异步结果
### 3.1 Promise.all()
### 3.2 async + await
失败的不管，成功的处理



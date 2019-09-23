// function MyPromise(executor){
//     var self = this;
//     self.status = 'pending';
//     self.resolveValue = null;
//     self.rejectReason = null;
//     function resolve(value){
//         if(self.status === 'pending'){
//             self.status = 'Fulfilled';
//             self.resolveValue = value;

//         }
//     }
//     function reject(reason){
//         if(self.status === 'pending'){
//             self.status = 'Rejcted';
//             self.rejectReason = reason;

//         }
//     }
//     try{
//         executor(resolve,reject);
//     }catch(e){
//         reject(e);
//     }

// }

// MyPromise.prototype.then = function(onFulfilled,onRejected){
//     var self = this;
//     if(self.status === 'Fulfilled'){
//         onFulfilled(self.resolveValue)
//     }

//     if(self.status === 'Rejcted'){
//         onRejected(self.rejectReason);
//     }

// }



// let oP = new MyPromise((res,rej)=>{
//     setTimeout(function(){
//         rej(0);
//     },1000)

// })

// oP.then((val)=>{
//     console.log(val)
// },(reason)=>{
//     console.log(reason + 'fali')
// })

// 1.传入一个函数，同步执行


// function Test(func){

//     function demo1(){
//         console.log('demo1')
//     }
//     function demo2(){
//         console.log('demo2');
//     }
//     func(demo1,demo2);
// }

// var x = new Test(function(a,b){
//     // a();
//     b();
// })
/**
 * pending
 * fulfilled
 * rejected
 * ----------------
 * promise.then(onFulfilled, onRejected)
 * 
 */

// Promise原理

function MyPromise(executor) {
    var self = this;
    self.staus = 'pending'
    self.fulfilledValue = null;
    self.rejectedReason = null
    function resolve(value) {
        if (self.staus == 'pending') {
            self.staus = 'fulfilled'
            self.fulfilledValue = value;
        }
    }

    function reject(reason) {
        if (self.staus == 'pending') {
            self.staus = 'rejected'
            self.rejectedReason = reason
        }
    }
    try{
        executor(resolve, reject)
    }catch(e){
        reject(e);
    }
    
}
MyPromise.prototype.then = function(onFulfilled,onRejected){
    if(this.staus == 'fulfilled'){
        onFulfilled(this.fulfilledValue);
    }
    if(this.staus == 'rejected'){
        onRejected(this.rejectedReason);
    }
}
// 触发成功的函数，触发失败的函数
let oP = new MyPromise((resolve, reject) => {
    // resolve('哈哈哈，成功啦');
    // reject('呜呜呜，失败了')
    setTimeout(()=>{
        resolve('异步')
    },10)
});


oP.then((val)=>{
    // console.log('成功')
    console.log(val)
},(reason)=>{
    // console.log('失败')
    console.log(reason)
})
























// function MyPromise(func) {
//     var self = this;
//     self.status = 'pending'
//     self.fulfilledValue = null;
//     self.rejectedReason = null;
//     function resolve(value) {
//         if (self.status == 'pending') {
//             self.status = 'Fulfilled'
//             self.fulfilledValue = value;
//             console.log('resolve');
//         }
//     }
//     function reject(reason) {
//         if (self.status == 'pending') {
//             self.status = 'Rejected'
//             self.rejectedReason = reason;
//             console.log('reject')
//         }

//     }
//     try{
//         func(resolve, reject);
//     }catch(e){
//         reject(e);
//     }
// }


// MyPromise.prototype.then = function(res,rej){
//     if(this.status == 'Fulfilled'){
//         res(this.fulfilledValue);
//     }
//     if(this.status == 'Rejected'){
//         rej(this.rejectedReason);
//     }
// }
// // o
// var oP = new MyPromise((resolve, reject) => {
//     // resolve('哈哈哈哈');
//     throw new Error('hjk')
// })

// oP.then((val)=>{
//     console.log(val)
//     console.log('then success!')
// },(reason)=>{
//     console.log(reason)
//     console.log('then failed')
// })
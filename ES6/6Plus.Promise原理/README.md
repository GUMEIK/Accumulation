```javascript
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
```
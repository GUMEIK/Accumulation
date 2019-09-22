# 发布订阅者模式

## 1. 实现代码

```javascript
let event = {
    list:{},
    on:function(key,fn){
        if(!this.list[key]){
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    emit:function(){
        let key = [].shift.call(arguments);
        let fns = this.list[key];
        if(!fns || fns.length === 0){
            return false;
        }
        fns.forEach(ele =>{
            ele.apply(this,arguments)
        })
    },
    remove:function(key,fn){
        let fns = this.list[key];
        if(!fns ){return false;};
        if(!fn){
            fns && (fns.length = 0);
        }else{
            fns.forEach((ele,index)=>{
                if(ele === fn){
                    fns.splice(index,1)
                }
            })
        }

    }
}
```
## 2. 代码解释
### 2.1 on
用来订阅函数:将传进来的函数放到以key为名字的数组当中
### 2.2 emit
用来发布(触发)函数
### 2.3 remove
取消订阅
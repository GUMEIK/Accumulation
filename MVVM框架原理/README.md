# Vue 中的代理
## 知识点
- 当我们使用 Object.defineProperty( ) 监听对象中一个不存在的属性的时候,会自动给这个对象加上这个属性
eg:
```javascript
let obj = {
    name:'GUMEIK',
    age:18
}
Object.defineProperty(obj,'sex',{
    get(){
        return 'male';
    }
})
console.log(obj)
//输出的结果为：
```
![](./img/代理-1.png)
## vm.data.name--->data.name
我们都知道，在Vue中，可以直接根据vm.xxx拿到实例data里面的数据，那么这个是怎么实现的呢？其实原理很简单，就是 **当给一个对象代理一个自身不存在的属性的时候，这个对象就会拥有这个属性(见本页知识点部分)**
```javascript
const vm = {
    el:'#app',
    data:{
        name:'GUMEI',
        age:18
    }
}
// vm.data.name ---->vm.name
// 原理:给一个对象，代理不存在的属性，那么这个对象上
// 就会拥有这个属性
for(let prop in vm.data){
    Object.defineProperty(vm,prop,{
        get(){
            console.log('get')
            return vm.data[prop];
        },
        set(value){
            console.log('set')
            vm.data[prop] = value;
        }
    })
}
// 上述方法不会造成死循环的原因为代理的是vm,无论取值还是赋值操作的都是vm.data[prop],而不是vm[prop]

// 此时，我们就可以通过vm.name 拿到相应的值了
```
## 对象的代理
```javascript
// 传入一个对象，返回一个代理后的对象
// 无论取值和赋值都是操作的obj
// 因此可以认为就是直接操作obj
// 这样写的目的是为了避免取值或赋值时造成死循环
// 虽然这样对空间要求可能不太好，应有更好的方法
// 待探究
function proxyObject(obj){
    let proxyObj = {};
    for(let prop in obj){
        Object.defineProperty(proxyObj,prop,{
            configurable:true,
            get(){
                return obj[prop];
            },
            set(value){
                obj[prop] = value;
            }
        })
    }
    return proxyObj;
}
// 通过上面这种方法代理的对象只能代理原始值，当代理的属性为引用值时，取值和赋值时可以出发get事件，但不能触发set事件.(obj.objChild.name)如果想对属性值进行操作，则还需要进行一步处理。改进如下：
function proxyObject(obj){
    let proxyObj = {};
    for(let prop in obj){
        Object.defineProperty(proxyObj,prop,{
            configurable:true,
            get(){
                return obj[prop];
            },
            set(value){
                console.log('在此处，进行一系列操作')
                obj[prop] = value;
            }
        })
        // 如果obj[prop] 仍然为一个对象，就继续进行代理
        if(obj[prop] instanceof Object){
            proxyObj[prop] = proxyObject(obj[prop])
        }
    }
    return proxyObj;
}
// obj.objChild.name = 1  ;此时就可以触发set事件了
```
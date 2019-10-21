# value



# 知识点
```javascript
let obj = {
    name:'xxx'
}
obj.name  这种调用形式在内部其实被转为了 obj['name'],中括号内为字符串

```
```javascript
name 是window上的一个属性，其值为空串，在用name作为属性名时，应高度警惕
```
```
当代理一个对象不存在的属性时，那么会将这个属性添加到对象上面。
```
```javascript
// 在使用Object.defineProperty(obj,prop,{})时，应该尤其注意，在get方法中的返回值一定不能包含自身的prop,不然就会造成死循环
比如：下面这种情况就会造成死循环
Object.defineProperty(obj,'name',{
    set(value){
        console.log('set');
        obj['name'] = value;
    },
    get(){
        console.log('get');
        return obj['name']
    }
})
// 但是，下面这个不会造成死循环
Object.defineProperty(obj,'name',{
    set(value){
        console.log('set');
        obj[name] = value;
    },
    get(){
        console.log('get');
        return obj[name]
    }
})
// 因为name是window上的一个属性，其值为空串
obj[name] --->obj['']
```
```javascript
//鉴于以上的种种原因，当对一个对象中的属性进行代理时，要么代理给一个新的对象，要么就借助一个临时变量来进行操作

// 这里以 代理一个新的对象为例来说明

let obj = {
    name:'gumei',
    age:18
}
var proxyObj = {};
// 代理的是proxyObj
// 取值时，返回的是obj[prop]
// 赋值时，赋值给的是obj[prop]
// 取值和赋值操作都与proxyObj[prop]无关，所以不会造成死循环
Object.defineProperty(proxyObj,'name',{
    set(value){
        console.log('set');
        obj['name'] = value;
    },
    get(){
        console.log('get');
        return obj['name'];
    }
})
```
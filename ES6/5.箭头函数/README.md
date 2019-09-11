# 1.箭头函数特性
## 1.1 指向性更好
箭头函数只能做普通函数做的事情，没有原型，不能去创建对象
## 1.2 箭头函数中的arguments和this
**箭头函数中的arguments this 是由定义时外围最接近一层的非箭头函数的arguments和this决定**
### 1.2.1 arguments
- 如下语句会报错"arguments is not defined" 
```javascript
let sum = (a,b) =>{
    console.log(arguments);
}
sum(2,8);
```
- 当有了外部非箭头函数包裹时，形参以及arguments如下：其实就是最接近的非箭头函数的arguments；
```javascript
function outer(){
    let sum = (a,b) =>{
        console.log(arguments,a,b);
    }
    sum(2,8);
}
outer(3,9,0);
// arguments --> [3,9,0]
// a         --> 2
// b         --> 8

```

- 应用:当内部函数想要拿到外部函数的实参列表时
```javascript
function(){
    var args = arguments;
    return function(){
        func(arguments)
    }
}
```
可以简写为：
```javascript
function(){
    return () =>{
        func(arguments)
    }
}
```
### 1.2.2 this
this和arguments的指向基本上是相同的，只有在全局的时候稍有不同
- 如下代码，如果输出的是arguments就会报错，如果输出this就不会报错，这里的this就是window
```javascript
let sum = (a,b) =>{
    console.log(this);
}
sum(2,8);
```
- **要注意非箭头函数的this的指向是由定义时最外围的函数决定的！**
```javascript
a = 10;//默认挂载到window
let sum = () =>{
    console.log(this.a)//这里定义时的this指向window
}
let obj = {
    a:'objinnerA',
    func:sum
}
obj.func();//结果输出 10，而不是 objinnerA
```
要注意，下面的输出结果仍然为a，因为其this只由最近的外围**函数**决定，是**函数**而不是其他
```javascript
a = 10;//默认挂载到window
let obj = {
    a:'objinnerA',
    func:()=>{
        console.log(this.a)
    }
}
obj.func();//结果输出 10，而不是 objinnerA
```
- 由于箭头函数外层有了非箭头函数，箭头函数中的this就是最近的非箭头函数当中的this；
```javascript
a = 10;//默认挂载到window
let obj = {
    a:'objinnerA',
    func(){
        let test = () => {
            console.log(this.a)
        }
        test();
    }
    
}
obj.func();//结果输出 objinnerA
```



# 2. 箭头函数声明
## 2.1 普通声明
let func = (a,b) => { return a + b }   
**要注意箭头函数里面的形参不可以相同，如let func = (a,a) => a;是不可以的，在ES5里面是可以的**
## 2.2 省略return
- 返回a + b 的和  
let func = (a,b) => a + b;
- 返回一个对象  
let func = (a,b) => ({a:6,b:7})
## 2.3 当形参个数为一个的时候，( )可省略
- let func = a => a + 1



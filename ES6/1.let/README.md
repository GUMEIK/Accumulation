# let特点
## 1.没有变量声明提升，不能重复定义，不挂在到window
## 2.let 配合大括号{ }使用产生块级作用域
- 声明的变量和{}配合产生块级作用域-在大括号内部的变量无法在外部使用,例如：
```javascript
{
    let a = 5;
}
console.log(a)
```
控制台报错"a is not defined",如果将let改为var就不会报错
## 3.临时死区
- 下面这种情况是可以正常输出a的结果的：
```javascript
{
    var a = 10;
    {
        console.log(a)
    }
}
```
- 但是，下面这种情况就不行了，将会形成临时死区，造成“强龙不压地头蛇的局面”,**当在大括号里面和大括号外面同时用let声明某一变量时,外面的变量声明作废**
    - 此种情况输出结果为5
```javascript
{
    let a = 10;
    {
        let a = 5;
        console.log(a)
    }
}
```    
下面这种情况将会报错："Cannot access 'a' before initialization"
```javascript
{
    let a = 5;
    {
        console.log(a);
        let a = 7;
    }
}
```
# let 解决闭包小案例
## var 形成的闭包
```javascript
var arr = [];
for(var i = 0;i < 10;i++){
    arr[i] = function(){
        console.log(i)
    }
}
arr[0]();
arr[1]();
arr[2]();
arr[3]();
arr[9]();
//结果输出5个10；
for(var i = 0;i < 10;i++){
    setTimeout(function(){
        console.log(i)
    },0)
}
//结果输出10个10
```
```javascript
var arr = [];
for(let i = 0;i < 10;i++){
    arr[i] = function(){
        console.log(i)
    }
}
arr[0]();
arr[1]();
arr[2]();
arr[3]();
arr[9]();
//结果输出0 1 2 3 9；
for(let i = 0;i < 10;i++){
    setTimeout(function(){
        console.log(i)
    },0)
}
//结果输出0123456789
```
# const与let的区别
- const与let很多地方都是一样的，比如const也像let一样"不存在变量声明提升、存在临时死区、不挂在到window上"等,这里就不再赘述
- 和let不一样的是const用来声明"常量"，这里的"常量"指**引用地址不改变！** **可以降低代码的不可预测性**
# const需要注意的地方
## 1. 声明必须赋值
```javascript
const PI;
PI = 3.14;
```
上面代码块是会进行"Missing initializer in const declaration"报错的,应该写为：
```javascript
const PI = 3.14
```
## 2. 声明后(引用地址)不允许改变
```javascript
const PI = 3.14
PI = 4;
```
上面代码块会执行"Assignment to constant variable."报错。起初PI指向3.14，随后指向4，势必会报错。
```javascript
const PI = {
    name:'xzl',
    age:'18'
}
PI.sex = 'male';
PI.age = 19;
console.log(PI)
```
上面代码块是不会报错的，因为PI指向的引用空间位置没有发生变化。
# const 和 let 的选择
> 能使用const就使用const，**可能**其执行效率更高一些，因为系统内部可能对const的检测比较少，会节省算力（推测）。然后再使用let
# 补充
```javascript
function test(x,y){
    //let  x = 10;
    var x = 10;
}
```
函数中的形参是通过var 来声明的,上述代码可证明
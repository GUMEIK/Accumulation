# ...运算符
## ...运算符目的
简化书写长度，提升开发效率
***
# 写场景(将散列的值收集为一个数组)
## 1. 初识...运算符
**如下示例，...会将传入的参数收集到arg里面,收集了参数后的arg是一个数组**
```javascript
function sum (...arg){
    var num = 0;
    arg.forEach(function(ele){
        num += ele;
    })
    return num;
}
```
> 比起实参列表arguments,  ...arg少了一步将arguments转换为数组的过程，在用到与数组有关的操作时，会更方便一些！
## 2. 固定参数配合...运算符
适用于有一些固定参数要传入和部分不定参数要传入的场景，**要注意...arg必须是函数的最后一位参数，这也就昭示着固定参数必须放在...arg前面**
```javascript
function test(a,b,...arg){
     console.log(arg)
    // arg = [3,4,5]
}
test(1,2,3,4,5)
```

# 读场景(将聚合类型中的值转为散列的值)
## 1. 将参数数组展开作为参数传递给函数
```javascript
function test(a,b){
    return a +b;
}
var arr = [8,28];
console.log(test(...arr))
//...arr ----->8,28
```
## 2. 数组拼接(底层使用的是数组方法concat)
```javascript
let arr1 = [828,890]
let arr2 = [737,963]
let arr = [...arr1,...arr2]
// arr---->[828,890,737,963]
```

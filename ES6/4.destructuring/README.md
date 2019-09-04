# 解构(结构化赋值)
如果等号左右的内容很相似，便可进行结构化赋值，这么说可能会有些抽象，我们具体来看一下
## 1. 解构对象
假设我们有一个场景，将对象里面的值单独拿出来赋值给变量，单独对变量进行操作
```javascript
let obj = {
    name:'GUMEI',
    age:18
};
```
### 形式一
```javascript
let {name,age} = obj;
//name-->GUMEI,age-->18
//要注意变量的名字要和obj中的属性名相同，如果不想变量的名字和obj中的名字一样的话，则可以使用形式二
```
### 形式二(变量重命名)
```javascript
let {name:newName,age:newAge} = obj
//newAge -->18  newName -->GUMEI
```
### 形式三(默认赋值)
- 若obj中有male属性，则用obj中的male属性对应的值，若没有，则使用默认赋的值
```javascript
let {name:newName,age:newAge,sex = 'male'} = obj
```
- 函数也可以进行默认赋值，如下：
```javascript
function add(a = 9 ,b = 28){
    return a +b;
}
console.log(add());// 36
```

## 2. 解构数组
```javascript
let arr = [1,2,3]
```
### 形式一
```javascript
let {0:x,1:y,2:z} = arr;
```
### 形式二
```javascript
let [x,y,z] = arr;
```
### 形式三
```javascript
let {length} = arr;//length = arr;--->3
```
### 形式四(只想要数组中对象的值)
```javascript
let arr = [1,2,3,{name:'gumei',age:18}];
//,,,表示相应位置的值我不想要，放空
let [,,,{name,age}] = arr;
```
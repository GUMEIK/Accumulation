# requirejs(AMD规范)
依赖前置
# 使用
```js
// data-main为主入口文件
	<script src="./require.js" data-main="./main.js"></script>
```

# 定义一个模块(通过define定义)
```js
// 
define('定义的模块名字',['依赖的模块'],function(m1){
    // 回调函数
    let msg = 'm2-amd';
    function show(){
        console.log(msg,m1.getName())
    }
    // 暴露的接口
    return {show}
})
```
# 引入一个模块(通过require 引入)
```js
// 配置变量对应的路径
    require.config({
        paths:{
            equire2:'./require2',
            m1:'./require1'
        }
    })
    // 引入模块名
    require(['equire2'],function(m2){
        m2.show()
    })
```

# 引入模块两种方式(引入的模块名要和导出的模块一样)
## 方式一：直接引入路径
## 方式二：require.config()中进行配置对象(可以直接在入口文件中进行配置)


# 引入第三方库比如，jq也是可以的(必须是小写，因为jQuery中导出的模块规定为小写)
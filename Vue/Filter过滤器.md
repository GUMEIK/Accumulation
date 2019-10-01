# 1. 过滤器概述
> Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

# 2. 过滤器定义和使用
过滤器也分全局和局部过滤器
## 2.1 全局自定义过滤器
- 第一个参数为过滤器的名字，第二个参数为一个函数，其接受一个value的参数，value为管道符(" | ")之前的值，管道符可连续使用，每次传入的value都是前一个或多个管道符过滤之后的值。该函数需要有返回值，返回值即为过滤之后的内容，若无返回值使用了过滤器，则在页面上不会有所显示。
```html
<script>
    Vue.filter('demo',function(value){
        return value;
    })
</script>
```
- 定义的过滤器是可以进行参数传递的，比如下面的例子：将价格乘以 num 倍，钱的类型为美元
```html
<span>{{ money | toMoney(2,'$美元') }}</span>

<script>
    Vue.filter('demo',function(value,num,type){
        let temp = value * num + type;
        return temp;
    })
</script>
```
## 2.1 局部自定义过滤器
```javascript
new Vue({
    el:'#app',
    data:{
        content:'gumei',
    },
    // 局部过滤器只能在相应的 vue 实例当中进行使用
    filters:{
        toMoney:function(value){
            return value + 1;
        }

    }
```
# v-modal
输入框的双向数据绑定实际上是 :value 与 click时间的语法糖 

能够用于双向数据绑定的有：

input text   
textarea   
input checkbox   
input radio   
select   
```html
    <div id="app">
        <input type="text" v-model = "content">
        <span>{{ content }}</span>
    </div>
    <script>
        const vm = new Vue({
            el:'#app',
            data:{
                content:'gumei'
            }
        })
    </script>
```
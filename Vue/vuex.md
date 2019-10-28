```store文件夹下的index.js文件```
# state
（是用来存储数据的）
```js
state:{
    name:'xzl',
    age:18
},
```
**在组件中使用的两种方式：**
1. 方法一： 
```this.$store.state.name```
2. 方法二：
```js
import {mapState} from 'vuex';
computed:{
    ...mapState(['name'])
}
```
//使用此种方式（方法二）如果和组件里面data的数据名重复了，可以改变传参形式为对象进行名字修改
```js
computed:{
    ...mapState({
        //这样就可以用storeName了
        storeName:state=>state.name
    })
}
```
# getters
(相当于组件当中的计算属性（computed），组件中的computed是对组件中的data进行操作的，而store.js中的getters是对state中的数据进行操作的)

## 一个参数：
```js
getters:{
    //这个state就是store中的state中的数据
    person(state){
        return `${state.name} + ${state.age}`
    }
}
```
## 两个参数：
getters中的函数可以有两个参数,getters就是getters中的值
```js
 person(state,getters){
        return `${state.name} + ${state.age} + ${getters.person}`
}
```
**在组件中使用的两种方法：**
1. 方法一：
```js
import {mapGetters} from 'vuex'
computed:{
    ...mapGetters(['person'])
}


//使用此种方法如果重名了：则可以传入一个对象进行名字修改
computed:{
    ...mapGetters({
        newPerson:'person'
    })
}
```
2. 方法二：
```js
this.$store.getters.person
```
# mutations:
（mutation的作用是使用函数来更改state中的状态的）；
## 一个参数：
```js
mutations:{
    setName(state){
        state.name = 'xzl'
    }
}
```

## 两个参数：
第二个参数是在执行setName这个方法的时候传入进来的参数
```js
mutations:{
    setName(state,payload){
        state.name = payload;
    }
}
```
**组件中使用的两种方法：**
1. 方法一：  
如果没有参数，则第二个值可以不填写；如果参数是一个，就不用写成对象的形式，如果是多个，就需要写成对象的形式；
```js
this.$store.commit('setName',{tempObj，name:'hpu'})
```
2. 方法二：
```js
import {mapMutations} from 'vuex';
methods:{
    ...mapMutations(['setName']),
    this.setName('xuzhenlu')
}
```
# actions:
（执行异步任务，使用函数，用来提交(commit)mutations，也可以执行同步任务，在严格模式下使用mutations执行异步任务是会报错的，虽然其也可以有执行结果，但再vuex中是不推荐的，因为vuex的理念是单向数据流；
具体使用场景：比如，当我们发送网络请求（是一个异步的过程），收到数据之后再进行数据的更改）
```js
//其参数形式和mutations是一样的
actions:{
    setName({commit},payload){
        setTimeout(function(){
            commit('setName',payload)
        },1000)
    }
}
```
actions函数里面的第一个参数的内容；{commit}是从里面解构出来的

**在组件中使用的两种方法：**
1. 方法一：
``` js
this.$store.dispatch( 'setName' ,'xuzhenlu')
```
2. 方法二：
```js
import {mapActions} from 'vuex';
methods:{
    ...mapActions(['setName']),
    this.setName('xuzhenlu')
}
```
mutations与actions修改名字的方式：

待总结



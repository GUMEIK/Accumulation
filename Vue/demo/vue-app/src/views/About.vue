<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul class="nav">
      <router-link to="/about/demo1">demo1</router-link>
      <router-link to="/about/demo2">demo2</router-link>

      <li @click="pushDemo">push跳转</li>
      <li @click="pushDemo">replace跳转</li>
      <li>demo2</li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 这个函数里面的this是undefined，因此使用不了，可以在next()函数里面使用实例
  // this一般指的是组件实例
  // beforeRouteEnter(to,from,next){
  //   next(vm=>{
  //     // console.log(vm);
  //   })
  // },
  beforeRouteUpdate(to,from,next){
    console.log('路由变化了');
    next();
  },
  methods:{
    pushDemo(){
      // push 跳转
      // this.$router.push('/')
      // replace 跳转
      // this.$router.replace('/')
      //   [a,b,c,d]--->[a,b,c,d,e]  push
      //   [a,b,c,d]--->[a,b,c,e]  replace
      // go 跳转
      // this.$router.go(-1)
      /**
 * // 在浏览器记录中前进一步，等同于 
 * history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
       */
    }
  }
}
</script>

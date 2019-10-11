<template>
  <div class="home">
    <!-- Welcome -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" v-model="content">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'home',
  mounted(){
    console.log(this.$route);
    console.log(this.$router)
  },
  data(){
    return {
      content:null
    }
  },
  // 当路由离开之前,这些函数被统称为“导航守卫”
  beforeRouteLeave(to,from,next){
    // console.log(to);
    // console.log(from);
    // next();//next 执行代表跳转，不执行就不跳转
    if(this.content){
      const flag = window.confirm('你确定要离开吗？');
      if(flag){
        next();
      }
    }else{
      next();
    }
  },
  components: {
    HelloWorld
  }
}
</script>

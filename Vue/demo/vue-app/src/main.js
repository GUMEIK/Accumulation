import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// console.log(App);//引入的app组件是一个对象
// 全局守卫
router.beforeEach((to,from,next)=>{
  next();
})
// 路由内的东西全部被解析完毕之后才会去执行
// 一层层加载直到加载到组件也加载完成的时候就会执行
// router.beforeResolve((to,from,next)=>{
//   next();
// })

// 路由都加载完成后
// 没有实际性的作用，所以没有参数
// router.afterEach(()=>{

// })

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
  // JSX语法
}).$mount('#app')

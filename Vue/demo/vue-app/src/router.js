// import Vue from 'vue'
// import Router from 'vue-router'
// // 引入组件
// import Home from './views/Home.vue'
// // 使用路由 $router $route
// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: function () { 
//         return import(/* webpackChunkName: "about" */ './views/About.vue')
//       }
//     }
//   ]
// })


import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'

Vue.use(Router);

// 实例化router
export default new Router({
  mode:'history',
  // 是routes 而不是 routers!!!
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home,
      meta:{
        flag:true
      },
      beforeEnter(to,from,next){
        console.log(to)
        next();
      }
    },
    {
      path:'/about',
      // name:'About',
      component:()=>import('./views/About'),
      children:[
        {
          path:'demo1',
          component:()=>import('./components/demoTest1')
        },
        {
          path:'demo2',
          component:()=>import('./components/demoTest2')

        }
      ]
    },
    {
      path:'/question/:id',
      name:'question',
      component:()=>import('./components/Question'),
    }
  ]

})
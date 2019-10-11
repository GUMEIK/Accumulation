<template>
  <div id="app">
    <div id="nav">
      <!-- router-link中的tag表示被渲染为什么标签 -->
      <router-link  tag="a" to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 组件应该展示的区域，如果没有，组件就不会展示 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

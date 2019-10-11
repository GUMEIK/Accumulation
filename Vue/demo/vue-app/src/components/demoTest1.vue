<template>
    <div>
        <h1>demoTest1</h1>
        <router-link
        :to="{name:'question',params:{id:item.id}}"
        v-for="(item,index) in content"
        :key="index"
        > {{ item.name }} </router-link>
    </div>
</template>

<script>
export default {
  data(){
      return {
          content:[
              {name:'xzl',age:18,id:'0003id'},
              {name:'gumei',age:21,id:'0004id'}
          ]
      }
  }
}
</script>

<style scoped>


</style>
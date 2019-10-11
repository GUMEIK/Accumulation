<template>
    <div class="demo">
        {{ msg }}
        <calendar></calendar>
    </div>
</template>

<script>
import Calendar from './Canlendar'

export default {
    components:{
        Calendar
    },
    data(){
        return {
            msg:'hello 啊 ，树哥！'
        }
    }
}
</script>

<style scoped>


</style>
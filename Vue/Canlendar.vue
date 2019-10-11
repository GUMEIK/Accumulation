<template>
    <div class="calendar">
        <div class="date-header">
            <div class="prev-month">

            </div>
            <div class="show-date">
                {{year}}年{{ month }}月{{ day }}日
            </div>
            <div class="next-month">

            </div>
        </div>
        <div class="date-content">
            <div class="week-header">
                <div v-for="item in ['日','一','二','三','四','五','六']"
                :key="item"
                > {{ item }} </div>
            </div>
            <div class="week-day">
                <div class="every-day"
                v-for="item in 42"
                :key="item"
                > {{ item }} </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            year:null,
            month:null,
            day:null
        }
    },
    created(){
        this.getInitTime();
        // 获取这个月的1号是星期几
    },
    methods:{
        getInitTime(){
            const date = new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.day = date.getDate();
        },
        getDay(){
          
        }
    }
}
</script>



<style>
  .calendar {
    width: 500px;
    margin-left: 100px;
  }

  .date-header {
    width: 100%;
    display: flex;
    line-height: 30px;
  }

  .prev-month,
  .next-month {
    border: 15px solid transparent;
    width: 0;
    height: 0;
    cursor: pointer;
  }

  .prev-month {
    border-right-color: #007fff;
  }

  .next-month {
    border-left-color: #007fff;
  }

  .show-date {
    flex: 1;
    text-align: center;
    color: #007fff;
  }
  .week-header {
    display: flex;
  }

  .week-header > div {
    flex: 1;
    text-align: center;
    line-height: 30px;
    background-color: #007fff;
    color: #fff;
    font-weight: 600;
  }

  .week-day {
    width: 100%;
  }
  .every-day {
    
    display: inline-block;
    width: 14.28%;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
  .other-day {
    color: #ccc;
  }
  .now-day {
    background-color: #007fff;
    color: #fff;
    font-weight: 600;
  }
  .active-day:not(.now-day) {
    color: #007fff;
    border: 2px solid #007fff;
    line-height: 46px;
  }
</style>
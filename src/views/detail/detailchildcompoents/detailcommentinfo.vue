<template>
  <div class="detailcommentinfo">
      <div><span>用户评价：</span></div>
      <div v-for="(item,index) in rate" :key="index">
          <div class="user">
              <img :src="item.user.avatar" alt="">
              <span>{{item.user.uname}}</span>
          </div>
          <div>
              <span>{{item.content}}</span>
              <div v-for="(item, index) in item.images" :key="index"><img :src="item" alt=""></div>
          </div>
          <div>
              <span>{{item.created | showdate}}</span>
              <span>{{item.style}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import {dateFormat} from "../../../components/common/dateFormat"
export default {
    name:'detailcommentinfo',
    props: {
        rate:[Array]
    },
    filters: {
        showdate(value){
            const date = new Date(value*1000)
            return dateFormat("yyyy-mm-dd HH:MM", date)
        }
    }
}
</script>

<style>

</style>
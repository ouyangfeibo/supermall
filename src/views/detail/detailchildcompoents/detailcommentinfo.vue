<template>
  <div class="detailcommentinfo">
      <div class="text"><span>——————用户评价——————</span></div>
      <div class="content">
      <div v-for="(item,index) in rate" :key="index">
          <div class="user">
              <img :src="item.user.avatar" alt="">
              <span>{{item.user.uname}}</span>
          </div>
          <div class="talk">
              <div>{{item.content}}</div>
              <span class="talkimg" v-for="(item, index) in item.images" :key="index"><img :src="item" alt=""></span>
          </div>
          <div class="create">
              <span>{{item.created | showdate}}</span>
              <span class="style">{{item.style}}</span>
          </div>
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

<style scoped>
.content{
    margin-left: 15px;
}
.text{
    text-align: center;
    margin-bottom: 10px;
}
.user img{
    border-radius: 50%;
    width: 50px;
}
.user span{
    vertical-align: 16px;
    padding-left: 15px;
    font-size: 13px;
}
.talk{
    margin: 15px 0 15px;
}
.talk .talkimg img{
    width: 100px;
}
.create{
    font-size: 13px;
}
.style{
    margin-left: 15px;
}
</style>
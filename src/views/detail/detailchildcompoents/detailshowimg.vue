<template>
  <div class="detailshowimg">
      <div class="desc">{{detailInfo.desc}}</div>
      <div v-for="(item,index) in this.detailInfo.detailImage" :key="index">
          <div>参数：{{item.key}}</div>
      <div class="imgs"><img v-for="(item,index) in item.list" :key="index" :src="item" alt="" @load="imgload"></div>
      </div>
      
  </div>
</template>

<script>
export default {
 name:'detailshowimg',
 props: {
     detailInfo:{}
 },
 data () {
     return {
     }
 },
 methods: {
     imgload(){
         this.$emit("imgload")
     }
 }
}
</script>

<style scoped>
.detailshowimg .imgs img{
    height: 100%;
    width: 100%;
}
</style>
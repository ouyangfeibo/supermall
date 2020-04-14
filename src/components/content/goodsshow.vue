<template>
  <div class="goodsshow">
      <goodsshowitem v-for="(item,index) in goods" :key="index" :goodsitem="item"></goodsshowitem>
  </div>
</template>

<script>
import goodsshowitem from './goodsshowitem'
export default {
    name:'goodsshow',
    props: {
        goods:{
            type:Array,
            default(){
                return []
            }
        }
        
    },
    components: {
        goodsshowitem
    }
}
</script>

<style>
.goodsshow{
    display: flex;
    flex-wrap: wrap; 
   justify-content: space-around;
   padding-bottom: 49px;
}
</style>
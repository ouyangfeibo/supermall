<template>
<div >
  <swiper class="detailswiper">
      <swiperitem v-for="(item,index) in topimages" :key="index">
          <img :src="item" alt="">
      </swiperitem>
  </swiper>
</div>
</template>

<script>
import swiper from 'components/common/swiper/Swiper'
import swiperitem from 'components/common/swiper/SwiperItem'

export default {
    name:'detailswiper',
    props: {
        topimages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: {
        swiper,
        swiperitem,
    }
}
</script>

<style>
.detailswiper{
    height: 300px;
    overflow: hidden;
}
</style>
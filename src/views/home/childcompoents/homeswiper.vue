<template>
<div class="hoemswiper">
    <swiper>
      <swiperitem v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="" @load="imgload">
          </a>
      </swiperitem>
    </swiper>
  </div>
  
</template>

<script>
import swiper from 'components/common/swiper/Swiper'
import swiperitem from 'components/common/swiper/SwiperItem'
export default {
    name:'homeswiper',
    props: {
        banners:{
            type:Array,

        }
    },
    components: {
        swiper,
        swiperitem
    },
    methods: {
        imgload(){
            this.$emit('swiperimgload')
        }
    }
}
</script>

<style>
</style>
<template>
  <div>
      <navbar><div slot="center">购物街</div></navbar>
      <homeswiper :banners="banners"></homeswiper>
      <homerecommend :recommends="recommends"></homerecommend>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import homeswiper from './childcompoents/homeswiper'
import homerecommend from './childcompoents/homerecommend'
import {getHomeMultidata} from 'network/home'

export default {
    name:"Home",
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
    components: {
      navbar,
      homeswiper,
      homerecommend
    },
    created () {
      getHomeMultidata().then(res =>{
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list
        console.log(res)
      })
    }
}
</script>

<style>

</style>
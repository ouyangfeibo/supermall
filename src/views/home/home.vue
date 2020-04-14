<template>
  <div>
      <navbar class="navbar"><div slot="center">购物街</div></navbar>
      <homeswiper :banners="banners"></homeswiper>
      <homerecommend :recommends="recommends"></homerecommend>
      <homefeature></homefeature>
      <navcontrol class="navcontrol" :titles="['流行','新款','精选']" @tabclick="tabclick"></navcontrol>
      <goodsshow :goods="goods[goodstype].list"></goodsshow>
      
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import homeswiper from './childcompoents/homeswiper'
import homerecommend from './childcompoents/homerecommend'
import homefeature from './childcompoents/homefeature'

import navcontrol from '../../components/content/nvacontrol'
import goodsshow from '../../components/content/goodsshow'

import {getHomeMultidata,getHomeGoods} from 'network/home'


export default {
    name:"Home",
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        goodstype :'pop'
      }
    },
  
    components: {
      navbar,
      homeswiper,
      homerecommend,
      homefeature,
      navcontrol,
      goodsshow
    },
    created () {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      tabclick(index){
        switch(index){
          case 0:
            this.goodstype = 'pop'
            break
          case 1:
            this.goodstype = 'new'
            break
          case 2:
            this.goodstype = 'sell'
            break
        }
      },




      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list
          // console.log(res)
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
        
          this.goods[type].list.push(...res.data.data.list)
          
          //方法2  for(let n of res.data.data.list){
          //   this.goods[type].list.push(n)
          // }
          //方法3 this.goods[type].list = res.data.data.list.concat(this.goods[type].list)

          this.goods[type].page += 1
          console.log(this.goods[type].list)
      })
      }
    }
}
</script>

<style>
.navbar{
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 10;
}
.navcontrol{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
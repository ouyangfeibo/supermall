<template>
  <div id="home">
      <navbar class="navbar"><div slot="center">购物街</div></navbar>
      <navcontrol  :titles="['流行','新款','精选']" @tabclick="tabclick" ref="navcontrol1" v-show="isshow"></navcontrol>
      <betterscroll class="content" ref="betterscroll" :probetype=3 @positionscroll="positionscroll" :pullupload="true" @loadup="loadup">
        <homeswiper :banners="banners" @swiperimgload="swiperimgload"></homeswiper>
        <homerecommend :recommends="recommends"></homerecommend>
        <homefeature></homefeature>
        <navcontrol  :titles="['流行','新款','精选']" @tabclick="tabclick" ref="navcontrol2" v-show="!isshow"></navcontrol>
        <goodsshow :goods="goods[goodstype].list"></goodsshow>
      </betterscroll>
      <backtop @click.native="clicktop" v-show="showtop"></backtop>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import homeswiper from './childcompoents/homeswiper'
import homerecommend from './childcompoents/homerecommend'
import homefeature from './childcompoents/homefeature'

import navcontrol from '../../components/content/navcontrol'
import goodsshow from '../../components/content/goodsshow'
import betterscroll from '../../components/common/betterscroll/betterscroll'
import backtop from '../../components/content/backtop'

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
        goodstype :'pop',
        showtop:false,
        isshow:false,
        eltop:0,
        savey:0
      }
    },
  
    components: {
      navbar,
      homeswiper,
      homerecommend,
      homefeature,
      navcontrol,
      goodsshow,
      betterscroll,
      backtop
    },
    created () {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted () {
      const refreshs = this.debounce(this.$refs.betterscroll.refresh,50)
      // 监听goodsitemimg加载完成
      this.$bus.$on('goodsitemimgload',() =>{
        refreshs()
      })
    },
    activated () {
      this.$refs.betterscroll.refresh()
      this.$refs.betterscroll.scrollTo(0,this.savey,0)
      console.log(this.savey)
    },
    deactivated () {
      this.savey = this.$refs.betterscroll.getScrollY()
    },
    methods: {
      //防抖函数当图片加载完成定时执行betterscroll.refresh，重新计算高度
      debounce(func,delay){
        let timer = null
        return function(...args){
          if(timer) clearTimeout(timer)
          timer = setTimeout(() =>{
            func.apply(this,args)
          },delay)
        }
      },

      tabclick(index){
        // 点击导航使用传过来的index,给goodstype确定类型
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
        //同步俩个navcontral的点击状态一致
        this.$refs.navcontrol1.currentindex= index
        this.$refs.navcontrol2.currentindex= index
      },
      //点击返回顶部
    clicktop(){
      this.$refs.betterscroll.scrollTo(0,0)
    },  
    //当下拉到大于800时改变showtop为ture
    positionscroll(position){
      this.showtop = position.y<-800,
      this.isshow = this.eltop-44<(-position.y)
    },
    loadup(){
      this.getHomeGoods(this.goodstype)
      // 调用函数加载数据，下拉加载更多
      // console.log("加载成功")
    },
    swiperimgload(){
      this.eltop = this.$refs.navcontrol2.$el.offsetTop
      // console.log(this.$refs.navcontrol2.$el.offsetTop)
    },


      // 网络请求
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

          this.$refs.betterscroll.scroll.finishPullUp()   
          // 再次刷新scroll中的pullingUp,可以再次使用下拉加载数据
          // console.log(res)
      })
      }
    }
}
</script>

<style scoped>
#home{
  height: 100vh;
  padding-top: 43px;
}
.navbar{
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: indianred;
}
.content{
  height: 86.1vh;
  overflow: hidden;
}
</style>
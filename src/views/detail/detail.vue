<template>
  <div class="content">
    <detainav class="nav" @navclick ="navclick" ref="detailnav"></detainav>
    <betterscroll class="scrollcontent" ref="scroll" @positionscroll ="positionscroll" :probetype=3>
      <detailswiper :topimages="topimages"></detailswiper>
      <detailgoodstitle
        :goodstitle="title"
        :price="price"
        :oldprice="oldprice"
        :discountDesc="discountDesc"
        :columns="columns"
        :services="services"
      ></detailgoodstitle>
      <detailshopinfo :shopInfo="shopInfo"></detailshopinfo>
      <detailshowimg :detailInfo ='detailInfo' @imgload = 'imgload'></detailshowimg>
      <detailparaminfo :itemParams ='itemParams' :set ='set' :tables ="tables" ref="param"></detailparaminfo>
      <detailcommentinfo :rate='rate' ref="comment"></detailcommentinfo>
      <detailrecommend :recommendlist='recommendlist' ref="recommend"></detailrecommend>
    </betterscroll>
      <backtop v-show="showback" class="backtop" @click.native="backtop2"></backtop>
      <detailbar @addcart ='addcart'></detailbar>
  </div>
</template>

<script>
import detainav from "./detailchildcompoents/detailnav";
import detailswiper from "./detailchildcompoents/detailswiper";
import detailgoodstitle from "./detailchildcompoents/detailgoodstitle";
import detailshopinfo from "./detailchildcompoents/detailshopinfo";
import betterscroll from "../../components/common/betterscroll/betterscroll";
import detailshowimg from './detailchildcompoents/detailshowimg'
import detailparaminfo from './detailchildcompoents/detailparaminfo'
import detailcommentinfo from './detailchildcompoents/detailcommentinfo'
import detailrecommend from './detailchildcompoents/detailrecommend'
import backtop from '../../components/content/backtop'
import detailbar from './detailchildcompoents/detailbar'

import { getdetail,getrecommend } from "network/detail";

export default {
  name: "detail",
  props: {
    goodsitem: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
  components: {
    detainav,
    detailswiper,
    detailgoodstitle,
    detailshopinfo,
    betterscroll,
    detailshowimg,
    detailparaminfo,
    detailcommentinfo,
    detailrecommend,
    backtop,
    detailbar
  },
  data() {
    return {
      iid: null,
      topimages: [],
      title: null,
      price: null,
      oldprice: null,
      discountDesc: null,
      columns: {},
      services: {},
      shopInfo: {},
      detailInfo:{},
      itemParams:{},
      tables:[],
      set:[],
      rate:[],
      recommendlist:[],
      topy:[0],
      showback:false,
    };
  },
  created() {
    //1.保存当前路由的iid
    this.iid = this.$route.params.iid;
    //2.根据iid请求相应的数据
    getdetail(this.iid).then(res => {
      console.log(res);
      this.topimages = res.data.result.itemInfo.topImages;
      this.title = res.data.result.itemInfo.title;
      this.price = res.data.result.itemInfo.price;
      this.oldprice = res.data.result.itemInfo.oldPrice;
      this.discountDesc = res.data.result.itemInfo.discountDesc;
      this.columns = res.data.result.columns;
      this.services = res.data.result.shopInfo.services;
      //店铺数据
      this.shopInfo = res.data.result.shopInfo;
      //展示图片数据
      this.detailInfo = res.data.result.detailInfo;
      //参数数据
      this.itemParams = res.data.result.itemParams;
      this.tables = res.data.result.itemParams.rule.tables
      this.set = res.data.result.itemParams.info.set
      //评论数据
      this.rate = res.data.result.rate.list
      // this.discount = res.data.result.promotions.list
    });
    getrecommend().then( res =>{
      // console.log(res)
      this.recommendlist = res.data.data.list
      // console.log(this.recommendlist.length)
    })
  },
  methods: {
    imgload(){
      //图片加载完刷新detail的高度
        this.$refs.scroll.refresh()
        // this.debounce(() => {
        //获取detail nav的每个title 的位置
        this.topy =[0]
        this.topy.push(-this.$refs.param.$el.offsetTop)
        this.topy.push(-this.$refs.comment.$el.offsetTop)
        this.topy.push(-this.$refs.recommend.$el.offsetTop)
        // console.log(this.topy)
        // },5000
        // )()
        
    },
    navclick(index){
      //点击detail nav中的title 使scroll滚动到相应位置
        this.$refs.scroll.scrollTo(0,this.topy[index],300)
          this.$refs.detailnav.currentindex === index
      },
    // debounce(func,delay){
    //     let timer = null
    //     return function(...args){
    //       if(timer) clearTimeout(timer)
    //       timer = setTimeout(() =>{
    //         func.apply(this,args)
    //       },delay)
    //     }
    //   },
    positionscroll(position){
      //detail中滚动，滚动的位置改变nav的title
        // console.log(position.y)
        const positionY = position.y
        if(positionY<0 && positionY > this.topy[1]){
          this.$refs.detailnav.currentindex = 0
        }else if(positionY<=this.topy[1]&&positionY>this.topy[2]){
          this.$refs.detailnav.currentindex = 1
        }else if(positionY<=this.topy[2]&&positionY>this.topy[3]){
          this.$refs.detailnav.currentindex = 2
        }else if(positionY<=this.topy[3]){
          this.$refs.detailnav.currentindex = 3
        }
        //detail 滚动展示backtop
        this.showback = positionY <-800
    },
    backtop2(){
      // 点击返回
      this.$refs.scroll.scrollTo(0,0)
    },
    addcart(){
      //1.获取商品信息
      const product = {}
      product.image = this.topimages[0]
      product.title = this.title
      product.price = this.price
      product.desc = this.discountDesc
      product.iid = this.iid
      product.count = 1
      //2.将商品添加到购物车
      this.$store.dispatch('addcart',product)
    }
    }
};
</script>

<style scoped>
.content {
  height: 100vh;
  position: relative;
  z-index: 5;
  background-color: #fff;
}
.nav{
 background-color: #fff;
}
.scrollcontent{
    height: 86.1vh;
    position: relative;
    z-index: -1;
}


</style>>

<template>
  <div class="content">
    <detainav class="nav"></detainav>
    <betterscroll class="scrollcontent">
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
      <detailshowimg :detailInfo ='detailInfo'></detailshowimg>
      <detailparaminfo :itemParams ='itemParams' :set ='set' :tables ="tables"></detailparaminfo>
      <detailcommentinfo :rate='rate'></detailcommentinfo>
    </betterscroll>
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

import { getdetail } from "network/detail";

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
    detailcommentinfo
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
    });
  },
  methods: {}
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
    height: 93.5vh;
    position: relative;
    z-index: -1;
}
</style>>

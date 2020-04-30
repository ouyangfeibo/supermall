<template>
  <div class="detailbar">
    <div class="barleft">
      <div>
        <i class="iconfont iconkefu" style="color:red"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="iconfont icondianpu"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="iconfont iconxingxingkong"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="barright">
      <div class="cart" @click="addcart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'detailbar',
    methods: {
      addcart(){
        this.$emit('addcart')
      }
    }
}
</script>

<style>
@import url(//at.alicdn.com/t/font_1788006_eg0sbsnhx0a.css);
.detailbar{
  height: 49px;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #Fff;
}
.barleft{
  width: 58%;
  display: flex;
}
.barleft div{
  flex: 1;
  text-align: center;
  font-size: 18px;
  line-height: 49px;
}
.barleft div i{
  font-size: 20px;
}
.barright{
display: flex;
  width: 42%;
}
.barright .cart{
  width: 60%;
  line-height: 49px;
  text-align: center;
  background-color: yellow;
}
.barright .buy{
  width: 40%;
  line-height: 49px;
  text-align: center;
  background-color: lightcoral;
}
</style>
<template>
  <div class="shopinfo">
      <div class="shoplogo">
          <span class="logo"><img :src="shopInfo.shopLogo" alt=""></span>
          <span class="shopname">{{shopInfo.name}}</span>
      </div>
      <div class="shopabout">
          <span>
              <div class="sell">
                  <div class="num">{{shopInfo.cSells}}</div>
                  <div class="tit">总销量</div>
              </div>
              <div class="sell">
                  <div class="num">{{shopInfo.cGoods}}</div>
                  <div class="tit">全部宝贝</div>
              </div>
              <div class="score">
                  <div v-for="(item,index) in shopInfo.score" :key="index">
                      <span class="scoretit">{{item.name}}</span>
                      <span class="scorenum">{{item.score.toFixed(2)}}</span>
                  </div>
              </div>
          </span>
      </div>
      <div class="shop">
          <a :href="shopInfo.shopUrl">进店逛逛</a>
      </div>
  </div>
</template>

<script>
export default {
    name:'shopinfo',
    props: {
        shopInfo:{}
    }
}
</script>

<style scoped>
.shopinfo{
    margin-top: 22px;
}
.shoplogo{
    margin-left: 5px;
    /* margin-bottom: 10px; */
}
.shoplogo .shopname{
    font-size: 14px;
    padding-left: 10px;
    vertical-align: 15px;
}
.shoplogo .logo img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.shopabout .sell{
    display: inline-block;
    margin-left: 25px;
}
.shopabout .sell .num{
    text-align: center;
}
.shopabout .sell .tit{
    font-size: 13px;
    margin-top: 6px;
}
.shopabout .score{
    display: inline-block;
    margin-left: 80px;
}
.shopabout .score .scorenum{
    margin-left: 15px;
    font-size: 13px;
    color: lawngreen;
}
.shop{
    margin-top: 15px;
    font-size: 13px;
    text-align: center;
}
</style>
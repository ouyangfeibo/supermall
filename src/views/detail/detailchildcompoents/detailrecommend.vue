<template>
  <div class="detailrecommend">
    <div class="text">——————推荐专区——————</div>
    <div class="content">
    <div v-for="(item, index) in recommendlist" :key="index" class="detailrecommendbox">
          <a :href="item.item_url">
              <img :src="item.image" alt="">
          </a>
          <div class="bottomtext">
            <p>{{item.title}}</p>
            <span class="price">￥{{item.price}}</span>
            <span class="iconfont icon-pingjiaxingxing" style="color:lightcoral"></span>
            <span class="collect">{{item.cfav}}</span>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    nmae:'detailrecommend',
    props: {
        recommendlist:[Array]
    }
}
</script>

<style scoped>
@import url(//at.alicdn.com/t/font_1590380_0eraxhc8240r.css);
.detailrecommend .text{
  margin-top: 20px;
  text-align: center;
}
.detailrecommend .content{
    display: flex;
    flex-wrap: wrap; 
   justify-content: space-around;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.detailrecommend .detailrecommendbox{
    width: 48%;
   margin-bottom: 10px;

}
.detailrecommend .detailrecommendbox .bottomtext p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
    margin-bottom: 4px;
}
.detailrecommend .detailrecommendbox .bottomtext .price{
  margin-right: 20px;
}
.detailrecommend .detailrecommendbox img{
    width: 100%;
    border-radius: 5px;
}
</style>
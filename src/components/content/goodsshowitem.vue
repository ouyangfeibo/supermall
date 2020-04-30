<template>
  <div class="goodsshowitem" @click="itemclick">
    <div>
        <img :src="goodsitem.show.img" alt="" @load="imgload">
        <div class="bottomtext">
            <p>{{goodsitem.title}}</p>
            <span class="price">￥{{goodsitem.price}}</span>
            <span class="iconfont iconpingjiaxingxing" style="color:lightcoral"></span>
            <span class="collect">{{goodsitem.cfav}}</span>
            <div></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'goodsshowitem',
    props:{
        goodsitem:{
            type:Object,
            defalut(){
                return {}
            }
        }
    },
    methods: {
        imgload(){
            this.$bus.$emit("goodsitemimgload")
        },
        itemclick(){
            this.$router.push('./detail/'+this.goodsitem.iid)
        }
    }
}
</script>

<style scoped>
@import url(//at.alicdn.com/t/font_1788006_eg0sbsnhx0a.css);
.goodsshowitem{
    padding-bottom: 45px;
    position: relative;
    width: 48%;
}
.goodsshowitem div img{
    width: 100%;
    border-radius: 5px;
}
.goodsshowitem div .bottomtext{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    padding-bottom: 5px;
}
.goodsshowitem div .bottomtext p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
    margin-bottom: 4px;
}
.goodsshowitem div .bottomtext .price{
    color: lightcoral;
    margin-right: 30px;
}

</style>
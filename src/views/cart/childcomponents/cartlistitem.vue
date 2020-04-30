<template>
  <div class="shopitem">
      <div class="itemselector">
          
      </div>
      <div class="itemimage">
          <img :src="product.image" alt="商品图片">
      </div>
      <div class="iteminfo">
          <div class="itemtitle">{{product.title}}</div>
          <div class="itemdesc">{{product.desc}}</div>
          <div class="infobottom">
              <div class="itemprice ">{{product.price}}</div>
              <div class="itemcount ">x{{product.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'cartlistitem',
    props:{
        product:{
            type:Object
        }
    }
    
}
</script>

<style scoped>
.shopitem{
    width: 100%;
    height: 130px;
    border: 2px solid lightcoral;
    padding-top: 10px;
}
.itemimage{
    float: left;
    width: 22%;
}
.itemimage img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.iteminfo{
    width: 77%;
    padding-left: 5px;
    font-size: 17px;
    color: #333;
    position: relative;
    vertical-align: 66px;
    height: 60px;
    float: right;
}
.iteminfo .itemtitle{
    font-size: 16px;
    height: 20px;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.iteminfo .itemdesc{
    font-size: 13px;
    margin-top: 15px;
    margin-bottom: 10px;
    height: 30px;
    text-align: center;
}
.infobottom{
    margin-top: 10px;
    position: absolute;
    bottom: -30px;
    left: 10px;
    right: 10px;
}
.infobottom .itemprice{
    color: orangered;
    float: left;
} 
.infobottom .itemcount{
    float: right;
    margin-right: 24px;
}
</style>
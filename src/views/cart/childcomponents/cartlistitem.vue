<template>
  <div class="shopitem">
      <div class="itemselector">
          <checkbutton ref="checkbutton" :ischeck = "product.checked" @click.native="checkclick"></checkbutton>
      </div>
      <div class="itemimage">
          <img :src="product.image" alt="商品图片">
      </div>
      <div class="iteminfo">
          <div class="itemtitle">{{product.title}}</div>
          <div class="itemdesc">{{product.desc}}</div>
          <div class="infobottom">
              <div class="itemprice ">￥{{product.price}}</div>
              <div class="itemcount ">x{{product.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import checkbutton from '../../../components/content/checkbutton'
export default {
    name:'cartlistitem',
    props:{
        product:{
            type:Object
        }
    },
    components: {
        checkbutton
    },
    methods: {
        checkclick(){
            this.product.checked = !this.product.checked

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
    position: relative;
}
.itemselector{
    position: absolute;
    left: 5px;
    top: 40%;
}
.itemimage{
    margin-left: 30px;
    float: left;
    width: 21%;
}
.itemimage img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.iteminfo{
    width: 70%;
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
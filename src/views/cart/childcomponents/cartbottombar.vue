<template>
  <div class="bottombar">
    <div class="content">
      <div class="checkcontent">
        <checkbutton class="checkbutton"></checkbutton>
        <span>全选</span>
      </div>
      <div class="add">
        <span>合计 ￥ {{totalprice}}</span>
      </div>
      <div class="pay">
        <span>去计算({{this.$store.state.cartlist.length}})</span>
      </div>
    </div>
  </div>
</template>

<script>
import checkbutton from "../../../components/content/checkbutton";
export default {
  name: "cartbottombar",
  components: {
    checkbutton
  },
  computed: {
    totalprice(){
      return this.$store.state.cartlist.filter( item =>{
        return item.checked
      }).reduce((prevalue,item) =>{
        return  prevalue + item.price*item.count
      },0)
    }
  },
 
};
</script>

<style scoped>
.bottombar {
  height: 40px;
  background-color: rgb(235, 232, 232);
  font-size: 14px;
}
.content{
  position: relative;
  height: 40PX;
  width: 100%;
}
.checkcontent {
  display: inline-block;
  margin-left: 5px;
}
.checkcontent .checkbutton {
  display: inline-block;
  vertical-align: -4px;
}
.add {
  margin-left: 30px;
  height: 40PX;
  line-height: 40px;
  display: inline-block;
}
.pay {
  width: 80PX;
  position: absolute;
  right: 0;
  line-height: 40px;
  height: 40PX;
  display: inline-block;
  background-color: lightcoral;
  color: #FFF;
  text-align: center;
}
</style>
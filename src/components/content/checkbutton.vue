<template>
  <div class="checkbutton" :class="{check: ischeck}">
      <img src="../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'checkbutton',
    props:{
        ischeck:{
            type:Boolean,
            defalut:false
        }
    }
}
</script>

<style scoped>
.checkbutton{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #aaa;
}
.checkbutton img{
    width: 16px;
    height: 16px;
    margin: 1px;
}
.check{
    background-color: brown;
    border-color: brown;
}
</style>
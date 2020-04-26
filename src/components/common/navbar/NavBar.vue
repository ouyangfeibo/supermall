<template>
  <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style>
.navbar{
    display: flex;
    line-height: 44px;
    color: white;
    /* background: lightcoral; */
    width: 100%;
}
.left,.right{
    width: 60px;
    height: 44px;
}
.center{
    flex: 1;
    height: 44px;
    text-align: center;
    
}
</style>
<template>
  <div id="app"> 
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive> 
    <tabbar> 
        <tabbaritem path='/home'>
          <img src="./assets/img/home.svg" slot="item-img" alt />
          <img src="./assets/img/home_active.cc40b6f2.svg" slot="item-img-active" alt />
          <div slot="item-font">首页</div>
        </tabbaritem>
        <tabbaritem path='/category'>
          <img src="./assets/img/category.12bedb89.svg" slot="item-img" alt />
          <img src="./assets/img/category_active.cb2cc09f.svg" slot="item-img-active" alt />
          <div slot="item-font">分类</div>
        </tabbaritem>
        <tabbaritem path='/cart'>
          <img src="./assets/img/shopcart.c68224ce.svg" slot="item-img" alt />
          <img src="./assets/img/shopcart_active.3f0a2016.svg" slot="item-img-active" alt />
          <div slot="item-font">购物车</div>
        </tabbaritem>
        <tabbaritem path='/profile'>
          <img src="./assets/img/profile.42d7cf12.svg" slot="item-img" alt />
          <img src="./assets/img/profile_active.fd66b281.svg" slot="item-img-active" alt />
          <div slot="item-font">我的</div>
        </tabbaritem> 
    </tabbar>
    
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/TabBar.vue";
import tabbaritem from "components/common/tabbar/TabBaritem.vue";

export default {
  name: "App",
  components: {
    tabbar,
    tabbaritem
  }
};
</script>

<style scoped>
#app{
  height: 100vh;
  overflow: hidden;
}
</style>

<template>
  <div class="homerecomend">
      <div v-for="(item, index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'homerecommend',
    props: {
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.homerecomend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.homerecomend div{
    flex: 1;
}
.homerecomend div img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
}
</style>
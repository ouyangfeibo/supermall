<template>
    <navbar class="nvabar">
      <div slot="left" class="navleft" @click="back"><span>&lt;</span></div>
      <div slot="center" class="navcenter">
        <div @click="currentclick(index)" class="navcenteritem" v-for="(item,index) in navitem" :key="index" :class="{active: index === currentindex}">{{item}}</div>
      </div>
  </navbar>
</template>

<script>
import Navbar from 'components/common/navbar/NavBar'

export default {
    name:'dteailnav',
    data () {
      return {
        navitem:['商品','参数','评论','推荐'],
        currentindex:0,
      }
    },
    components: {
        Navbar
    },
    methods: {
       currentclick(index){
            this.currentindex = index
            this.$emit("navclick",index)
        },
        back(){
            this.$router.back()
        }
    }

}
</script>

<style scoped>
.navcenter{
        display: flex; 
        color: #666;
    }
    .navcenteritem{
        flex: 1;
        font-size: 15px;
    }
    .navleft{
        text-align: center;
        color: lightcoral;
        font-size: 30px;
        line-height: 49px;
    }
    .active{
        color: lightcoral;
    }
    .navbar{
    box-shadow: 0px 0.3px 3px rgb(180, 178, 178);

    }
</style>
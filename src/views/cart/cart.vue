<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="center">购物车({{cartlength}})</div>
    </navbar>
     <cartlist class="cartlist"></cartlist>
     <cartbottombar></cartbottombar>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar/NavBar'
import cartlist from './childcomponents/cartlist'
import cartbottombar from './childcomponents/cartbottombar'

export default {
    name:'cart',
    components: {
      navbar,
      cartlist,
      cartbottombar
    },
    computed: {
      cartlength(){
        return this.$store.state.cartlist.length
      }
    }
}
</script>

<style scoped>
.navbar{
  background-color: lightcoral;
  color: #FFF;
}
</style>
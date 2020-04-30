<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="center">购物车({{cartlength}})</div>
    </navbar>
     <cartlist class="cartlist"></cartlist>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar/NavBar'
import cartlist from './childcomponents/cartlist'
export default {
    name:'cart',
    components: {
      navbar,
      cartlist
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
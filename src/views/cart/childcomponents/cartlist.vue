<template>
    <scroll class="content" ref="scroll">
        <div class="cartlist">
           <cartlistitem v-for="(item,index) in cartlist" :key="index" :product="item"></cartlistitem>
         </div>
    </scroll>
</template>

<script>
import scroll from '../../../components/common/betterscroll/betterscroll'
import cartlistitem from './cartlistitem'
export default {
    name:'cartlist',
    components: {
        scroll,
        cartlistitem
    },
    data () {
        return {
            cartlist:this.$store.state.cartlist
        }
    },
    activated () {
        this.$refs.scroll.refresh()
    },
    watch: {
        "this.$store.state.cartlist"(){
            this.cartlist = this.$store.state.cartlist
        }
    },
    methods: {
     
        
    }
}
</script>

<style scoped>
.content{
    height: 80.1vh;
    overflow: hidden;
}
</style>
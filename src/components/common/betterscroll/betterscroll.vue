<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'bettrtscroll',
    props: {
        probetype:{
            type:Number,
            deafult(){
                return 0
            }
        },
        pullupload:{
            type:Boolean
        },
        
    },
    data () {
        return {
            
        }
    },
    mounted() { 
        this.scroll = new BScroll(this.$refs.wrapper, {
            click:true,
            probeType:this.probetype,
            pullUpLoad:this.pullupload
        }) 
        this.scroll.on('scroll',(position) =>{
            this.$emit("positionscroll",position)
        })
        this.scroll.on('pullingUp',() =>{
            this.$emit('loadup')
        })
    },
    methods:{
        scrollTo(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll.refresh()
        },
        getScrollY() {
        return this.scroll.y
      }
    } 
}

</script>

<style scoped>

</style>
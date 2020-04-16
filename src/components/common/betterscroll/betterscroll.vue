<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import betterscroll from 'better-scroll'
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
        }
    },
    data () {
        return {
            scroll:null,

        }
    },
    mounted() { 
        this.$nextTick(() => { 
        this.scroll = new betterscroll(this.$refs.wrapper, {
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
      })
    },
    methods:{
        scrollTo(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
        },

    } 
}

</script>

<style scoped>

</style>
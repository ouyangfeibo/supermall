<template>
    <div class="navcontrol">
        <div v-for="(item,index) in titles" :key="index" class="navcontrolitem" :class="{active: index===currentindex}" @click="navcontrolclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'navcontrol',
    props: {
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentindex:0
            }
    },
    methods: {
        navcontrolclick(index){
            this.currentindex = index
            this.$emit("tabclick",index)
        }
    }
}
</script>

<style>
.navcontrol{
    display: flex;
    text-align: center;
    font-size: 15px;
    background: #fff;
    height: 44px;
    line-height: 44px;
}
.navcontrolitem{
    flex: 1;
   
}
.active{
    color:lightcoral;
}
.active span{
    padding: 4px;
    border-bottom: 2px solid lightcoral;
}
</style>
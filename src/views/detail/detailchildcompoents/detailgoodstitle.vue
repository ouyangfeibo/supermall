<template>
    <div>
        <div class="goodstitle">{{goodstitle}}</div>
        <div class="price">
            <span class="newprice">{{price}}</span>
            <span class="oldprice">{{oldprice}}</span>
            <span class="discountDesc" v-show="discountDesc">{{discountDesc}}</span>
        </div>
        <div class="columns">
            <span>{{columns[0]}}</span>
            <span class="columns1">{{columns[1]}}</span>
            <span class="columns2">{{columns[2]}}</span>
        </div>
        <div class="services">
            <span v-for="(item,index) in services" :key="index" class="servicesitem" v-show="item.icon">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </span>         
        </div>
    </div>
</template>

<script>
export default {
    name:'detailgoodstitle',
    props: {
        goodstitle:{
            type:String,
            default(){
                return null
            }
        },
        price:[String],
        oldprice:[String],
        discountDesc:[String],
        columns:{},
        services:{}
        
    },
    data () {
        return {
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
.goodstitle{
    padding: 15px 5px;
    font-size: 15px;
    color: rgb(73, 70, 70);
}
.price .newprice{
    font-size: 25px;
    color: lightcoral;
    padding-left: 10px;
}
.price .oldprice{
    font-size: 10px;
    padding-left: 10px;
    text-decoration: line-through;
}
.price .discountDesc{
    margin-left: 10px;
    vertical-align: 10px;
    font-size: 12px;
    padding: 3px;
    background-color: lightcoral;
    color: #fff;
    border-radius: 30px;
}
.columns{
    margin-top: 20px;
    display: flex;
    margin-bottom: 30px;
}
.columns span{
    flex: 1;
    font-size: 11px;
    padding-left: 15px;
}
.columns .columns1{
    padding-left: 70px;
}
.columns .columns2{
    padding-left: 90px;
}
.services{
    display: flex;
}
.services .servicesitem{
    flex: 1;
    text-align: center;
}
.services span img{
    width: 15px;
}
.services span span{
    font-size: 10px;
    vertical-align: 2.8px;
    
}
</style>
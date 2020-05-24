import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartlist:[]
    },
    mutations: {
       addcount(state,palyload){
            palyload.count++
       },
       addcart(state,palyload){
        palyload.checked = true
        state.cartlist.push(palyload)
       }
    },
    actions:{
        addcart(context,palyload){
            let oldproduct = context.state.cartlist.find((item) =>item.iid=== palyload.iid)
            if(oldproduct){
                context.commit('addcount',oldproduct)
            }else{
                context.commit('addcart',palyload)
            }
        }
    }
})

export default store
import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Cart = () => import('views/cart/cart')
const Profile = () => import('views/profile/profile')
const detail = () => import('views/detail/detail')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component: Home,
        meta:{
            title:"主页"
        }
    },
    {
        path:'/category',
        component: Category,
        meta:{
            title:"分类"
        }
    },
    {
        path:'/cart',
        component: Cart,
        meta:{
            title:"购物车"
        }
    },
    {
        path:'/profile',
        component: Profile,
       meta:{
           title:"个人"
       }
    },
    {
        path:'/detail/:iid',
        component: detail,
       meta:{
           title:"详情页"
       }
    }
]

const router = new VueRouter({
    routes,
    mode:"history",
})

    router.beforeEach((to, from, next) => {
        window.document.title = to.meta.title
        next()
    })

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Layout/Index.vue'
import Login from '../views/Login/Login.vue'
import MyMenu from '../views/Layout/MyMenu.vue'
import Content from '../views/Layout/Content.vue'
import Home from '../views/Home/index.vue'
const Goods=()=>import('../views/Goods/index.vue')
//params
const Params=()=>import('../views/Params/Params.vue')
//Advert
const Advert=()=>import('../views/Advert/Advert.vue')
//Orders
const Order=()=>import('../views/Order/index.vue')
//define OrderList  OrderBack ChangeGoods SendGoods
const OrderList=()=>import('../views/Order/OrderList/index.vue')
const OrderBack=()=>import('../views/Order/OrderBack/index.vue')
const ChangeGoods=()=>import('../views/Order/ChangeGoods/index.vue')
const SendGoods=()=>import('../views/Order/SendGoods/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Index,
    //路由元信息
    // meta:{
    //   isLogin:true
    // },
    children:[
      {
        path:'/',
        name:'Home',
        component:Home
      },
      {
        path:'/goods',
        name:'Goods',
        component:Goods,
      },
      {
        path:'/add-goods',
        name:'AddGoods',
        component:Goods
      },
      {
        path:'/goodsParams',
        name:'Params',
        component:Params,
      },
      {
        path:'/advert',
        name:'Advert',
        component:Advert
      },
      {
        path:'/orders',
        name:'Order',
        component:Order,
        redirect:'/orders/order-list',
        children:[
          {
            path:'order-list',
            component:OrderList
          },
          {
            path:'order-back',
            component:OrderBack
          },
          {
            path:'change-goods',
            component:ChangeGoods
          },
          {
            path:'send-goods',
            component:SendGoods
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router

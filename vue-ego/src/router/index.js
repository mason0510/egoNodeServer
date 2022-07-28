import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Layout/Index.vue'
import Login from '../views/Login/Login.vue'
import MyMenu from '../views/Layout/MyMenu.vue'
import Content from '../views/Layout/Content.vue'
import Home from '../views/Home/index.vue'
import store from '../store'
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
//User
const User=()=>import('../views/User/user.vue')
//GoodList Goods-verify
const GoodList=()=>import('../views/Goods/GoodsList/goods.vue')
const GoodsVerify=()=>import('../views/Goods/GoodsVerify/index.vue')
//AddGoods
const AddGoods=()=>import('../views/Goods/GoodsList/addGoods.vue')

//Specifications
const Specifications=()=>import('../views/Params/Specifications.vue')

Vue.use(VueRouter)


const routes = [
  {
    path:'',
    component:Index,
    //路由元信息
    meta:{
      isLogin:true //是否需要登陆
    },
    children:[
      {
        path:'/',
        name:'Home',
        component:Home,
      },
      {
        path:'/goods',
        name:'Goods',
        component:Goods,
        redirect: '/goods/goods-list',
        children:[
          {
            path:'/goods/goods-list',
            name:'GoodsList',
            component:GoodList
          },
          {
            path:'/goods/goods-verify',
            name:'GoodsVerify',
            component:GoodsVerify
          }
        ]
      },
      {
        path:'/add-goods',
        name:'AddGoods',
        component:AddGoods
      },
      {
        path: '/params',
        name: 'Params',
        component: Params,
        redirect: '/params/specifications',
        children: [
          {
            path: '/params/specifications',
            name: 'Specifications',
            component: Specifications
          }
        ],
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
            path:'send-goods',
            component:SendGoods
          },
          {
            path:'change-goods',
            component:ChangeGoods
          },
          {
            path:'order-back',
            component: OrderBack
          }
        ]
      },
      {
        path:'/user',
        name:'User',
        component:User
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

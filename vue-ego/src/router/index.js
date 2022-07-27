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
const Orders=()=>import('../views/Order/index.vue')

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
        // redirect:'/goods/goods-list',
        // children:[
        //   {
        //     path:'goods-list',
        //     name:'GoodsList',
        //     component:GoodsList
        //   },{
        //     path:'goods-verify',
        //     name:'GoodsVerify',
        //     component:GoodsVerify
        //   }
        // ]
      },
      {
        path:'/add-goods',
        name:'AddGoods',
        component:Goods
      },
      {
        path:'/params',
        name:'Params',
        component:Params,
        // redirect:'/params/specifications',
        // children:[
        //   {
        //     path:'specifications',
        //     name:'Specifications',
        //     component:Specifications
        //   }
        // ]
      },
      {
        path:'/advert',
        name:'Advert',
        component:Advert
      },
      // {
      //   path:'/user',
      //   name:'User',
      //   component:User
      // },
      // {
      //   path:'/order',
      //   name:'Order',
      //   component:Order,
      //   redirect:'/order/order-list',
      //   children:[
      //     {
      //       path:'order-list',
      //       component:OrderList
      //     },
      //     {
      //       path:'order-back',
      //       component:OrderBack
      //     },
      //     {
      //       path:'change-goods',
      //       component:ChangeGoods
      //     },
      //     {
      //       path:'send-goods',
      //       component:SendGoods
      //     }
      //   ]
      // }
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

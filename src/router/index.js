import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/sign/login.vue'
import register from '../components/sign/register.vue'
import HelloWorld from '../components/HelloWorld'
import cart from '../components/cart.vue'
import shop from '../components/shopping/shop.vue'
import result from '../components/result.vue'
Vue.use(VueRouter)
const routes = [
  {path:'/',name:'HelloWorld',component:HelloWorld},
  {path:'/cart',name:'cart',component:cart},
  {path:'/result',name:'result',component:result},
  {path:'/shop',name:'shop',component:shop},
  {path:'/login',name:'login',component:login},
  {path:'/register',name:'register',component:register}
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

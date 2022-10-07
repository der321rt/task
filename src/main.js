import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './lib/mui/css/mui.css'
import './lib/mui/js/mui.js'
import{Sidebar,SidebarItem}from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import SwiperCore,{Autoplay,EffectCube} from 'swiper'

SwiperCore.use([Autoplay,EffectCube])

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Sidebar);
Vue.use(SidebarItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

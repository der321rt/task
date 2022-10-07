<template>
  <div id="shop">
  <app-head></app-head><br/>
  <app-middle></app-middle>
  <app-foot></app-foot>
  </div>
</template>
<script>
import foot from './foot'
import middle from './middle'
import head from './head'
import store from '@/store'
export default {
  name:'shop',
  data(){
    return{
    }
  
  },
  components:{
    'app-foot':foot,
    'app-head':head,
    'app-middle':middle
  },
  mounted(){
    console.log(store.state.shopList)
  }
}
</script>
<style scoped>

</style>
<template>
  <div id="helloworld">
  <app-header></app-header>
  <app-body></app-body>
  <app-footer></app-footer>
  </div>
</template>
<script>
import footer from '../components/firstpage/footer'
import header from '../components/firstpage/header'
import body from '../components/firstpage/body'
export default {
  name:'helloworld',
  data(){
    return{
    }
  
  },
  components:{
    'app-footer':footer,
    'app-header':header,
    'app-body':body
  },
}
</script>
<style scoped>

</style>
<template>
<div id="foot">
  <div class="A">
   <img src="./images/footer1.png" width="220px">
    <div class="a">
    <ul>
        <li v-for="(info,index) in infos" :key="index">
             <h4 class="list-group-item-heading"><img :src="info.src" width="210px"/></h4>
          <h4>{{info.name}}</h4>
          <p>{{info.title}}</p>
          <div class="b">
          <h4>￥{{info.price}}</h4>
          <div class="c">
          <button @click="add(index)">加入🛒</button></div></div>
        </li>
        </ul>
  </div>
  </div>
</div>
</template>
<script>
import store from '@/store'
import storage from '../../../utils/storage';
import axios from 'axios'
export default {
  name:'foot',
  components:{
  },
  data(){
    return{
      infos:[],
      index:''
    }
  },
  
  mounted(){
    axios.get('/db.json')
    .then(response=>(
      this.infos=response.data,
      console.log(this.infos))
    )
    .catch(function(error){
      console.log(error);
    });
  },
  methods:{
    add(index){
        this.$store.commit('setDemoList',this.infos[index]);
      console.log(store.state.shopList)
    }
  }
}
</script>
<style scoped>
.A{
    display: flex;
    margin-left:100px;
    margin-top: 20px;
}
.a ul{
     list-style-type: none;
}
.a li{
    width: 22%;
    height: 300px;
    float: left;
    text-align: center;
    background-color: white;
    margin: 10px;
}
.b{
display: flex;
}
.b h4{
  float: left;
  margin-left: 20px;
}
.c{
  margin-left: 115px;
  margin-top: -10px;

}

</style>

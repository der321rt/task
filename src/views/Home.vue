<template>
    <div class="cart">
      <div class="login">
        <a></a><a></a>
        <router-link :to="{path:'/'}">联想首页</router-link>
        <a>企业购</a><a>政教及大企业</a><a>服务</a>
        <a>品牌</a><a>下载App</a><a></a><a></a><a></a><a></a><a></a><a></a><a>会员</a><a>社区</a><a>购买</a>
       </div>
       <div class="a">
         <h2 class="mui-btn mui-btn-danger">Lenovo</h2>
         <h3>购物车</h3>
         <div class="mui-input-row mui-search">
    <input type="search" class="mui-input-clear" placeholder="">
       </div>
     	<button>搜索</button>
       </div>
       <div class="b">
       <h3>全部商品</h3><h4>降价商品0</h4><h4>库存紧张0</h4>
       <p>已选商品（不含运费</p><h1>{{total}}</h1>
     <button >结算</button>

       </div>
       <div class="c">
         <thead>
         <ul>
         <li><button>全选</button></li>
           <li>商品信息</li>
           <li></li><li></li><li></li>
           <li>单价</li>
           <li>数量</li>
           <li>金额</li>
           <li>操作</li>
         </ul>
         </thead>
         <tbody>
               <tr v-for="(info,index) in showList" :key="index">
              <td> <img :src="info.src" width="70px"/></td>
             <td>{{info.name}}</td>
             <td>{{info.price}}</td>
           <td><button v-on:click="jian(index)" v-bind:disabled="info.count<=1">-</button>{{ info.count}}<button v-on:click="jia(index)">+</button></td>
           <td>{{sum}}</td>
           <td><a href="javascript:;" class="product-delete" @click='deleteOneProduct(index)'>删除</a></td>
       </tr>
         </tbody>
       </div>
      </div>
</template>
<script>
import store from '../store'
export default {
    name:'cart',
  created() {      
      // storage.set('demoList', JSON.stringify(this.demooList));
      //   this.$store.commit('setDemoList', storage.get('demoList'));
      //   this.showList = JSON.parse(this.$store.getters.getDemoList);
    },
    data(){
        return{
            total:'0.00', 
            showList:[],
            showsList:[],
             checked: false

        }
    },
    methods:{
               jian(index){
                   this.showList[index].count--;
               },
               jia(index){
                   this.showList[index].count++;

               },
           },
            computed:{
            sum:function(){
                   return this.price*this.count;
               }
           },
    mounted(){
      
      this.showList=store.state.shopList
      console.log(this.showList)
      // this.showList = JSON.parse(JSON.stringify(this.showList))
      // var i
      // for(i=0;i<this.showList.length;i++){
      //   if(i%2==1){
      //     this.showsList[parseInt(i/2)] = this.showList[i]
      //   }
        
      // }
      // console.log(typeof this.showsList)
      // var j
      // for(j=0;j<this.showsList.length;j++){
      //   this.showsList[j] = JSON.parse(this.showsList[j])
      // }
      // this.showsList = [
      //   {
      //     id:1,
      //     price:1,
      //     name:1.1
      //   }
      // ]
      // console.log(this.showsList)
      
      
    }
    
}
</script>
<style scoped>
.cart{
  background-color: white;
}
.login{
text-align: center;
 display:flex ;
 height: 50px;
 margin-top: -20px;
 font-size: 14px;
 background-color: #f0f0f4;
}
.login a{
  margin:30px;
  color:dimgrey;
}
.a{
  display: flex;
 background-color: white;
}
.a h2{
  margin-left: 200px;
  background-color: coral;
  height: 40px;
  font-size: 20px;
  width: 100px;
  margin-top: 15px;
}
.a h3{
  margin-left: 10px;
  margin-top: 23px;
}
.mui-search{
  margin-top: 20px;
  width: 400px;
  margin-left: 600px;
  height: 60px;
}
.a button{
  margin-top: 18px;
  height: 40px;
  background-color: red;
  color: white;
}
.b{
  background-color: white;
  margin-top: -10px;
  display: flex;
}
.b h3{
color: red;
font-size: 18px;
margin-left: 200px;
margin-top: 20px;
}
.b h4{
  margin-left: 100px;
  margin-top: 20px;
}
.b p{
  margin-left: 600px;
  margin-top: 20px;
}
.b h1{
color: red;
font-size: 13px;
font-weight: 900;
margin: 23px;
}
.b button{
  color: red;
  height: 30px;
  font-weight: 800;
  margin-top: 15px;}
  .c{
    height: 1000px;
    margin-left: 200px;
    width: 1000px;
  }
  .c  thead li{
    float: left;
    margin: 40px;
  }
   tbody{
    float: left;
    margin-left: 10px;
    text-align: center;
  }


  tbody li{
    float: left;
    margin:4px;
    width: 100px;
    font-size: 13px;
  }
</style>
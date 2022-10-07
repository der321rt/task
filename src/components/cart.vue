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
       <p>已选商品（不含运费)</p><h1>{{total}}</h1>
       <div class="B">
<button @click="jiesuan">结算</button></div>

       </div>
       <div class="c">
         <thead>
        <tr>
          <td><label for="selectAll">全选</label>&nbsp;
          <input id="selectAll" type="checkbox" v-model="flagAll" @change="selAll"></td>
          <td></td>
          <td>商品信息</td>
          <td></td>
          <td>单价</td>
          <td>数量</td>
          <td>金额</td>
          <td>操作</td>
        </tr>
         </thead>
         <tbody>
               <tr v-for="(info,index) in showList" :key="index">
                 <td> <input type="checkbox" v-model="info.isSelected" @change="selone" name="" id="" width="10px"></td>
                 <td></td>
              <td> <img :src="info.src" width="70px"/>{{info.name}}</td><td></td>
             <td>{{info.price}}</td>
           <td><button v-on:click="jian(index)" v-bind:disabled="info.count<=1">-</button>{{ info.count}}<button v-on:click="jia(index)">+</button></td>
           <td>{{info.sum}}</td>
           <td><a @click='remove(index)'>删除</a></td>
       </tr>
         </tbody>
       </div>
       <app-footer></app-footer>
      </div>
</template>
<script>
import store from '../store'
import footer from '../components/firstpage/footer'
import storage from '../../utils/storage'
export default {
    name:'cart',
  created() {      
      // storage.set('demoList', JSON.stringify(this.demooList));
      //   this.$store.commit('setDemoList', storage.get('demoList'));
      //   this.showList = JSON.parse(this.$store.getters.getDemoList);
    },
    data(){
        return{
            showList:[],
             sum:0,
             totalPrice:0,
             flagAll:false

        }
    },
    components:{
    'app-footer':footer,
    },
    methods:{
      jiesuan(){
        this.$store.commit("saveshop",this.showList)
        this.$router.push('/result')
      },
               jian(index){
                   this.showList[index].count--;
                  // 小计
            this.showList[index].sum = this.showList[index].count * this.showList[index].price;
            this.total();
               },
               jia(index){
                   this.showList[index].count++;
          this.showList[index].sum = this.showList[index].count * this.showList[index].price;
            this.total();
               },
                 // 实现删除功能
        remove(index){
            this.showList.splice(index,1);
        },
        selone(){
            var fff=1; //立个flag
            this.showList.forEach(info=>{
                if(info.isSelected===false){
                    this.flagAll=false;
                    fff=0;
                }
            });
            if(fff===1){
                this.flagAll=true
            }
        },
         selAll(){ //实现全选功能
            this.showList.forEach(element=>{
                element.isSelected=this.flagAll;
            });
        },
        },
           
            computed:{
            total(){
            for(var i=0;i<this.showList.length;i++){
                if(this.showList[i].isSelected === true){
                    this.totalPrice += this.showList[i].sum
                }
            }
            return this.totalPrice
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
  margin-left: 180px;
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
  margin-left: 500px;
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
margin-left: 100px;
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
  color:red;
  height: 30px;
  font-weight: 800;
  margin-top: 15px;}
  .c{
    height: 800px;  
    margin-left: 150px;
    width: 1200px;
    border: 1px lightgray solid;
    text-align: center;
  }
  .c thead{
    display: flex;
     background-color:#f0f0f4 ;
     height: 40px;
  }
  .c   thead input{
     width: 20px;
     height: 20px;
  }
  .c tbody input{
    width: 20px;
    height: 20px;
    margin-left: 30px;
  }
  .c a{
    color: black;
  }
  .c  thead td{
    float: left;
    margin: 55px;
    margin-top: 0px;
   
  }
   tbody{
    float: left;
  }


  tbody td{
    float: left;
    margin:31px;
    font-size: 13px;
   height: 100px;
   width: 80px;
  }
</style>
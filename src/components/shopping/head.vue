<template>
    <div class="shop">
      <img src="./images/head.png" width="100%">
      <div class="login">
        <a></a><a></a>
        <a> <router-link :to="{path:'/'}">联想首页</router-link></a>
        <a>企业购</a><a>政教及大企业</a><a>服务</a>
        <a>品牌</a><a>下载App</a><a></a><a></a><a></a><a></a><a></a><a></a><a>会员</a><a>社区</a><a>购买</a>
      </div>   
      <div class="total">
        <br/>
       <div class="cart">
     <h1 class="mui-btn mui-btn-danger">Lenovo</h1>
     <div class="title">
      <input type="text" size="19"></div>
      <div class="a">
     	<button>搜索</button>
       </div>
       <div class="b">
          <router-link :to="{path:'/cart'}"><button>我的购物车🛒</button></router-link></div>
       </div>
        <div class="head">
      <a>新品</a>
      <a>定制</a>
      <a>合伙人</a>
      <a>以旧换新</a>
      <a>0元试用</a>
      <a>学生</a>
      <a>直播</a>
      <a>企业购</a>
      <a>0元购</a>
    </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'shop',
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.shop{
  margin-top: -10px;
}
.login{
  text-align: center;
 display:flex ;
 height: 50px;
 font-size: 15PX;
 
 
}
.total{
  background-color: white;
  margin-top: -12px;
}
.login a{
  margin:30px;
  color:dimgrey;
  margin-top: 12px;
}

.head{
  display:flex;
  text-align:center;
  margin-left: 400px;
}
 .mui-btn-danger{
   font-size: 27px;
   margin-left: 100px;
   height: 50px;
}
.head a{
       margin:25px;
       color: black;
        font-size:20px;
}
.cart{
    margin-top: 15px;
    text-align: center;
    display: flex;
    margin-left: 130px;

}
.title{
  margin-top: 15px;
   width: 600px;
   margin-left: 50px;
   color:black;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}
.a button{
  width: 100px;
  height: 40px;
  color:white;
  background-color: red;
  margin-top: 15px;
  font-size: 16px;
}
.b{
  margin-top: 20px;
  margin-left: 90px;

}

</style>
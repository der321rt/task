<template>
    <div class="shop">
    <h1 class="mui-btn mui-btn-danger">Lenovo</h1>
    <h2>联想</h2>
      <router-link :to="{path:'/shop'}">商城</router-link>
      <a>企业</a>
      <a>品牌</a>
      <a>服务</a><a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a>
      <h4>会员</h4>
      <h4>购买</h4>
      <h4>🔍</h4>
     <router-link :to="{path:'/login'}">登录</router-link>
      <router-link :to="{path:'/register'}">注册</router-link>
      <router-link :to="{path:'/cart'}">🛒</router-link>
    </div>
</template>
<script>
export default {
  name:'app',
  data(){
    return{
    }
  
  },
}
</script>
<style scoped>
 .shop{
       display:flex;
       text-align:center;
       margin-top: 15px;
}
 .mui-btn-danger{
   font-size: 27px;
   margin-left: 5px;
   height: 50px;

}
.shop h2{
  font-size: 27px;
  width: 100px;
  margin-top: 18px;


}
.shop a{
       margin:25px;
       color: black;
        font-size:20px;
}
.shop h4{
       margin:25px;
       color:gray;
       font-size: 20px;
}
</style>

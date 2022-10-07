<template>
<div id="login">
        <div class="background">
          <img src="./images/login.jpg" width="100%" height="100%"></div>
    <div class="front">
		<div id="login-box">
			<h1>Login</h1>
			<div class="input-box">
          <span v-if="isUser">
             <label for="username"><span class="mui-icon mui-icon-contact">:</span></label>
    	       <input type="text" id="username"  v-model="number1" placeholder="请输入用户名/手机号" key="username">
             <span class="mui-icon mui-icon-locked">:</span>
				      <input type="password" v-model="password1" placeholder="用户密码">
          </span>
          <span v-else>
              <label for="email"><span class="mui-icon mui-icon-email">:</span></label>
              <input type="text" id="email" placeholder="请输入邮箱" key="email">
              <span class="mui-icon mui-icon-locked">:</span>
              <input type="password" placeholder="邮箱密码">
        </span>
        <br/><br/><br/>
        <input type="checkbox">登录即表示您同意账户<a href="https://shop.lenovo.com.cn/investor/html/legal.html?_ga=2.48183527.1912142940.1638696805-544719054.1638330924">使用条款</a>
        和<a href="https://www.lenovo.com.cn/statement/privacy.html?_ga=2.149828726.1912142940.1638696805-544719054.1638330924">隐私政策</a>
        <!-- 两个key的值不同，不会复用  -->
			</div>
      <div class="a">
			<button @click="add1">Sign in</button><br/></div>
      <div class="b">
      <button @click="isUser = !isUser">切换登陆方式</button>
      </div>
      <div class="c">
        <button @click="add2">企业会员注册</button>
      </div>
		</div>
		</div>
        </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            isUser:true,
            number1:'',
            email1:'',
            password1:'',
            password2:'',
        }
    },
    methods:{
      add1(){
       if(this.number1.length<11 || this.number1.length>11){
         alert("请输入正确的手机号!");
         return;
       }
       else if(this.password1.length<6 || this.password1.length>12){
          alert("密码长度应该在6~12位，请重新输入")
          return;
        }
        else{
          this.$router.push({path:'/shop'})
        }
      },
      add2(){
        this.$router.push('/register')
      },
    }
}
</script>
<style scoped>
.background {
  width:100%;
  height:100%;
  z-index: -1;
  position: absolute;
  margin-top: -10px;
}

.front {
  z-index: 1;
  position: relative;
   /*调成absolute时没有居中而是靠左，所以我试了试改成relative了*/
}
#login-box{
	background-color: #00000068;
	border-radius: 10px;
	text-align: center;
	margin: 90px auto;
  margin-top: 10px;
	width: 400px;
	height: 450px;
}
#login-box h1{
	padding-top: 60px;
	color: #ffffff;
}
#login-box a{
  color:silver;
  font-size: 16px;
}

#login-box .input-box{
	margin-top:1px;
  margin-left: 30px;
  margin-right: 30px;
}
#login-box .input-box input{
	border: none;
	background: none;
	border-bottom: #FFFFFF 2px solid;
	padding: 5px 10px;
	outline: none;
	color: #FFFFFF;
}
#login-box .a button{
	line-height:30px;
	margin-top: 40px;
	width: 300px;
	height: 40px;
  font-size: 17px;
	border-radius:19px ;
	outline: none;
	border: none;
	background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
	color: #FFFFFF;
}
#login-box .b button{
  color: #000;
  margin:12px;
  background-color:thistle;
  border-radius: 9px;
  float: left;

}
#login-box .c button{
  color: #000;
  margin:12px;
  background-color:thistle;
  border-radius: 9px;
  float: right;
}

#login-box button:hover{
	background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
#login-box .input-box span{
	color: #FFFFFF;
  float: left;
}


</style>
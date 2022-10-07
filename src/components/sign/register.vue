<template>
<div id="register">
        <div class="background">
          <img src="./images/register.jpg" width="100%" height="100%"></div>
    <div class="front">
		<div id="register-box"><br/><br/>
			 <h1>Register</h1>
             	<div class="input-box">
      <input type="text" id="username" v-model="phone" placeholder="输入手机号"> <br/> 
      <input type="text" id="password"  v-model="password1" placeholder="密码由8-20位字母，数字，和符号组合"> <br/>
      <input type="text" id="contact"  v-model="password2" placeholder="再次输入密码"><br/>
       <div class="C" :style="`width:${width}; height:${height};float:${float}`" @click="refreshCode">
    <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
      </div>
        <input type="text" placeholder="请您输入验证码" v-model="number">
       <input type="checkbox">登录即表示您同意账户<a href="https://shop.lenovo.com.cn/investor/html/legal.html?_ga=2.48183527.1912142940.1638696805-544719054.1638330924">使用条款</a>
        和<a href="https://www.lenovo.com.cn/statement/privacy.html?_ga=2.149828726.1912142940.1638696805-544719054.1638330924">隐私政策</a>
    <div class="a">
			<button @click="add">立即注册</button><br/></div>
      <div class="b">
      <button @click="add1">已有帐号，点此登录</button>
      </div>
      <div class="c">
        <button @click="add2">企业会员注册</button>
      </div>
          </div>
		</div>
		</div>
</div>
</template>
<script>
export default {
    name:'register',
     props: {
    width: {
      type: String,
      default: '150px'
    },
    float:{
        type:String,
        default:'right'
    },
    height: {
      type: String,
      default: '0px'
    },
    length: {
      type: Number,
      default: 4
    }
  },
    data(){
        return{
             codeList: [],
             phone:'',
             password1:'',
             password2:'',
             number:'',

    }
    },
    mounted () {
    this.createdCode()
  },
    methods:{
      add(){
        if(this.phone.length<11 || this.phone.length>11){
          alert("请输入正确的手机号！")
          return;
        }
        else if(this.password1.length<8 || this.password1.length>20){
          alert("密码长度应该在8~20位，请重新输入")
          return;
        }
        else if(this.password1!==this.password2){
          alert("两次密码输入不一致，请重新输入")
          return;
        }
        else if(this.number.length>4 || this.number.length<4){
          alert("请输入正确的验证码")
        }
        else{
          this.$router.push({path:'/login'})
        }
      },
      add1(){
        this.$router.push('/login')
      },
      add2(){
          this.$router.push('/register')
      },
        refreshCode () {
      this.createdCode()
    },

    createdCode () {
      const len = this.length
      const codeList = []
      const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      const charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        const rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      // 指向
      this.codeList = codeList
      // 将当前数据派发出去
      this.$emit('update:value', codeList.map(item => item.code).join(''))
    },
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
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
#register-box{
	background-color: #00000068;
	border-radius: 10px;
	text-align: center;
	margin: 90px auto;
  margin-top: 10px;
	width: 400px;
	height: 550px;
}
#regiser-box h1{
	padding-top: 60px;
	color: w;
}
#register-box a{
  color:silver;
  font-size: 16px;
}

#register-box .input-box{
	margin-top:1px;
  margin-left: 30px;
  margin-right: 30px;

}
#register-box .input-box .A {
    width: 100%;
    float: left; 
}
#register-box .input-box input{
	border: none;
	background: none;
	border-bottom: #FFFFFF 2px solid;
	padding: 5px 10px;
	outline: none;
	color: #FFFFFF;
}
#register-box .a button{
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
#register-box .b button{
  color: #000;
  margin-top:18px;
  background-color:thistle;
  border-radius: 9px;
  float: left;

}
#register-box .c button{
  color: #000;
  margin-top:18px;
 background-color:thistle;
  border-radius: 9px;
  float: right;
}

#register-box button:hover{
	background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
#register-box .input-box span{
	color: #FFFFFF;
  float: left;
}
</style>
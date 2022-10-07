<template>
    <div class="result">
        <img src="../assets/result1.png" width="600px">
        <br/><br/>
        <h3>选择收货地址</h3>
            <ul>
        <li v-for="(shop,index) in shoplist" :key="index">
            <h5>{{shop.name}}</h5>
            <h5>{{shop.phone}}</h5>
            <h5>{{shop.web}}</h5>
        </li>
            </ul>
            <div class="a">
    <div class="c">
                <br/><br/>
            <h4>确认订单信息</h4>
            <br/>
            <thead>
                <tr>
             <td>商品属性</td>
          <td></td>
          <td>单价</td>
          <td>数量</td>
          <td>小计</td>
        </tr>
         </thead>
         <tbody>
              <td><img src="https://p4.lefile.cn/product/adminweb/2021/12/12/NKmFMk5qSlpO1608NKoB5Lio9-5494.jpg" width="90px">小新 Air 14 20201酷睿版</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>4999</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>2</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>9998</td>
         </tbody>
<h3>总价：9998</h3>
    </div>
    <button @click="check">提交订单</button>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shoplist:[
                {name:"于可欣", web:"河南濮阳范县", phone:"183********"},
                {name:"侯文斐", web:"山东青岛胶州福州南路青岛工学院",phone:"156********"},
                {name:"于可欣 ", web:"山东青岛胶州福州南路青岛工学院",phone:" 183********"},
                {name:"侯文斐", web:"内蒙古呼和浩特",phone:"156********"}
                
            ],
        }
    },
    methods:{
        check(){
            alert("订单提交成功");
            return
        }
    }
}
</script>
<style scoped>
.result{
    background-color: white;
}
.result img{
    margin-left: 500px;
}
.result h3{
    font-size: 16px;
    margin-left: -900px;
}
.result h4{
font-size: 13px;
}
.result h5{
    color: black;
    font-size: 13px;
}
.result ul{
    display: flex;
    margin-left: 300px;
}
.result li{
    width: 170px;
    text-align: center;
    height: 69px;
    margin: 14px;
    border: 1px solid lightgray;
    background-color:ghostwhite;
}
.a{
    background-color: white;
    height: 800px;
    border: 1px solid lightgrey;
}
.c{
    height: 380px;
    width: 1000px;
    border: 1px solid lightgray;
    margin-left: 270px;
}
.c h4{
    margin-left: -880px ;
    font-size: 16px;
}
 .c thead{
    display: flex;
     height: 40px;
     margin-left: 70px;
  }
  .c  thead td{
    float: left;
    margin: 70px;
    margin-top: 10px;
   
  }
   .c tbody{
    display: flex;
    font-size: 13px;
    margin-left: -420px;
  }
  .c tbody td{
    margin:50px;
  }
  .c h3{
      color: red;
      margin-left: 700px;
      margin-top: 30px;
  }
  .a button{
      color:white;
      background-color: tomato;
      font-size: 16px;
      margin-left: 900px;
      margin-top: 10px;
  }
</style>

（1） 首页
主页功能：
（1）主页顶部是登陆注册以及购物车和商城的跳转导航，顶部左侧是logo，点击登陆跳转登陆页面，点击注册跳转注册页面，点击商城跳转商城页面，点击购物车跳转购物车页面。
（2）用户登陆成功后，页面自动跳转进入商城。
（3）当用户注册账号成功后，自动跳转到登陆页面，登陆成功跳转商城。
（4）主页中间是轮播图，可以点击左右箭头更换图片，也可以随时间自己变动。
（5）主页底部是责任声明
 ![image](https://user-images.githubusercontent.com/95601433/194507684-f383d913-f701-4e8f-a0be-ae14f39be7f9.png)
图1-2首页

![image](https://user-images.githubusercontent.com/95601433/194507742-38cb26e7-e3fd-48ec-9df6-51de6d78b942.png)
图1-3首页
(2)	商城页面
商城功能：
（1）页面头部上方是一张图片，下面是跳转到首页页面的按钮，左侧是logo商标，中间是搜索框，可以点击，右边的是购物车，点击跳转购物车页面。
（2）页面middle中间部分左侧是导航栏和下拉菜单，鼠标放在导航栏的位置可以弹出商品类型框，同时鼠标移动到导航栏和下拉菜单上颜色会发生变化，可以更加明显。
（3）底部是商品栏，包含的商品图片，商品名称，商品介绍，以及商品价格，通过axios请求本地json数据，每个商品右下角有加入购物车按钮，可以直接加入购物车。
 ![image](https://user-images.githubusercontent.com/95601433/194507866-3434e35c-47cd-4626-a622-f998f4cf8b61.png)
图2-1商城页面
 
 ![image](https://user-images.githubusercontent.com/95601433/194507935-aad0715a-7d3f-4ce6-aadc-e09047e5f5d3.png)
图2-2商城页面
(3)	登录页面
登录功能：
（1）用户可以在账号输入框内输入账号
（2）用户可以在密码输入框内输入密码
当用户账号输入框为空时，点击登录按钮会出现弹窗显示“输入正确手机号码”，当用户账号输入错误时，点击登录按钮会出现弹窗显示“输入正确手机号码”，当密码输入框为空时，点击登陆框会出现弹窗显示“密码长度应该在6~12位，请重新输入”
 ![image](https://user-images.githubusercontent.com/95601433/194508020-b2847cfa-8e28-44c5-9fd9-cf77d2fcd270.png)
图片3-1登陆页面

 ![image](https://user-images.githubusercontent.com/95601433/194508037-ccfc0e5e-8de3-49ae-b67e-ea67630f617f.png)
图片3-2登录页面

 ![image](https://user-images.githubusercontent.com/95601433/194508052-68f7216b-1785-4abe-b122-06b0a02a09ae.png)
图片3-3登录页面

 ![image](https://user-images.githubusercontent.com/95601433/194508191-8cb35c18-1e41-4f4f-93aa-b9661dae4bf1.png)
图片3-4登录页面
(4)	注册页面
注册功能：
（1）用户可以在手机号输入框内输入手机号
（2）用户可以在密码输入框内输入密码
（3）用户需要在确认密码输入框内输入相同的密码
（4）当用户手机号码输入错误时，点击提交按钮会出现弹窗显示“请输入正确的手机号码”，当密码输入长度错误时，点击提交按钮会出现弹窗提示“密码长度应该在8~20位，请重新输入”，当确认密码输入框内与之前密码输入不同时点击提交按钮会出现弹窗显示“两次密码输入不一致，请重新输入”，当输入验证码不对时会弹窗显示“请输入正确的验证码”出当输入正确时点击提交按钮，即可跳转至登录页面
 ![image](https://user-images.githubusercontent.com/95601433/194508208-8e4df651-cd7b-4108-895b-257302c4ea5f.png)

图片4-1注册页面
 ![image](https://user-images.githubusercontent.com/95601433/194508239-0e02b156-758c-49ec-a4b0-9fc683b9208c.png)

                        图片4-2注册页面
 ![image](https://user-images.githubusercontent.com/95601433/194508112-1f350e81-d791-4833-8c38-555a9e0130e8.png)

                         图片4-3注册页面
 ![image](https://user-images.githubusercontent.com/95601433/194508264-ec981fb1-76e0-4b23-9b66-0b45dab8191e.png)

                           图片4-4注册页面
 ![image](https://user-images.githubusercontent.com/95601433/194508286-ec661333-6be5-42af-8164-f1a165dc2ae0.png)

                                    图片4-5注册页面
(5)	购物车页面
购物车功能：
（1）购物车页面的顶部按钮可以跳转到该商城的首页，头部的左侧为logo，右侧的搜索框可以进行点击。
（2）在商城页面点击商品下方购物车按钮即可将商品添加入购物车
（3）点击购物车内加号与减号按钮，即可增加或减少商品数量
（4）点击全选按钮即可将购物车内商品价格全部相加，得到商品价格总和
（5）点击购物车内删除按钮，即可删除已添加入购物车的商品
（6）点击购物车内去结算按钮，即可跳转入结算页面
 ![image](https://user-images.githubusercontent.com/95601433/194508330-4ee0e987-3cfa-49c5-9883-9fe05fa3f5bd.png)

图片5-1购物车页面
![image](https://user-images.githubusercontent.com/95601433/194508349-3dda0a74-a1ac-4624-b49d-09c5b8f3cdf6.png)

 
图片5-2购物车页面

(6)	结算页面
   结算功能：
（1）计算页面右上角有商品的流程和最终的评价
（2）页面内有收获人的联系方式和名字
（3）获取购物车内用户购买的商品并添加到结算页面当中，结算页面会显示当前总金额
（4）点击提交订单按钮页面会弹出订单提交成功的窗口
 ![image](https://user-images.githubusercontent.com/95601433/194508389-6d610bb9-d8af-49ac-88ce-412b7867bde3.png)
图片6-1结算页面

![image](https://user-images.githubusercontent.com/95601433/194508455-b09f8eac-5286-4624-b973-a50bfc96f6a8.png)
图片6-2结算页面
 

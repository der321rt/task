<template>
    <div id="body">
<swiper :options="swiperOption" ref="mySwiper" style="min-width:1200px">
<swiper-slide class="swiper-slide swiper-container-3d" v-for="(banner,index) in bannerList" :key="index" style="position:relative;overflow:hidden;width:100%;height:600px;">
<img :src="banner.img" style="position:absolute;top:0;left:50%;width:1920px;height:600px;margin-left:-960px;" />
</swiper-slide>
<!-- 分页器 -->
<div class="swiper-pagination" slot="pagination"></div>
<!-- 左右箭头 -->
<!-- @click="prev" -->
<div class="swiper-button-prev" slot="button-prev"></div>
<!-- @click="next" -->
<div class="swiper-button-next" slot="button-next"></div>

</swiper>
    </div>
</template>
<script>
export default {
 components: {},
props: {},
data() {
return {
swiperOption: {
loop: true, //是否循环轮播
speed: 1000, //切换速度
observer: true, //修改swiper自己或子元素时，自动初始化swiper
observeParents: true, //修改swiper的父元素时，自动初始化swiper
//自动轮播
autoplay: {
delay: 2000,
disableOnInteraction: false,
},
//设置slider容器能够同时显示的slides数量
slidesPerView: 1,
//左右切换
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
//分页器
pagination: {
el: ".swiper-pagination",
clickable: true, // 允许点击小圆点跳转
},
//设置轮播样式,此处为3d轮播效果
effect: "coverflow",
coverflowEffect: {
rotate: 30, // 旋转的角度
stretch: 10, // 拉伸 图片间左右的间距和密集度
depth: 60, // 深度 切换图片间上下的间距和密集度
modifier: 2, // 修正值 该值越大前面的效果越明显
slideShadows: true, // 页面阴影效果
},

},

bannerList: [

{img: "https://p2.lefile.cn/fes/cms/2021/11/30/qbjshhwcaw2z633gvrothfgpywgzuo845557.jpg"},
{img: "https://p4.lefile.cn/fes/cms/2021/12/06/b3uyzz28pic85i6xvaxdk5da0tfz1c221012.jpg"},
{img: "https://p3.lefile.cn/fes/cms/2021/12/01/fpof0eqmqnivz7wyed0wawmj2f0ld0616907.jpg"},
{img: "https://p3.lefile.cn/fes/cms/2021/12/13/79gyg9ixytzm3f6s9zf2s1gp57gzb3158347.jpg"},
{img: "https://p4.lefile.cn/fes/cms/2021/12/06/b3uyzz28pic85i6xvaxdk5da0tfz1c221012.jpg"},
{img: "https://p1.lefile.cn/fes/cms/2021/12/13/p2cj09zcnesh71u3vgfkouiw2sgf68336834.jpg"},


],

};

},
   
}
</script>
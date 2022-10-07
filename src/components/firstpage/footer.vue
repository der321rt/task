<template>
    <div class="footer">
      <div class="clearfix"></div>
      <div class="icon-row">
        <div class="footer-icon">
          <h5 class="footer-icon-child"></h5>
          <span class="footer-icon-text">关于联想</span>
        </div>
        <div class="footer-icon">
          <h5 class="footer-icon-child footer-icon-child-2"></h5>
          <span class="footer-icon-text">联想商城</span>
        </div>
        <div class="footer-icon">
          <h5 class="footer-icon-child footer-icon-child-3"></h5>
          <span class="footer-icon-text">联想服务</span>
        </div>
        <div class="footer-icon">
          <h5 class="footer-icon-child footer-icon-child-4"></h5>
          <span class="footer-icon-text">联想服务</span>
        </div>
      </div>
      <div class="service-intro">
        <div class="servece-type">
          <div class="servece-type-info" v-for="(guide, index) in guideArr" :key="index">
            <ul>
              <li v-for="(item, index) in guide" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="friend-link">
          <div class="friend-link-item">
            <ul>
              <li v-for="(link, index) in moreLink" :key="index">
                <span :class="[linkItemClass, {'link-last-item': index === 9}]">{{link}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="copyright">
          <p>Lenovo © 2021 by xiaoyu+hou  <span>版权所有：1998-2021 联想集团 本项目仅供学习参考</span></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      linkItemClass: 'link-item',
      guideArr: [
        [ '投资者关系', '加入我们', '联系我们', '参观联想', '销售网点查询', '服务网点查询', '环境信息' ],
        [ '今日秒杀', '联想合伙人', '私人定制', '以旧换新', '积分商城' ],
        [ '驱动与软件下载', '热门解决方案', '24小时智能客服', '保修配置查询','服务政策查询','上门快修'],
        [ '联想创投', '聚享汇', '联想电脑管家', '联想超融合', '联想研究院', '联想FileZ']
      ],
      moreLink: [
        '官网服务热线：400 166 6666', '个人及家庭产品：400 990 8888', '中小型企业产品：400 100 6000',
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 390px;
  margin-top: 30px;
  background-color: #eaeaea;
}
.icon-row {
  margin: 20px auto;
  padding-top: 8px;
  width: 1000px;
  height: 64px;
}
.footer-icon {
  margin-left: 17px;
  margin-right: 17px;
  float: left;
}
.footer-icon-child {
  margin-top: 10px;
  overflow: hidden;
  position: absolute;
  width: 36px;
  height: 42px;
  text-indent: -999px;
}
.footer-icon-child-2 {
  background-position: 0 -43px;
}
.footer-icon-child-3 {
  background-position: 0 -86px;
}
.footer-icon-child-4 {
  background-position: 0 -129px;
}
.footer-icon-text {
  margin-left: 120px;
  color: #444444;
  font-size: 18px;
  font-weight: bold;
  line-height: 64px;
}
.service-intro {
  width: 100%;
  border-top: 1px solid #b2dfdb;
}
.servece-type {
  margin: 15px auto;
  height: 200px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.servece-type-info {
  color: #666666;
}
.servece-type-info ul {
  list-style: none;
}
.servece-type-info li {
  font-size: 14px;
  cursor: pointer;
  line-height: 26px;
}
.servece-type-info li:first-child {
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
}
.friend-link {
  display: flex;
  align-items: center;
  width: 908px;
  height: 30px;
  margin: 0px auto;
  color: #666;
  border-top: 1px solid #b2dfdb;
}
.friend-link-item {
  margin: 0px auto;
}
.friend-link-item ul {
  list-style: none;
}
.friend-link-item li {
  padding: 5px 0px;
  float: left;
}
.link-item {
  padding: 0px 8px;
  cursor: pointer;
  border-right: 1px solid #ccc;
}
.link-last-item {
  border: none;
}
.copyright {
  width: 100%;
  color: #666;
  line-height: 30px;
  text-align: center;
}
.copyright a{
  color: #232323;
  font-size: 20px;
}
/*****************************底 部 结 束*****************************/
</style>
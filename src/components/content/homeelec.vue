<template>
	<div id="homeelec" name="homeelec">
		<div id="homeelec" class="home-brick-box home-brick-row-2-box xm-plain-box J_itemBox J_brickBox is-visible loaded">
            <div class="box-hd">
                <h2 class="title">家电</h2>
                <div class="more">
                	<el-menu :default-active="activeIndex" class="tab-list" mode="horizontal">
					  <el-menu-item index="1">热门</el-menu-item>
					  <el-menu-item index="2">电视影音</el-menu-item>
					  <el-menu-item index="3">电脑</el-menu-item>
					  <el-menu-item index="4">家居</el-menu-item>
					</el-menu>
                </div>
            </div>
            <div class="row clearfix">
            	<div class="brick-promo-list">
            		<simg class="brick-item-l"/>
            	</div>
            	<div class="homeelec-content">
            		<brick />
            		<brick />
            		<brick />
            		<brick />
            		<brick />
            		<brick />
            		<brick />
            		<brick />
            	</div>
            </div>
        </div>
	</div>
</template>
<script >
import Simg from '../simg'
import Brick from '../brick'
export default {
  name: 'homeelec',
  components: {
    Simg,
    Brick
  },
  data () {
    return {
      activeIndex: '1',
    }
  },
  methods: {
	  handleSelect(key, keyPath) {
	    console.log(key, keyPath);
	  }
	}
}
</script>
<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-menu{
	background: transparent;
}
.home-brick-row-2-box {
    height: 686px;
}
.home-brick-box {
    margin-bottom: 8px;
}
.xm-plain-box .box-hd {
    position: relative;
    height: 58px;
    -webkit-font-smoothing: antialiased;
}
.xm-plain-box .box-hd .title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
}
.xm-plain-box .box-hd .more {
    position: absolute;
    top: 0;
    right: 0;
}
.xm-plain-box .box-hd .more .tab-list {
    margin: 0;
    list-style-type: none;
    font-size: 16px;
}
.xm-plain-box .box-hd .more .tab-list .el-menu-item:hover, .xm-plain-box .box-hd .more .tab-list .el-menu-item.tab-active {
    color: #ff6700;
    border-bottom: 2px solid #ff6700;
}
.xm-plain-box .box-hd .more .tab-list .el-menu-item {
    display: inline-block;
    padding: 0;
    margin: 0 15px;
    height: 32px;
    line-height: 32px;
    color: #424242;
    border-bottom: 2px solid #f5f5f5;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-color .5s;
    transition: border-color .5s;
    cursor: pointer;
}
.home-brick-box .box-hd .more .tab-list .el-menu-item {
    margin: 0 0 0 30px;
}
.brick-promo-list{
    float: left;
    width: 234px;
    min-height: 1px;
}
.homeelec-content{
	float: left;
    width: 992px;
    overflow: hidden;
}
.homeelec-content .brick-item-m{
    border: none;
    border-radius: 0;
    margin-left: 14px;
    margin-bottom: 14px;
}
</style>

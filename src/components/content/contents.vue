<template>
	<div id="contents" name="contents">
		<div id="content" class="home-brick-box home-brick-row-2-box xm-plain-box J_itemBox J_brickBox is-visible loaded">
            <div class="box-hd">
                <h2 class="title">内容</h2>
            </div>
            <div class="more">
            	<el-row type="flex" justify="space-around">
				    <el-col :span="6"><brick class="brick-item-m"/></el-col>
				    <el-col :span="6"><brick class="brick-item-m"/></el-col>
				    <el-col :span="6"><brick class="brick-item-m"/></el-col>
				    <el-col :span="6"><brick class="brick-item-m"/></el-col>
			    </el-row>
            </div>
        </div>
	</div>
</template>
<script >
import Simg from '../simg'
import Brick from '../brick'
export default {
  name: 'contents',
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
    width: 978px;
    overflow: hidden;
}
.homeelec-content .el-row{
    margin: 0;
    padding: 0;
}
</style>

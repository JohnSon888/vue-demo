<template>
	<div class="headers" name="header">
		<div class="site-topbar">
			<div class="container">
				<div class="menu">
					<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					  <el-menu-item index="1">小米商城</el-menu-item>
					  <el-menu-item index="2">MIUI</el-menu-item>
					  <el-menu-item index="3">米聊</el-menu-item>
					  <el-menu-item index="4">游戏</el-menu-item>
					  <el-menu-item index="5">多看阅读</el-menu-item>
					  <el-menu-item index="6">云服务</el-menu-item>
					  <el-menu-item index="7">金融</el-menu-item>
					  <el-menu-item index="8">小米商城移动版</el-menu-item>
					  <el-menu-item index="9">问题反馈</el-menu-item>
					  <el-menu-item index="10">Select Region</el-menu-item>
					</el-menu>
				</div>
				<div class="topbar-cart">
					<el-button type="primary">购物车</el-button>
				</div>
				<div class="topbar-info">
					<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					  <el-menu-item index="1">登录</el-menu-item>
					  <el-menu-item index="2">注册</el-menu-item>
					  <el-menu-item index="3">消息通知</el-menu-item>
					</el-menu>
				</div>
			</div>
		</div>
		<div class="site-header">
			<div class="container">
				<div class="menu">
					<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					  <el-menu-item index="1">小米手机</el-menu-item>
					  <el-menu-item index="2">红米</el-menu-item>
					  <el-menu-item index="3">平板 · 笔记本</el-menu-item>
					  <el-menu-item index="4">电视</el-menu-item>
					  <el-menu-item index="5">盒子 · 影音</el-menu-item>
					  <el-menu-item index="6">路由器</el-menu-item>
					  <el-menu-item index="7">智能硬件</el-menu-item>
					  <el-menu-item index="8">服务</el-menu-item>
					  <el-menu-item index="9">社区</el-menu-item>
					</el-menu>
				</div>
				<div class="topbar-cart">
					<el-button type="primary">购物车</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
	.headers{
	}
	.headers .site-topbar{
		height: 40px;
		background: #324157;
	}
	.headers .container{
		width: 1200px;
		margin: 0 auto;
	}
	.headers .site-header{
		height: 100px;
		line-height: 100px;
		background: #fff;
	}
	.headers .menu{
		float: left;
	    overflow: hidden;
	}
	    
    .headers .topbar-cart{
    	float: right;
    	width: 120px;
	    margin-left: 15px;
	    height: 40px;
	    line-height: 40px;
    }
    .headers .topbar-info{
		float: right;
    }

	.headers .el-menu--horizontal .el-menu-item{
		height: 40px;
	    line-height: 40px;
	    padding: 0 5px;
	}
	
</style>	
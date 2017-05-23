<template>
	<div id="hero-carousel" name="hero-carousel">
		<div class="container">
			<div class="box-hd">
                <h2 class="title">小米明星单品</h2>
                <div class="more">
                	<el-button>左边</el-button>
                	<el-button>右边</el-button>
                </div>
            </div>
			<div class="carousel-box clearfix">
			    <brick />
			    <brick />
			    <brick />
			    <brick />
			    <brick />
			</div>
		</div>
	</div>
</template>
<script >
import Brick from './brick'
export default {
  name: 'hero-carousel',
  components: {
    Brick
  },
  data () {
    return {
      app: ''
    }
  }
}
</script>
<style scoped>
#hero-carousel{
	padding-bottom: 30px;
}
.carousel-box .el-card{
	border: none;
	border-radius: 0;
}
.carousel-box .brick-item-m{
	margin-right: 14px;
}
.carousel-box .brick-item-m:nth-child(5n){
	margin-right: 0px;	
}
.box-hd {
    position: relative;
    height: 58px;
    -webkit-font-smoothing: antialiased;
}
.box-hd .title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
}
.box-hd .more {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
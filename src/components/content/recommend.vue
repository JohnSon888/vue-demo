<template>
	<div id="recommend" name="recommend">
		<div id="recommend" class="home-brick-box home-brick-row-2-box xm-plain-box">
            <div class="box-hd">
                <h2 class="title">为您推荐</h2>
                <div class="more">
                	<el-button>左边</el-button>
                	<el-button>右边</el-button>
                </div>
            </div>
            <div class="more clearfix">
			    <brick class="brick-item-m"/>
			    <brick class="brick-item-m"/>
			    <brick class="brick-item-m"/>
			    <brick class="brick-item-m"/>
			    <brick class="brick-item-m"/>
            </div>
        </div>
	</div>
</template>
<script >
import Simg from '../simg'
import Brick from '../brick'
export default {
  name: 'recommend',
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
.home-brick-box {
    margin-bottom: 8px;
}
.home-brick-box .el-card{
    border: none;
    border-radius: 0;
}
.home-brick-box .more .brick-item-m{
    margin-right: 14px;
}
.home-brick-box .more .brick-item-m:nth-child(5n){
    margin-right: 0px;
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
</style>

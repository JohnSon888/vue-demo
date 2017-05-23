<template>
	<div id="contents" name="contents">
		<div id="contents" class="home-brick-box">
            <div class="box-hd">
                <h2 class="title">内容</h2>
            </div>
            <div class="more clearfix">
      				<brick />
      				<brick />
      				<brick />
      				<brick />
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
.home-brick-box {
    margin-bottom: 8px;
}
.home-brick-box .el-card{
    border: none;
    border-radius: 0;
}
.home-brick-box .more .brick-item-m{
    width: 296px;
    height: 415px;
    margin-right: 14px;
}
.home-brick-box .more .brick-item-m:nth-child(4n){
    margin-right: 0px;
}
.home-brick-box .box-hd {
    position: relative;
    height: 58px;
    -webkit-font-smoothing: antialiased;
}
.home-brick-box .box-hd .title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
}
</style>

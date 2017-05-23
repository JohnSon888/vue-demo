<template>
	<div id="videos" name="videos">
		<div id="video" class="home-brick-box home-brick-row-2-box xm-plain-box">
            <div class="box-hd">
                <h2 class="title">视频</h2>
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
  name: 'videos',
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

</style>

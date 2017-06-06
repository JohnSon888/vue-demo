<template>
	<div id="hero-sub" name="hero-sub">
		<div class="container clearfix">
	    	<div class="span4">
	    		<channel />
	    	</div>
	    	<div class="span16">
	    		<simg class="brick-item-s"  v-for="item in subList" v-bind:todo="item" />
	    	</div>
		</div>
	</div>
</template>
<script >
import Simg from './simg'
import Channel from './channel'
export default {
  name: 'hero-sub',
  components: {
    Simg,
    Channel
  },
  data () {
    return {
      subList: [
	      { src: 'http://i3.mifile.cn/a4/xmad_14944176653918_dXbtB.jpg' },
	      { src: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg' },
	      { src: 'http://i3.mifile.cn/a4/xmad_14953769916932_zVxkZ.jpg' }
	    ]
    }
  }
}
</script>
<style scoped>
	.span4{
		float: left;
		width: 234px;
	}
	.span16{
		float: left;
	    width: 978px;
        margin-left: 14px;
	    min-height: 1px;
	}
	.span16 .brick-item-s:nth-child(1){
		margin-left: 0px;
	}
	.span16 .brick-item-s{
		float: left;
		margin-left: 15px;
	}
</style>

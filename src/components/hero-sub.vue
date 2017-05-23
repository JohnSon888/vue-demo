<template>
	<div id="hero-sub" name="hero-sub">
		<div class="container clearfix">
	    	<div class="span4">
	    		<channel />
	    	</div>
	    	<div class="span16">
	    		<simg class="first brick-item-s" />
			    <simg class="brick-item-s" />
			    <simg class="brick-item-s" />
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
      app: ''
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
	.span16 .brick-item-s.first{
		margin-left: 0px;
	}
	.span16 .brick-item-s{
		float: left;
		margin-left: 15px;
	}
</style>

<template>
	<div id="hero-sub" name="hero-sub">
		<el-row :gutter="20">
		    <el-col :span="4">
		    	<channel />
		    </el-col>
		    <el-col :span="20">
			    <div class="brick-item-box">
			    	<simg class="brick-item-s"/>
				    <simg class="brick-item-s" />
				    <simg class="brick-item-s" />
			    </div>
		    </el-col>
	    </el-row>
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

</style>

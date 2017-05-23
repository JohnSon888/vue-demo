<template>
	<div id="hero-carousel" name="hero-carousel">
		<el-row type="flex" justify="space-around">
		    <el-col :span="4"><brick class="brick-item-m"/></el-col>
		    <el-col :span="4"><brick class="brick-item-m"/></el-col>
		    <el-col :span="4"><brick class="brick-item-m"/></el-col>
		    <el-col :span="4"><brick class="brick-item-m"/></el-col>
		    <el-col :span="4"><brick class="brick-item-m"/></el-col>
	    </el-row>
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

</style>
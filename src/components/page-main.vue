<template>
	<div id="page-main" name="page-main">
		<div class="container">
		    <homeelec /> 
		    <smart /> 
		    <match /> 
		    <accessories /> 
		    <around /> 
		    <recommend /> 
		    <comment /> 
		    <contents /> 
		    <videos /> 
		</div>
	</div>
</template>
<script >
import Homeelec from './content/homeelec'
import Smart from './content/smart'
import Match from './content/match'
import Accessories from './content/accessories'
import Around from './content/around'
import Recommend from './content/recommend'
import Comment from './content/comment'
import Contents from './content/contents'
import Videos from './content/videos'
export default {
  name: 'page-main',
  components: {
    Homeelec,
    Smart,
    Match,
    Accessories,
    Around,
    Recommend,
    Comment,
    Contents,
    Videos
  },
  data () {
    return {
      app: ''
    }
  }
}
</script>
<style scoped>
.page-main {
    background: #f5f5f5;
    padding-top: 60px;
}
.container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
}
</style>
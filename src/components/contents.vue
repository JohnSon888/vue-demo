<template>
	<div id="contents" name="contents">
	    <hero-sub class="hero-sub"/>
	    <hero-carousel class="hero-carousel"/>
	    <page-main class="page-main"/>
	</div>
</template>
<script >
import HeroSub from './hero-sub'
import HeroCarousel from './hero-carousel'
import PageMain from './page-main'
export default {
  name: 'contents',
  components: {
    HeroSub,
    HeroCarousel,
    PageMain
  },
  data () {
    return {
      app: ''
    }
  }
  
}
</script>
<style scoped>
#contents{
	width: 100%;
}

.left{
  width: 20%;
  height: 100%;
  float: left;
}

.right{
  width: 80%;
  height: 100%;
  float: right;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: rgb(245,245,247);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgb(225,225,226);
  background-color: rgb(225,225,226);
}
</style>

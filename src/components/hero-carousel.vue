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
			    <brick v-for="item in brickList" v-bind:brick="item"></brick>
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
      brickList:[
          { 
            href: 'http://item.mi.com/product/5348.html',
            src: 'http://i3.mifile.cn/a4/xmad_14917453512947_AmXkT.png',
            title: '小米',
            desc: '小米加大米',
            price: '111',
            author: 'JohnSon',
            review: '给儿子买的，儿子很喜欢！一块组装乐在其中！'
          },
          { 
            href: 'http://item.mi.com/product/5348.html',
            src: 'http://i3.mifile.cn/a4/xmad_14913905000358_VqawM.png',
            title: '小米',
            desc: '小米加大米',
            price: '222',
            author: 'JohnSon',
            review: '给儿子买的，儿子很喜欢！一块组装乐在其中！'
          },
          { 
            href: 'http://item.mi.com/product/5348.html',
            src: 'http://i3.mifile.cn/a4/xmad_1496643954435_EcHtv.png',
            title: '小米',
            desc: '小米加大米',
            price: '333',
            author: 'JohnSon',
            review: '给儿子买的，儿子很喜欢！一块组装乐在其中！'
          },
          { 
            href: 'http://item.mi.com/product/5348.html',
            src: 'http://i3.mifile.cn/a4/xmad_14926862610682_UhkfS.png',
            title: '小米',
            desc: '小米加大米',
            price: '444',
            author: 'JohnSon',
            review: '给儿子买的，儿子很喜欢！一块组装乐在其中！'
          },
          { 
            href: 'http://item.mi.com/product/5348.html',
            src: 'http://i3.mifile.cn/a4/xmad_14926528960147_wJMsC.png',
            title: '小米',
            desc: '小米加大米',
            price: '555',
            author: 'JohnSon',
            review: '给儿子买的，儿子很喜欢！一块组装乐在其中！'
          }
      ]
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
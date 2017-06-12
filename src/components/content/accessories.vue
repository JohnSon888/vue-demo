<template>
	<div id="accessories" name="accessories">
		<div id="accessories" class="home-brick-box home-brick-row-2-box xm-plain-box J_itemBox J_brickBox is-visible loaded">
            <div class="box-hd">
                <h2 class="title">配件</h2>
                <div class="more">
                	<el-menu :default-active="activeIndex" class="tab-list" mode="horizontal">
					  <el-menu-item index="1">热门</el-menu-item>
					  <el-menu-item index="2">保护套</el-menu-item>
					  <el-menu-item index="3">贴膜</el-menu-item>
					  <el-menu-item index="4">其他配件</el-menu-item>
					</el-menu>
                </div>
            </div>
            <div class="row clearfix">
            	<div class="brick-promo-list">
                    <simg class="brick-item-m"  v-for="item in subList" v-bind:todo="item" />
            	</div>
            	<div class="homeelec-content">
            		<brick v-for="item in brickList" v-bind:brick="item"></brick>
            	</div>
            </div>
        </div>
	</div>
</template>
<script >
import Simg from '../simg'
import Brick from '../brick'
export default {
  name: 'accessories',
  components: {
    Simg,
    Brick
  },
  data () {
    return {
        activeIndex:'1',
        subList: [
          { src: 'http://i3.mifile.cn/a4/xmad_1496673909036_BxUMZ.jpg' },
          { src: 'http://i3.mifile.cn/a4/xmad_14950996440442_FrUIx.jpg' }
        ],
          brickList:[
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_14917453512947_AmXkT.png',
                title: '小米',
                desc: '小米加大米',
                price: '111',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              },
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_14913905000358_VqawM.png',
                title: '小米',
                desc: '小米加大米',
                price: '222',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              },
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_1496643954435_EcHtv.png',
                title: '小米',
                desc: '小米加大米',
                price: '333',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              },
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_14926862610682_UhkfS.png',
                title: '小米',
                desc: '小米加大米',
                price: '444',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              },
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_14926528960147_wJMsC.png',
                title: '小米',
                desc: '小米加大米',
                price: '555',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              },
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_14926862610682_UhkfS.png',
                title: '小米',
                desc: '小米加大米',
                price: '444',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              },
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_14926528960147_wJMsC.png',
                title: '小米',
                desc: '小米加大米',
                price: '555',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              },
              { 
                href: 'http://item.mi.com/product/5348.html',
                src: 'http://i3.mifile.cn/a4/xmad_14926528960147_wJMsC.png',
                title: '小米',
                desc: '小米加大米',
                price: '555',
                author: 'JohnSon',
                review: 'http://i3.mifile.cn/a4/xmad_14952963924193_UYsJV.jpg'
              }
          ]
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
@import '../../../static/css/menu.css';
.brick-promo-list{
    float: left;
    width: 234px;
    min-height: 1px;
}
.homeelec-content{
    float: left;
    width: 992px;
    overflow: hidden;
}
.homeelec-content .brick-item-m{
    border: none;
    border-radius: 0;
    margin-left: 14px;
    margin-bottom: 14px;
}
</style>

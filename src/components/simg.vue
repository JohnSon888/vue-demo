<template>
	<div class="brick-item" name="brick-item">
		<a class="item" href="//item.mi.com/product/10000021.html">
			<img alt="小米Note2分期6" :src="todo.src">
		</a>
	</div>
</template>
<script>
	export default {
	  props: ['todo'],
	  data () {
	    return {
	      activeIndex: '1',
	    }
	  }
	 
	}
</script>
<style>
	.brick-item{
	    position: relative;
	    z-index: 1;
	    float: left;
		width: 234px;
	    margin-bottom: 14px;
	    background: #fff;
	    -webkit-transition: all .2s linear;
	    transition: all .2s linear;
	}
	.brick-item-s{
		width: 316px;
	    height: 170px;
	    transition: box-shadow .2s linear;
	}
	.brick-item-m{
	    height: 288px;
	    transition: box-shadow .2s linear;
	}
	.brick-item-l{
	    height: 590px;
	    transition: box-shadow .2s linear;
	}
	.brick-item img{
		width: 100%;
		height: 100%;
	}
</style>
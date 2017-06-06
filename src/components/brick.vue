<template>
    <el-card class="brick-item brick-item-m">
       <div class="figure figure-img">
       		<a :href="brick.href">
       			<img :src="brick.src" alt="小米电视4A 43英寸">
       		</a>
       	</div> 
       	<h3 class="title"> 
	       	<a href="http://item.mi.com/product/5348.html">{{brick.title}}</a>
       	</h3>  
       	<p class="desc">{{brick.desc}}</p>  
       	<p class="price"> 
	       	<span class="num">{{brick.price}}</span>元  
       	</p> 
       	<p class="rank"></p>   
       	<div class="review-wrapper"> 
	       	<a href="http://item.mi.com/product/5348.html"> 
		       	<span class="review">{{brick.review}}</span><span class="author">{{brick.author}}<span class="date"></span></span> 
	       	</a> 
       	</div>
    </el-card>
</template>
<script>
  export default{
    props: ['brick'],
    data() {
      return;
    }
  }
</script>
<style>
  .brick-item {
    position: relative;
    z-index: 1;
    float: left;
    border: none;
    margin-bottom: 14px;
    background: #fff;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.brick-item-m{
  width: 234px;
}
.brick-item-m .figure-img {
    width: 150px;
    height: 150px;
    margin: 0 auto 18px;
}
.brick-item-m .figure-img a {
    display: block;
    color: #757575;
    text-decoration: none;
}
.brick-item-m .figure-img img {
    width: 150px;
    height: 150px;
}
.brick-item-m .title {
    margin: 0 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #333;
}
.brick-item-m .title a {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #333;
}
.brick-item-m .desc {
    margin: 0 10px 10px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #b0b0b0;
}
.brick-item-m .price {
    margin: 0 10px 10px;
    text-align: center;
    color: #ff6700;
}
.brick-item-m .rank {
    margin: 0 10px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #b0b0b0;
}
.brick-item-m .review-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    /*width: 234px;*/
    height: 0;
    overflow: hidden;
    _zoom: 1;
    font-size: 12px;
    background: #ff6700;
    opacity: 0;
    filter: alpha(opacity=0)\9;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.brick-item-m .review-wrapper a {
    display: block;
    padding: 8px 30px;
    outline: 0;
}
.brick-item-m .review, .brick-item-m .author {
    display: block;
}
.brick-item-m .review {
    margin-bottom: 5px;
    color: #fff;

}
.brick-item-m .author {
    color: #fff;
    color: rgba(255,255,255,0.6);
}
.brick-item-m .date {
    margin-left: 6px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-card{
  border: none;
}
</style>


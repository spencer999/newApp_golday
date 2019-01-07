<template> 
<div>
	<div class="mask" v-if="show"></div>
	<nav  class="navBox"  >
		<transition name="slide-nav">
			<div class="flex nav"  v-if="show">
 			<router-link class="navItem" tag="div" to="/aboutGolday">
 				<img class="pic" src="../img/nav1.png">
 				<span class="navName">关于金盛</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/trade">
 				<img class="pic" src="../img/nav2.png">
 				<span class="navName">交易中心</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/market">
 				<img class="pic" src="../img/nav3.png">
 				<span class="navName">行情中心</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/trade/download">  
	 				<img class="pic" src="../img/nav4.png">
	 				<span class="navName">平台下载</span> 
 			</router-link>
 			<router-link class="navItem" tag="div" to="/customer/rate"> 
	 				<img class="pic" src="../img/nav5.png">
	 				<span class="navName">实时汇率</span> 
 			</router-link>
 			<div class="navItem">
 				<a :href="linkList.calendar"> 
	 				<img class="pic" src="../img/nav6.png">
	 				<span class="navName">财经日历</span>
 				</a>
 			</div>
 			<router-link class="navItem" tag="div" to="/customer">
 				<img class="pic" src="../img/nav7.png">
 				<span class="navName">客户中心</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/help">
 				<img class="pic" src="../img/nav8.png">
 				<span class="navName">帮助中心</span>
 			</router-link>
			</div>
		</transition>
		<div class="clickZoom" @click="show = !show"></div>
		<div class="arrow" @click="show = !show">
			<i>导航</i> 
			<transition  name="rotate-arrow">
				<img class="icon" src="../img/up.png" alt="" v-if="show">
				<img class="icon" src="../img/down.jpg" alt="" v-else>
			</transition > 
		</div> 
	</nav> 
		
</div> 
</template>

<script> 
export default {
	name: 'Header',
	data () {
	    return {
	    	show:false ,
	    	linkList:{ 
	    		calendar:'http://m.golday.com/Mobile/Index/economic_calendar.html',
	    		download:'http://m.golday.com/Mobile/Index/download.html',
	    	} 
	    }
  	}, 
  	// 监听,当路由发生变化的时候执行
	watch: {
	  	'$route':'getPath'
	}, 
	methods: {
	  	getPath(){ 
	    	this.show = false;
		},
		 
} 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
	.navBox{
		width:100%;
		padding-bottom:.43rem;
		position:absolute; 
		left:0;
		
	}
	.nav{
		padding:0  .58rem .45rem;
		background:#fff; 
		box-shadow: 0 0 4px rgba(0,0,0,.2);
		-webkit-box-shadow: 0 0 4px rgba(0,0,0,.2);
	}
	.clickZoom{
		width:2.2rem;
		height:.45rem;
		position:absolute;
		bottom:0.45rem;
		left:50%;
		transform:translateX(-50%);
		-webkit-transform:translateX(-50%);
		margin:0 auto;
	}
	.arrow{
		width:2.2rem;
		height:.43rem;
		line-height:.25rem;
		background:url("../img/arrow.png") no-repeat center;
		background-size:cover; 
		position:absolute;
		bottom:0rem;
		left:50%;
		transform:translateX(-50%);
		-webkit-transform:translateX(-50%);
		font-size:0;
		text-align: center;
	}
	.arrow i{
		font-size:.24rem;
		vertical-align:middle;

	}
	.icon{  
		width:.21rem;
		height:.13rem;
		margin-left:.1rem;
		vertical-align:middle;
	}
	.pic{
		width:.62rem; 
	}
	.navItem{
		width:1.5rem;
		text-align: center;
		font-size: 0;
		margin-top:.45rem;
	}
	.navName{
		font-size:.26rem;
		margin-top:.25rem;
	}
	.mask{
		width: 100%;
	    height: 1555%;
	    position: absolute;
	    left: 0;
	    background: rgba(0,0,0,.7);
	}
/* 导航内容上下拉动画 */
.slide-nav-enter-active {
  transition: all 3s liner;
   height:3.8rem;
}
.slide-nav-leave-active {
  transition: all 3s liner;
  height:3.8rem;
  
}
.slide-nav-enter, .slide-nav-leave-to{
   height:0;  
}
	/* 导航箭头旋转动画 */
	.rotate-arrow-enter-active, .rotate-arrow-leave-active {
	  transition: all 1s; 
	}
	.rotate-arrow-enter, .rotate-arrow-leave-to {
	  transform: rotate(180deg);
	}	

 
 
 	
</style>

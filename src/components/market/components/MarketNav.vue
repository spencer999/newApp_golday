<template>
<div class="marketNav wrapper" ref="wrapper">
	<div class="content flex">
		<router-link tag="span"  v-for="(item ,index) in navList" :key="index" :to="item.path" replace>{{item.tag}}</router-link>
		<a href="https://m.golday.com/Mobile/Index/economic_calendar.html"> <span>财经日历</span></a>
	</div>
</div> 
</template>

<script>
 
export default {
	name: 'marketNav', 
	data(){
		return{
			scroll:{},
			navList:[
	    		{
	    			tag:"伦敦金",
	    			path:'/market/londonJ'
	    		},
	    		{
	    			tag:"伦敦银",
	    			path:'/market/londonY'
	    		},
	    		{
	    			tag:"实时快讯",
	    			path:'/market/lastestNew'
	    		},
	    		{
	    			tag:"产品对比",
	    			path:'/market/product'
	    		},
	    		{
	    			tag:"行情解读",
	    			path:'/market/marketRead'
	    		},
	    		{
	    			tag:"金盛点评",
	    			path:'/market/gdReview'
	    		},
	    		{
	    			tag:"实盘策略",
	    			path:'/market/strategy'
	    		},
	    		{
	    			tag:"专题热解",
	    			path:'/market/topic'
	    		},
	    		{
	    			tag:"黄金技术分析",
	    			path:'/market/goldTech'
	    		} 
	    	]
		}
	},
	 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.marketNav{
		width:100%;
		height:1.2rem;
		background:#fff;
		overflow-x:scroll;
		overflow-y:hidden;
		padding: .5rem 0 .2rem 0;
	}
	.marketNav span{
		font-size:.3rem;
		float:left;
		position:relative;
	}
	.content{
		width:200%; 
		padding:0 .3rem;
		flex-wrap:nowrap;
	}
	.marketNav span.active{
		color:#ff5555;
	}
	.marketNav span.active::after{
		content:'';
		position:absolute;
		bottom:-.25rem;
		left:50%;
		transform:translateX(-50%);
		-webkit-transform:translateX(-50%);
		width:1rem;
		height:.03rem;
		background:#ff5555;;
	}
</style>

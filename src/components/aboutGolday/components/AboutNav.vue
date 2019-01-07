<template>
	<div class="aboutNav">  
		<h2 class="topTitle"> <i></i>  关于金盛 <i></i> </h2>
		<div class="flex">
			<router-link tag="span" class="item" :class="{'none':index == navList.length-1}" v-for="(item ,index) in navList" :key="index" :to="item.path">{{item.tag}}</router-link>
		</div>
	</div> 
</template>

<script>
export default {
	name: 'aboutNav',
	data () {
	    return {
	    	navList:[
	    		{
	    			tag:"企业介绍",
	    			path:'/aboutGolday/introduce'
	    		},
	    		{
	    			tag:"投资者保障",
	    			path:'/aboutGolday/investor'
	    		},
	    		{
	    			tag:"资金安全",
	    			path:'/aboutGolday/fundSecurity'
	    		},
	    		{
	    			tag:"金盛荣誉",
	    			path:'/aboutGolday/GdHonor'
	    		},
	    		{
	    			tag:"企业新闻",
	    			path:'/aboutGolday/news'
	    		},
	    		{
	    			tag:"联系我们",
	    			path:'/aboutGolday/contactUs'
	    		}
	    	]
	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.aboutNav{
		width:100%;
		background:#fff; 
		z-index:10;	
	}
	.flex{
		padding:0 .3rem;
		flex-wrap:nowrap;
		-webkit-flex-wrap:nowrap;
		height:1.2rem;
	} 
	.item{
		font-size:.28rem;
		padding:0 .2rem;
		text-align: center;
		border-right:solid 0.01rem #e1e0e0;
		position:relative;
	}
	.item.active{
		color:#ff5555;
	}
	.item.active::after{
		content:'';
		position:absolute;
		bottom:-.25rem;
		left:.3rem;
		width:.5rem;
		height:.03rem;
		background:#ff5555;;
	}
	.none{
		border:none;
	}
</style>

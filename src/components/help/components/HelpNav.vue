<template>
	<div class="aboutNav">
		<h2 class="topTitle"> <i></i>  帮助中心 <i></i> </h2>
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
	    			tag:"账户问题",
	    			path:'/help/accountQue'
	    		},
	    		{
	    			tag:"平台问题",
	    			path:'/help/flatForm'
	    		},
	    		{
	    			tag:"交易问题",
	    			path:'/help/deal'
	    		},
	    		{
	    			tag:"其他问题",
	    			path:'/help/other'
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
	}
	.flex{
		padding:0 .3rem;
		flex-wrap:nowrap;
		height:1.2rem;
	} 
	.item{
		font-size:.3rem;
		padding:0 .2rem;
		text-align: center; 
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
		width:.9rem;
		height:.03rem;
		background:#ff5555;;
	}
	.none{
		border:none;
	}
</style>

<template>
	<section class="goBack"> 	
		<div class="flex goBack"> 
			<span class="back" @click="goBack"> 返回 </span>
			<h2 class="title"> {{this.subTitle}} </h2>
			<i class="none"></i>
		</div>  
	</section>
</template>

<script> 
export default {
	name: 'goBack',
	props: ['subTitle'], 
	methods:{
		goBack(){
			this.$router.go(-1);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.goBack{
		width:100%;
		height:1rem;
		line-height:1rem;
		padding:0 .13rem;   
		color:#696969;
		font-size:.3rem;
		background:#fff; 
		border-top:0.01rem solid #e8e8e8;
	}
	.back{ 
		padding-left:.5rem;
		background:url("../img/back.jpg") no-repeat left .2rem center;
		background-size:.18rem .31rem;
	}
	.title{
		color:#323232;
		font-size:.34rem;
		width: 2rem;
    	text-align: center;
	}
	.none{
		width:.8rem;
	} 

</style>

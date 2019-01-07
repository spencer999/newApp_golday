<template>
<div class="market"> 
	<marketNav></marketNav>
	<router-view></router-view>
</div> 
</template>

<script>
import marketNav from './components/MarketNav'
export default {
	name: 'market', 
  	components:{
  		"marketNav":marketNav
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.market{
		width:100%; 
	} 
	.lookMore{
		margin-top:.3rem;
	}
</style>

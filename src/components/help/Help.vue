<template>
<div class="help"> 
	<app-helpNav></app-helpNav>
	<router-view></router-view>
</div> 
</template>

<script>
import helpNav from './components/HelpNav'
export default {
	name: 'help',
	data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
  	},
  	components:{
  		"app-helpNav":helpNav
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.help{
		width:100%;
		padding-bottom:2rem;
		background:#fff;
	}
	
</style>

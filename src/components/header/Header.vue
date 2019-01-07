<template>
<section>
	<header class="header" ref="header">
		<app-warn v-on:isWarn="isWarn"></app-warn>
 		<app-top></app-top>
 		<app-navBar></app-navBar>
	</header> 
	<div class="none" ref="none"></div>
</section>
</template>

<script>

import warn from './components/Warn'
import top from './components/Top'
import navBar from './components/NavBar'
export default {
	name: 'Header', 
	components:{  
		'app-navBar':navBar,
		'app-top':top,
		'app-warn':warn, 
	},
	mounted(){  
		this.$refs.none.style.height=1.5+"rem";
	},
	methods:{
		isWarn(show){ 
			if(!show){
				this.$refs.none.style.height=1+"rem";
			}
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		width:100%;
		/* position:relative; */
		position:fixed;
		top:0;
		left:0;
		z-index:10;
	}
	.none{
		width:100%;

	}
	 
</style>

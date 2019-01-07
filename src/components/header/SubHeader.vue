<template>
	<section> 
		<div class="subTitle">
			<app-top></app-top> 	
			<app-goBack :subTitle="subTitle"></app-goBack>  
		</div>
		<div class="none"></div>
	</section>
</template>

<script>

import top from './components/Top'
import goBack from './components/GoBack'
export default {
	name: 'subTitle',
	props:["subTitle"],
	components:{   
		'app-top':top,
		'app-goBack':goBack,
	}
}
</script>
<style scoped>
	.subTitle{
		width:100%;
		height:2rem;
		position:fixed;
		top:0;
		left:0;
		z-index:100;
	}
	.none{
		width:100%;
		height:2rem;
	}
</style>
 

<template>
	<div class="home">
    	<app-header></app-header>
    	<router-view>	</router-view> 
	</div>
</template>

<script>
import header from '../header/Header'
import footer from '../footer/Footer'
export default {
	name: 'home',
	components:{
		'app-header':header, 
		'app-footer':footer, 
	}
}
</script> 
 

<template>
	<transition name="fade-warn">	
		<div class="flex" v-if="show"> 
			<span class="warn"> {{msg}} </span>
			<span class="close" @click="closeWarn"> × </span>
		</div> 
	</transition>
</template>

<script>
export default {
    name: 'warn',
    data () {
	    return {
	        msg: '金盛贵金属官网_正规香港贵金属交易平台',
	    	show:true,
	    }
    },
    methods:{
    	closeWarn(){ 
    		this.show = !this.show;
			this.$emit("isWarn",this.show);
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.flex{
		width:100%;
		height:.5rem;
		line-height:.5rem;
		padding:0 .3rem; 
		background:#ff5555; 
		color:#fff;
	}
	.warn{ 
		font-size: 0.24rem;
	}
	.close{
		font-size:.45rem;
	}
	/* 淡入淡出动画 */
	.fade-warn-enter-active, .fade-warn-leave-active {
	  transition: all .3s; 
	}
	.fade-warn-enter, .fade-warn-leave-to {
		opacity:0;
	}		
</style>

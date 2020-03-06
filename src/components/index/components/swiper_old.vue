<template>
	<div class="wrapper"> 
		<transition-group tag="ul" name="slide"  class="swiper" >
			<li class="slide" v-for="(item,index) in banner" :key="index" v-if="index == mark">
				<a :href="item.web_url">
				<img :src="item.wap">
				</a>
			</li> 
		</transition-group> 
		<div class="bars">
			<span class="bar" :class="{'active':mark == index}" v-for="(item,index) in banner" :key="index"></span>
		</div>
	</div> 
</template>

<script> 
export default {
	name: 'wrapper',
	data () {
	    return {
	    	mark:0,
	    	banner: [], 
	    }
    },
    created(){
    	this.autoPlay();
    	this.$http.get('/Mobile/Index/bannerData')
				.then((res)=>{
					console.log(res);
					this.banner=res.data; 
				})
    },
    methods:{
    	autoPlay(){
    		setInterval(()=>{
    			this.mark++;
    			if(this.mark == this.banner.length){
    				this.mark = 0;
    			}
    		},3000);
    	}, 
    }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.wrapper,.swiper{
		width:100%;
		height:6.8rem;
		position:relative;
	}
	.slide{
		position:absolute;
	}
	.slide,.slide img{
		width:100%;
		height:6.8rem;
	}
	.bars{
		width:100%;
		text-align: center;	
		position:absolute;
		bottom:.3rem;
		font-size:0;
	}
	.bar{
		width:.56rem;
		height:.05rem;
		background:#fff;
		margin:0 .05rem;
	}
	.bar.active{
		background:#ff5500;
	}
	/* 轮播过渡 */
	/* .slide-enter-active {
	    transform: translateX(0);
	    transition: transform 1.5s ease;
	}
	.slide-leave-active {
	    transform: translateX(-100%);
	    transition: transform 1.5s ease;
	}
	.slide-enter {
	    transform: translateX(0);
	}
	.slide-leave {
	    transform: translateX(-100%);
	} */
	.slide-enter-active { 
	    transition: all 1s ;
	}
	.slide-leave-active {
	    transform: translateX(-100%);
	    transition: all 1s;
	}
	.slide-enter {
	    transform: translateX(100%);  
	} 
</style>

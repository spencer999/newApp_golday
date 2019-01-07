<template>
	<div class="swiperText">
		<transition-group tag="ul" name="slide" class="swiper">
			<li class="slide" v-for="(item,index) in imgList" :key="index" v-if="index == mark">
				<img :src="item.src">
				<p class="t1">{{item.t1}}</p>
				<p class="t2">{{item.t2}}</p>
			</li> 
		</transition-group>
		<div class="bars">
			<span class="bar" :class="{'active':mark == index}" v-for="(item,index) in imgList" :key="index"></span>
		</div>
	</div> 
</template>

<script>
import img1 from '../img/index12.jpg' 
import img2 from '../img/index13.jpg' 
import img3 from '../img/index14.jpg' 
import img4 from '../img/index16.jpg' 
export default {
	name: 'swiperText',
	data () {
	    return {
	    	mark:0,
	    	 
	    	imgList:[{
	    		src:img1,
	    		t1:" 15秒即可开户",
	    		t2:"轻松快捷的开户服务，只需一步即刻开户" 
	    	},{
	    		src:img2,
	    		t1:"高速存取",
	    		t2:" 存款即时到账，取款2小时到账" 
	    	},{
	    		src:img3,
	    		t1:"秒速建平仓",
	    		t2:"锁住盈利，0.08秒内执行" 
	    	},{
	    		src:img4,
	    		t1:"客服5秒内回复",
	    		t2:"24小时为您守候的专业客服"
	    	}]
	    } 
    },
    created(){
    	this.autoPlay();
    },
    methods:{
    	autoPlay(){
    		setInterval(()=>{
    			this.mark++;
    			if(this.mark == this.imgList.length){
    				this.mark = 0;
    			}
    		},3000);
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.swiperText{	
		padding-top:.4rem;
		width:100%;
		position:relative;
	} 
	.swiper{
		width:100%;
		height:3.3rem; 
	}
	.slide{
		width:100%;
		position:absolute;
		color: #333333;
		text-align: center;
	} 
	.slide img{
		width:2.25rem;
		height:1.65rem;
		display: block;
    	margin: 0 auto .2rem;
	}
	.slide .t1{
		font-size: 0.34rem; 
		line-height: 0.48rem;
		margin-bottom:.05rem;  
	}
	.slide .t2{
		font-size: 0.26rem;
		line-height: 0.48rem;  
	}
	.bars{
		width:100%;
		text-align: center;	
		font-size:0; 
	}
	.bar{
		width:.56rem;
		height:.05rem;
		background:#e8e8e8;
		margin:0 .05rem;
	}
	.bar.active{
		background:#ff5500;
	}
	/* 轮播过渡 */
/* 	.slide-enter-active {
    transform: translateX(0);
    transition: all 2s ease;
}
.slide-leave-active {
    transform: translateX(-100%);
    transition: all 2s ease;
}
.slide-enter {
    transform: translateX(100%);
    transition: all 5s ease;
}
.slide-leave {
    transform: translateX(0);
    transition: all 5s ease;
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

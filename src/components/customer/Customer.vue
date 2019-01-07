<template>
	<div class="customer"> 
		<div class="container nav">
			<div class="flex">
				<div class="item">
					<a href="https://m.golday.com/Mobile/Index/mall.html">
					<img class="pic" src="./img/customer_03.jpg">
					<span class="navName">积分商城</span>
					</a> 
				</div>  
				<router-link tag="div" class="item" v-for="(item,index) in navList" :to="item.path" :key="index"> 
	 				<img class="pic" :src="item.image">
	 				<span class="navName">{{item.name}}</span> 
				</router-link> 
				 
			</div>
		</div>				
		<!-- 积分商城板块 -->
		<div class="container">
			<h2 class="topTitle"> <i></i>  积分商城 <i></i> </h2>
			<p class="p1">有积分，任性兑</p>
			<img class="gift" src="./img/customer_28.jpg" alt="积分商城">
			<div class="flex goods">
				<div class="good">
					<span>猫王收音机</span>
					<img src="./img/customer_32.jpg" alt="积分商城">
				</div>
				<div class="good">
					<span>扫地机器人</span>
					<img src="./img/customer_34.jpg" alt="积分商城">
				</div>
				<div class="good">
					<span>戴森吹风机</span>
					<img src="./img/customer_36.jpg" alt="积分商城">
				</div>
			</div>
			<a href="https://m.golday.com/Mobile/Index/mall.html">
				<div class="lookMore"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></div>
			</a> 
		</div>
		<!-- 最新优惠板块 -->
		<div class="container" v-if="discount.bt">
			<h2 class="topTitle"> <i></i>  最新优惠 <i></i> </h2>
			<a :href="discount.wap_url">
			<img class="discountImg" :src="discount.dt" alt="最新优惠">
			<p class="disName">{{discount.bt}}</p>
			<p class="disDesc">{{discount.nr}}</p>
			</a>
			<router-link class="lookMore" tag="div" to="/customer/discount"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></router-link>
		</div>
		<!-- 平台公告板块 -->
		<div class="container">
			<h2 class="topTitle mb30"> <i></i>  平台公告 <i></i> </h2>
			<div class="flex notice" v-for="(item,index) in noticeList" :key="index">
				<span>{{item.bt}}</span>
				<span>{{item.sj}}</span>
			</div>
			<p class="line"></p>
			<router-link class="lookMore" tag="div" to="/customer/notice"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></router-link>
		</div>
	</div> 
</template>
<script> 
import img2 from './img/customer_05.jpg'
import img3 from './img/customer_07.jpg'
import img4 from './img/customer_13.jpg'
import img5 from './img/customer_16.jpg'
import img6 from './img/customer_18.jpg'
export default {
	name: 'customer',
	data () { 
	    return {
	    	discount:{}, 
	    	navList:[ 
		    	{
		    		name:"最新优惠",
		    		image:img2,
		    		path:"/customer/discount"
		    	},{
		    		name:"平台公告",
		    		image:img3,
		    		path:"/customer/notice"
		    	},{
		    		name:"金盛课堂",
		    		image:img4,
		    		path:"/customer/school"
		    	},{
		    		name:"实时汇率",
		    		image:img5,
		    		path:"/customer/rate"
		    	},{
		    		name:"投资计算",
		    		image:img6,
		    		path:"/customer/invest"
		    	}
	    	],
	    	noticeList:[]
	    }
  	},
  	created(){
  		this.$http.post("/Mobile/Index/zxyh",1)
  			.then((res)=>{
  				console.log(res); 
  				this.discount.bt = res.data[0].bt; 
  				this.discount.nr = res.data[0].nr;
  				this.discount.wap_url = res.data[0].wap_url;
  				this.discount.dt = res.data[0].dt;
  			});
  		this.$http.post("/Mobile/Index/ptgg",1)
  			.then((res)=>{
  				this.noticeList = res.data.slice(0,3); 
  			})
  	},
  	methods:{
  		goDiscount(){ 
  			window.open('/discount')
  		}
  	}


}
</script>
 
<style scoped>
	.container{
		padding:0 .3rem .3rem ;
	}
	.mb30{
		margin-bottom:.3rem;
	}
	.customer{
		width:100%; 
	}
	.nav{
		margin:0 auto .3rem!important;
	}
	.nav .flex{
		padding:0rem .5rem 0.2rem;
	}
	.pic{
		width:.7rem;
		height:.68rem; 
	}
	.nav .item{
		width:1.5rem;
		text-align: center;
		font-size: 0;
		margin-top:.5rem;
	}
	.navName{
		font-size:.28rem;
		margin-top:.25rem;
	}
	.p1{
		font-size: 0.3rem; 
		line-height: 0.44rem; 
		color: #333333;
		margin-top:.4rem;
		text-align: center;
	}
	.gift{
		width:2.12rem;
		display:block;
		margin:.2rem auto .3rem;
	}
	.goods{
		padding:0 .45rem;
		font-size: 0;
	}
	.good{
		width:1.7rem;
		text-align: center;
	}
	.good span{
		font-size: 0.28rem; 
		line-height: 0.44rem; 
		color: #333333;
	}
	.good img{
		width:1.63rem;
	}
	.discountImg{
		width:100%;
		margin:.35rem auto 0;
	}
	.disName{
		font-size: 0.3rem; 
		color: #333333; 
		line-height:.55rem;

	}
	.disDesc{
		font-size: 0.28rem;
		line-height:.4rem;
		text-indent:2em;
	}
	.notice{
		width:100%;
		height:.84rem;
		line-height:.84rem;
		border-top:0.01rem solid #e8e8e8;
	}
	.line{
		width:100%;
		height:.1rem;
		border-top:0.01rem solid #e8e8e8;
	}
	.notice span{
		font-size: 0.28rem; 
		color: #333333;
	} 
	.notice span:nth-child(1){
		width:70%;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
</style>

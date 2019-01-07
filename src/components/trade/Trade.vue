<template>
	<section class="trade">
		<div class="titleBox">
			<h2 class="topTitle"> <i></i> 交易中心 <i></i> </h2>
			<p class="sub">10美元即可交易，随时建仓/平仓</p>
		</div>
		<div class="imageText flex">
			<div class="items">
				<a href="http://m.golday.hk/Mobile/Index/real_account.html">
			 	<img class="pic" src="./img/trade1.png">
			 	<p class="p1">真实开户</p> 
				<p class="p2">加入金盛<br>领取开户礼包 </p>  
				</a>
			</div>
			<div class="items">
				<a href="http://m.golday.hk/Mobile/Activity/planm.html">
			 	<img class="pic" src="./img/trade2.png">
			 	<p class="p1">模拟开户</p> 
				<p class="p2">无风险体验 <br>贵金属交易</p>  
				</a>
			</div> 
			<router-link class="items" v-for="(item,index) in adsList" :key="index" :to="item.path">
			 	<img class="pic" :src="item.src" alt="item.tag">
			 	<p class="p1">{{item.tag}}</p> 
				<p class="p2" v-html="item.desc"> </p>  
			</router-link> 
			<div class="items">
				<a href="http://vip.golday.hk/Mobile/Index/login.html">
			 	<img class="pic" src="./img/trade4.png">
			 	<p class="p1">资金存取</p> 
				<p class="p2">灵活存取 <br> 无需担心资金安全</p>  
				</a> 
			</div> 
		</div>  
	</section> 
</template>

<script> 
import trade3 from './img/trade3.png'
import trade4 from './img/trade4.png'
import trade5 from './img/trade5.png' 
export default {
	name: 'trade',
  	data () {
	    return {
	    	adsList:[ 
	    		{
	    			tag:"产品分类",
	    			desc:"双向交易的投资产品<br> 涨跌赚取利润 ",
	    			src:trade3,
	    			path:'/trade/classify'
	    		},
	    		{
	    			tag:"账户简介",
	    			desc:"选择合适 <br>您的账户类型",
	    			src:trade4,
	    			path:'/trade/account'
	    		},
	    		{
	    			tag:"交易规则",
	    			desc:"综合点差优惠 <br> 高达40美元/手",
	    			src:trade5,
	    			path:'/trade/rules'
	    		} 
	    	]
	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
	.titleBox{
		padding:0 .3rem .3rem;
		background:#fff;
	} 
	
	.sub{
		font-size: 0.26rem;   
		text-align: center; 
	}
	.flex{
		background:#fff;
		margin-top:.2rem;
		padding:.45rem .3rem;
	}
	.ads{
		width: 3.3rem;
		height: 3.98rem;
		background: #fff;
		border-radius: 0.03rem;
		border: solid 0.02rem #e9e8e8;
		padding-top:.45rem;
		text-align: center;
		margin-bottom:.2rem;
		font-size:0;
	}
	.img{
		width: 1.24rem;
		height: 1.24rem;
	}
	.p1{
		font-size: 0.32rem; 
		color: #323333;
		margin:.2rem 0 .1rem;
	}
	.p2{
		font-size: 0.28rem;  
		line-height:.4rem;
	}
</style>

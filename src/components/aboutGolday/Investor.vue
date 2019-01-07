<template>
	<div class="investor">
		<section class="container">
			<p class="conText">      金盛贵金属极度重视投资服务的安全性，采用一系列保安措施，平台提供无负数结余保障，资金严格受香港法律监管。</p>
			<app-advantage ></app-advantage >
		</section>

		<section class="container" v-for="(item,index) in conList" :key="index">
			<h3 class="conTitle">{{item.tag}}</h3>
			<p class="conText">{{item.desc}}</p>
		</section>  
	</div> 
</template>

<script>
import advantage from './components/Advantage'
export default {
	name: 'investor', 
	data () {
	    return {
	    	conList:[
	    		{
	    			tag:"提供无负数结余保障",
	    			desc:"为了让客户可以安心交易，金盛贵金属为客户提供「无负数结余保证」*，客户的交易账户将不会出现负数结余，并无须支付因此而产生的额外欠款。*只适用于个别客户",
	    		},
	    		{
	    			tag:"国际标准网络安全技术",
	    			desc:"为确保客户可安心在网上进行各项交易，金盛贵金属已采用符合国际标准的网上编码技术，再配合其它专为互联网及网上交易而设的安保措施，可对抗各类型网络攻击及黑客行为，防止未经授权的登入和交易。",
	    		},
	    		{
	    			tag:"保护客户个人隐私",
	    			desc:"金盛贵金属一直严格遵守由香港法定机构所颁布的私隐条例，更内部制定严谨的客户资料处理程序，所有客户资料及交易纪录均作高度保密及加密处理，防止个人资料外泄。 ",
	    		}  
	    	]
	    }
  	},
  	components:{
  		"app-advantage":advantage
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container{
		width:100%;
		padding:.3rem;
		background:#fff;
		margin-top:.25rem;
	}	
	.video{
		width:100%;
	}
	.conTitle{
		font-size: 0.3rem;  
		color: #000;
		margin-bottom:.15rem;  
	}
	.conText{
		font-size: 0.28rem;  
		text-indent:2em;
		line-height:.45rem;
	}
	.titleC{
		font-size: 0.3rem; 
		color: #000;
		text-align: center;
		margin-bottom:.3rem;  
	}
</style>

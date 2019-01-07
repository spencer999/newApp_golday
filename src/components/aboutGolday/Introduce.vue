<template>
	<div class="introduce">
		<section class="container">
			<video class="video" poster="./img/video.jpg" controls src="http://1251587264.vod2.myqcloud.com/4ad8a7d0vodtransgzp1251587264/e3bddfc99031868222975253471/f0.f30.mp4"></video>
			<p class="conText"> 香港金盛贵金属有限公司（以下简称为“金盛贵金属”）注册成立于香港，作为香港金银业贸易场认可的专业电子交易商，金盛贵金属致力为广大投资者打造优质可靠的贵金属投资服务平台。</p>
      		<p class="conText">金盛贵金属(www.golday.com)是香港金银业贸易场AA类会员第047号行员，随着百年历史的香港金银业贸易场认可的电子交易商。单笔交易0.1手以上均提供「交易编码」，有据可查，保证所有交易公开透明。</p>
		</section>

		<section class="container" v-for="(item,index) in conList" :key="index">
			<h3 class="conTitle">{{item.tag}}</h3>
			<p class="conText">{{item.desc}}</p>
		</section> 

		<section class="container">
			<h3 class="titleC">全方位客户服务体系</h3>
			<app-advantage></app-advantage> 
		</section>
	</div> 
</template>

<script>
import advantage from './components/Advantage'
export default {
	name: 'introduce', 
	data () {
	    return {
	    	conList:[
	    		{
	    			tag:"公平公正的交易环境",
	    			desc:"金盛贵金属致力为投资者提供「公平、公正、透明」的交易环境，不仅采用国际上先进的MT4&MF交易双平台，更震撼推出高于行业平均水平的伦敦金/银点差优惠活动，交易零佣金，使得投资者能够以最低成本获取最大投资回报。",
	    		},
	    		{
	    			tag:"全方位客户服务体系",
	    			desc:"金盛贵金属始终坚持「以客户利益」为首位，大学生客服团队全天24小时在线，提供一站式全方位的专业服务，随时为客户解答疑难，入金即时到账，保证取款2小时到账，让客户专尊享到最优质的贵金属投资服务，助力每一位投资者实现财富快速增值。",
	    		},
	    		{
	    			tag:"集优质资源于一身 荣膺行业重要奖项",
	    			desc:"金自成立以来，金盛贵金属屡获殊荣，先后荣获「最具投资者信赖」、「行业类十佳企业奖」、「最具创新大奖」、「创新应用系统奖」、「年度优秀交易平台」等多项荣誉，足以彰显金盛贵金属的资质和综合实力，受到行业和投资者的充分认可与肯定。 ",
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
	.video{
		width:100%;
		z-index:1;
	} 
	.titleC{
		font-size: 0.3rem; 
		color: #000;
		text-align: center;  
	}
</style>

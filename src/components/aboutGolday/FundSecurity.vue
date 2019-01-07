<template>
	<div class="fundSecurity">
		<div class="container" v-for="(item,index) in conList" :key="index">
			<h2 class="h2"><i></i> <span class="title">{{item.tag}}</span> <i></i> </h2>
			<p class="conText">{{item.desc}}</p>
		</div>
	</div> 
</template>

<script>
export default {
	name: 'fundSecurity',
    data () {
     	return {
	    	conList:[
	    		{
	    			tag:"信心保障",
	    			desc:"金盛贵金属为国内和国际投资者提供一个公平透明的投资平台，产品报价全采用最权威的数据报价，每一笔报价均可进行历史查询，单笔交易0.1手以上均可提供交易编码，金银业贸易场可查询，确保数据报价公正透明。",
	    		},
	    		{
	    			tag:"交易安全",
	    			desc:"金盛贵金属致力确保网站安全及符合业界标准，采用了符合国际最标准的网上编码技术，架设多层防火墙隔离系统，保障传送的客户资料免收他人的拦截及盗取。再配合SSL加密保安措施，对抗各类型网络攻击及黑客行为，防止未经授权的系统登入和交易。客户透过MT4 &MF交易平台即可同时进行下单、平仓等不同操作，透过设置止损价和获利价，不用监控市况，就能确保在第一时间把握投资机会。",
	    		},
	    		{
	    			tag:"账目清晰",
	    			desc:"金盛贵金属将客户个人资金与公司的营运资金分开存放，提高客户资金存放的透明度，存款和取款都在香港持牌银行进行，保障客户资金绝对安全,《存款流程 》《取款流程》。 ",
	    		},
	    		{
	    			tag:"隐私保密 ",
	    			desc:"金盛贵金属一直严格遵守由香港法定机构所颁布的隐私条例并且内部制定严谨的客户资料处理程序，所有客户资料及交易纪录均作高度保密及加密处理，防止个人资料外泄。 ",
	    		} ,
	    		{
	    			tag:"取款快捷 ",
	    			desc:"金盛贵金属不接受第三方取款指示，亦规定客户在取款时只可转账至客户名下的银行账户，取款2小时即可到账，公司通过手机短信通知客户取款情况，以确保客户资金的安全性。 ",
	    		} ,
	    		{
	    			tag:"定期审核",
	    			desc:"金盛贵金属的发展规划建立在高度严谨及自律的营运准则上，本公司外聘专业核数师定期查核财务状况，再向管理层及相关机构呈交报告，以达至有效和谨慎的公司管理，让客户资金得到多重监控。 ",
	    		}   
	    	]
	    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	 
	.h2{ 
		text-align: center;
		font-size:0;
		margin-bottom:.25rem;
	}
	 
	.h2 i{
		display:inline-block;
		width: 1.85rem;
		height: 1px; 
		background-color: #ae864f;
		border-radius: 0.01rem; 
		vertical-align:middle;
	}
	.fundSecurity .title{
		font-size:.3rem;
		padding-left:.5rem;
		margin: 0 .15rem;		
		vertical-align:middle;
		color: #ac7721;
	}
	.fundSecurity .container:nth-child(1) .title{
		background:url("./img/invest1.png") no-repeat left center;
		background-size:.37rem .35rem;
	}
	.fundSecurity .container:nth-child(2) .title{
		background:url("./img/invest2.png") no-repeat left center;
		background-size:.43rem .39rem;
	}
	.fundSecurity .container:nth-child(3) .title{
		background:url("./img/invest3.png") no-repeat left center;
		background-size:.43rem .41rem;
	}
	.fundSecurity .container:nth-child(4) .title{
		background:url("./img/invest4.png") no-repeat left center;
		background-size:.39rem .39rem;
	}
	.fundSecurity .container:nth-child(5) .title{
		background:url("./img/invest5.png") no-repeat left center;
		background-size:.38rem .38rem;
	}
	.fundSecurity .container:nth-child(6) .title{
		background:url("./img/invest6.png") no-repeat left center;
		background-size:.37rem .39rem;
	}
</style>

<template>
	<div class="invest">
		<app-subHeader :subTitle="subTitle"></app-subHeader>
		<div class="container">  
		 	<p class="conText">我们以美元作为交易及结算货币，若客户以人民币存取贵金属投资款项，存款将根据第三方支付平台提供的汇率处理，而取款则参考 本公司提供的市场汇率，有关详情可参考以下取款兑换汇率注意事项。汇率价格公平公开，本公司绝不收取任何费用。 </p>

		 	<p class="c3 mt25">入金汇率：</p>
		 	<p class="conDesc"><img class="flag" src="./img/usa.png" alt="美元">1.00美元 = <img class="flag" src="./img/china.png" alt="美元">  {{im}}人民币</p>
            <p class="c3 mt25">出金汇率：</p>
            <p class="conDesc"><img class="flag" src="./img/usa.png" alt="美元">1.00美元 = <img class="flag" src="./img/china.png" alt="美元">  {{ex}}人民币</p>

		 	<p class="conDesc mt25">汇率更新周期 :</p>
			<p class="conDesc">视巿场汇率变化而定。 </p> 
			
			<p class="c3 mt25">	注意事项：</p> 
			<p class="conDesc">1、金盛贵金属各交易账户货币均为美元。<br>
				2、取款时美元兑人民币汇率参考本公司提供的市场汇率，注资时若存入人民币，将以支付平台系统提供的即时汇率为准。<br>
				3、取款时美元兑港币汇率使用当天永亨银行美元兑港币汇率，注资时如存入港币，以当时存入银行提供的汇率为准。<br>
				4、汇率更新周期 : <br>视巿场汇率变化而定。汇率价格绝对公平公开，金盛贵金属不赚取任何买卖差价。 </p> 
		</div>
	</div> 
</template>

<script> 
import subHeader from '../header/SubHeader'  
export default {
	name: 'invest', 
	data () {
	    return {
	    	ex:0,
	    	im:0,
	    	subTitle:'实时汇率',
	    	 
	    }
  	},
  	created(){
  		this.$http.get("/Mobile/Index/huiLv.html")
  		.then((res)=>{
  			this.im = res.data[0].usdtormb;
  			this.ex = res.data[0].today;
  		})
  	},
  	components:{ 
  		"app-subHeader":subHeader,
  	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
	.container{
		padding:.3rem;
	}
	.flag{
		width:.42rem;
		height:.28rem;
		vertical-align:middle;
		margin-right:.15rem;
	}
	.w1{
		display:inline-block;
		width:1rem;
	}
	.w175{
		display:inline-block;
		width:1.75rem;
	}
	.red{
		font-size:.26rem;
		color:#ff5555;
		
	} 
	.mt25{
		margin-top:.25rem;
	}
	.mt40{
		margin-top:.4rem;
	}
	.c3{
		font-size:.3rem;
		color:#333;
		line-height:.35rem;
		line-height:.55rem;
	} 
</style>

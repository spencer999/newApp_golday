<template>
	<div class="invest">
		<app-subHeader :subTitle="subTitle"></app-subHeader>
		<div class="container">
		 	<p class="conTitle">盈亏及利息计算</p>
		 	<p class="c3">伦敦金/伦敦银</p>
		 	<p class="red">净盈亏=〔(卖出价-买入价) x 合约单位 x 手数〕- 利息- 佣金</p>
		 	<p class="c3 mt25">人民币黄金/白银</p>
		 	<p class="red">净盈亏=〔(卖出价-买入价) x 合约单位 x 手数〕/美元兑离岸<br><i class="w1"></i> 人民币报价 - 利息 - 佣金</p>
            <p class="conTitle mt40">例子一</p>
		 	<p class="conText">      陈先生在1月28日星期五，经网上黄金交易平台买入2手伦敦金，即200盎司，投入保证金2,000美元，买入价为1,310美元，并于即日以1,330美元沽出2手伦敦金平仓，他的黄金交易盈利为： </p>
		 	<p class="c3">投入金额（美元）=<span class="red"> $2,000</span> </p>
		 	<p class="c3">净盈亏（美元）=<span class="red"> $〔(1,330 - 1,310) x 100 x 2〕- 0 - 0 </span> <br><i class="w175"></i>  = <span class="red">$4000 </span></p>
		</div>
	</div> 
</template>

<script> 
import subHeader from '../header/SubHeader'  
export default {
	name: 'invest', 
	 data () {
	    return {
	    	subTitle:'投资计算',
	    	 
	    }
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
		font-size:.26rem;
		color:#333;
		line-height:.35rem;
		line-height:.55rem;
	} 
</style>

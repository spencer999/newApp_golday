<template>
	<section class="classify">
		<app-subHeader :subTitle="this.subTitle"></app-subHeader>
		<div class="container">
			<!-- <p class="conText"> 金盛贵金属会员账户体系全面升级，将提供20/26/28三种类型的点差回赠优惠，客户可以根据自己的需求选择适合自己的账户类型，账户体系也将根据客户账户规范，每月进行自动升降级。</p> -->
			<table class="conTable">
				<thead>
					<tr>
						<td>伦敦金/伦敦银</td>
          				<td>无账户分层</td>
					</tr>
				</thead>
				<tbody>
					<tr>
			          <td>开户入金要求</td>
			          <td>50美元</td>
			        </tr>
			        <tr>
			          <td>黄金点差返赠</td>
			          <td>点差返赠30美元</td>
			        </tr>
			        <tr>
			          <td>白银点差返赠</td>
			          <td>点差返赠30美元</td>
			        </tr>
			        <tr>
			          <td>最低交易手数</td>
			          <td>0.01手</td>
			        </tr>
			        <tr>
			          <td>隔夜利息（买/卖）</td>
			          <td colspan="3" class="tab-cen">买入 - 1.75%，卖出 - 1.75%</td>
			        </tr>
				</tbody>
			</table>
		</div>
		
		<!-- <div class="container">
			<p class="conTitle">账户升降级标准</p>
			<table class="conTable">
				<thead>
					<tr>
						<td colspan="2">升级</td>
						<td>降级</td>
					</tr>
				</thead>
				<tbody class="textLeft">
					<tr>
						<td class="p20">标准账户</td>
						<td  class="p40">新客户：首充值金额不低于50美元<br>老客户：交易手数累计达10手或者累计充值满1000美元，晋升专业账户</td>
						<td  class="p40">不适用</td>
					</tr>
					<tr>
						<td>专业账户</td>
						<td>新客户：于首次充值24小时内净充值达1000美元 <br>老客户：账户净值达10000美元且当月交易手数达100手，晋升尊贵账户 </td>
						<td>不适用</td>
					</tr>
					<tr>
						<td>尊贵账户</td>
						<td>新客户：于首次充值48小时内净充值达10000美元<br>老客户：不适用</td>
						<td>账户净值低于10000美元或当月交易手数未达到100手，降级至专业账户</td>
					</tr>
				</tbody>
			</table>
			<p class="conTitle">账户调整</p>
			<p class="conDesc">升级 : 客户于首次/上次账户调整后30天内满足更高账户级别要求(根据账户净值和上月交易手数)，将于次日早上6点进行调整。</p>
			<p class="conDesc">降级 : 客户于上次账户调整后第30天，根据账户净值和上月交易手数进行帐户升降级调整，将于次日早上6点进行调整。</p>
		</div>
		 
		<div class="container">
			<p class="conTitle">新客户账户升级需知</p>
			<p class="conDesc"> 1. 新客户判断标准：从2018年1月2日起进行首次入金的客户;</p>
			<p class="conDesc"> 2. 客户充值金额达标后，自动实时调整对应账户级别;</p>
			<p class="conDesc"> 3. 下次账户调整将会在开户时间起计算30天。</p>
		
			<p class="conTitle mt20">老客户账户升降级需知</p>
			<p class="conDesc"> 1. 老客户判断标准：从2018年1月2日前已入金的客户; </p>
			<p class="conDesc"> 2. 账户调整于每上次调整后第30天调整1次，根据账户净值和上月交易手数，将于次日早上6点进行调整;</p>
			<p class="conDesc"> 3. 客户于上次账户调整后30天内满足更高账户级别要求(根据账户净值和上月交易手数)，将于次日早上6点进行调整。</p>
		</div> -->

	</section> 
</template>

<script>
import subHeader from '../header/SubHeader'
export default {
	name: 'classify',
  	data () {
	    return {
	    	subTitle:'账户简介',
	    	 
	    }
  	},
  	components:{
  		"app-subHeader":subHeader
  	}
}
</script>
<style>
	.textLeft td{
		text-align:left;
		padding-left:.15rem;
	}
	.p20{
		width:20%;
	}
	.p40{
		width:40%;
	}
	.mt20{margin-top:.2rem;}
</style>
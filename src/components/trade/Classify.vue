<template>
	<div class="classify">
		<app-subHeader :subTitle="this.subTitle"></app-subHeader>
		<div class="container">
			<p class="conText">金盛贵金属有限公司是香港金银业贸易场AA类会员第047号行员。是被认可的电子交易商，专业提供伦敦金、伦敦银的电子交易，实物黄金的交收。</p>
			<table class="conTable">
				<thead>
					<tr>
						<td>产品分类</td>
						<td>伦敦金</td>
						<td>伦敦银</td>
						<td>实物黄金</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>交易方向</td>
						<td>双向操作</td>
						<td>双向操作</td>
						<td>单向操作</td> 
					</tr>
					<tr>
						<td>交易时间 </td>
						<td>5*24小时 </td>
						<td>5*24小时</td>
						<td>5*8小时</td> 
					</tr>
					<tr>
						<td>杠杆比例 </td>
						<td>100倍 </td>
						<td> —— </td>
						<td> 无</td> 
					</tr>
					<tr>
						<td>资金投入 </td>
						<td>低投资 高回报</td>
						<td>低投资 高回报</td>
						<td>本金要求高 </td> 
					</tr> 
					<tr>
						<td> 利弊分析 </td>
						<td> 交易灵活 </td>
						<td> 方便快捷</td>
						<td> 投入多<br>只能做多<br> 不能做空<br> 需要保管</td> 
					</tr> 
				</tbody>
			</table>
		</div>
		
		<section class="container" v-for="(item,index) in conList" :key="index">
			<h3 class="conTitle">{{item.tag}}</h3>
			<p class="conText">{{item.desc}}</p>
		</section>

	</div> 
</template>

<script>
import subHeader from '../header/SubHeader'
export default {
	name: 'classify',
  	data () {
	    return {
	    	subTitle:'产品分类',
	    	conList:[
	    		{
	    			tag:"伦敦金市场",
	    			desc:" 伦敦是全球主要黄金买卖和交收中心，亦是世界上最大、历史最悠久的黄金市场。每个交易日，伦敦金银市场协会的五大黄金交易商都会定出当日的黄金市场价格。与其他黄金市场不同，它只为市场的交易者买入或卖出黄金提供单一的报价。此价格还被生产商、消费者和中央银行采用作为参考中间价。 伦敦金市场属伦敦金交易市场，最大的特色就是没有固定的交易所。由于伦敦没有实际的交易场所，伦敦金买卖主要通过场外交易形式——电子交易系统完成，随时随地均可买卖。",
	    		},
	    		{
	    			tag:"稳健的投资产品",
	    			desc:"伦敦金是一种可以双向交易的投资产品，即通过买涨或买跌赚取利润。由于黄金市场是全球性的投资市场，因此黄金的供求和投资情绪会公平地反映在价格的涨跌中。黄金交易的透明度高，投资者可在价差波动中寻找好的投资机会交易。 当预期金价上升则优先买入，反之则沽出，赚取市场上升或下降所产生的差价。伦敦金的优势在于双向交易，风险容易控制，低投入高回报，比股票或实物黄金更为灵活。 此外，投资者不会轻易做空黄金，黄金是资金的避难所，具有保值的属性。黄金属于有色资源，其供应是有限的，需经过开采才会得到，因此，恐慌性地抛售黄金现象很少发生。黄金绝对是一种稳健的投资产品。",
	    		}  
	    	]
	    }
  	},
  	components:{
  		"app-subHeader":subHeader
  	}
}
</script>
 
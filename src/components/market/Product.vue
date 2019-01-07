<template>
	<div class="product"> 
		<div class="container">	
			<p class="conTitle">伦敦金</p>
			<p class="conDesc">	交易方向：双向操作</p>  
			<p class="conDesc">	交易时间：5×24小时 </p> 
			<p class="conDesc">	资金投入：低投入，高回报 </p> 
			<p class="conDesc">	利弊分析：交易灵活 </p> 
			<p class="conDesc">	杠杆比例：100</p> 
		</div>

		<div class="container">	
			<p class="conTitle">实物黄金</p>
			<p class="conDesc">	交易方向：单向操作</p>  
			<p class="conDesc">	交易时间：5×8小时 </p> 
			<p class="conDesc">	资金投入：本金要求高 </p> 
			<p class="conDesc">	利弊分析：投入多，只能做多，不能做空，需要保管 </p> 
			<p class="conDesc">	杠杆比例：1</p> 
		</div>

		<div class="container">	
			<p class="conTitle">纸黄金</p>
			<p class="conDesc">	交易方向：单向操作</p>  
			<p class="conDesc">	交易时间：5×24小时 </p> 
			<p class="conDesc">	资金投入：本金要求高 </p> 
			<p class="conDesc">	利弊分析：投入多，只能做多，不能做空 </p> 
			<p class="conDesc">	杠杆比例：1</p> 
		</div> 

		<div class="container">	
			<p class="conTitle">黄金期货</p>
			<p class="conDesc">	交易方向：双向操作</p>  
			<p class="conDesc">	交易时间：5×5小时 </p> 
			<p class="conDesc">	资金投入：最低10万 </p> 
			<p class="conDesc">	利弊分析：有到期时间，不易控制风险 </p> 
			<p class="conDesc">	杠杆比例：15</p> 
		</div> 

		<div class="container">	
			<p class="conTitle">黄金T+O</p>
			<p class="conDesc">	交易方向：双向操作</p>  
			<p class="conDesc">	交易时间：5×10小时 </p> 
			<p class="conDesc">	资金投入：本金要求较高 </p> 
			<p class="conDesc">	利弊分析：不能以市价实时交易，易失良机，投入多 </p> 
			<p class="conDesc">	杠杆比例：12.5</p> 
		</div>
	</div> 
</template>

<script>
export default {
    name: 'product',
    data () {
	    return {
	      msg: 'Welcome to Your  londonJ'
	    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.conDesc{
		height:.7rem;
		line-height:.7rem;
		padding-left:.1rem;
		border-top:0.01rem solid #e8e8e8;
	}
</style>

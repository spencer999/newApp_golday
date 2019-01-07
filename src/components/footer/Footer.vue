<template> 	
	<footer class="foot">
		<p class="p1">24小时客服热线</p>
		<p class="p2"><a href="tel:852-3758 2228"></a> 852-3758 2228 (香港)</a></p>
		<p class="line"></p>
		<p class="p3">免责声明   |   隐私条款</p>
		<p class="p3">Copyright © 2018金盛贵金属有限公司版权所有，不得转载</p>
		<p class="p3 mt15">温馨提示 </p>
		<p class="p3">市场有风险 投资需谨慎 </p>
	</footer>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
        msg: '金盛贵金属官网_正规香港贵金属交易平台', 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.foot{
		width:100%;
		padding-top:.4rem;
		color: #333333;
		line-height: 0.48rem; 
		text-align: center;
	}		
	.p1{
		font-size: 0.24rem;   
	}
	.p2{
		font-size:0.36rem;
		
	}
	.p3{
		font-size: 0.24rem; 
		line-height: 0.4rem; 
		color: #999999;
	}
	.line{
		width:6.9rem;
		height:1px;
		margin:.2rem auto .2rem;
		background:#d4d4d4;
	}
	.mt15{
		margin-top:.15rem;
	}
</style>

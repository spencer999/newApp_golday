<template>
	<div class="contact">
		<div class="container">
			<img class="w100" src="./img/contact1.jpg" alt=""> 
			<p class="p1">地址 : 香港九龙尖沙咀广东道9号海港城港威大厦第六座1605-06 室</p>
			<p class="p1">电话 : +852-3758 2228</p>
			<p class="p1">传真 : +852-3468 7777</p>
			<p class="p1">E-mail : cs@golday.com</p>
			<p class="p1">网址 : www.golday.com</p>
			<p class="p1">QQ : 800067971</p>
			<div class="flex">
				<div class="wx">
					<img src="./img/contact2.jpg" alt=""> 
					<p class="p2">官方订阅号：goldayhk<br>独家黄金白银投分析</p>
				</div>
				<div class="wx">
					<img src="./img/contact3.jpg" alt=""> 
					<p class="p2">24小时客服：goldaycs<br>为投资者提供账户查询</p>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
	name: 'contact',
  	data () {
	    return {
	    	msg: 'Welcome to Your Vue.js App'
	    }
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
	.w100{
		width:100%;
		display:block;
		margin-bottom:.25rem;
	}
	.p1{
		font-size: .30rem; 
		line-height: .48rem;  
	}
	.p2{
		font-size: .26rem; 
		line-height: .3rem; 
		word-break: break-all;
		text-align: center;
	}
	.flex{
		margin-top:.4rem;
		padding:0 .5rem;
	}
	.wx{
		width:2.8rem;
		text-align: center;
	}
	.flex img{
		width:2.14rem;
		height:2.1rem;
		margin:0 auto .15rem;
		display:block;
	}
</style>

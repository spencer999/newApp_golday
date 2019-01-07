<template>
	<section class="top">
 		<div class="flex">
 			<router-link to="/">
 				<img src="../img/logo.png" class="logo" alt="金盛贵金属">
 			</router-link>
 			<div class="font0">
 				<span class="entry"> <a href="http://chat10.live800.com/live800/chatClient/chatbox.jsp?companyID=449478&configID=230423&jid=8152728285" onclick="ga ('send','event','m_index',' chat_live800 ','content_first');" target="_blank"> 客服 </a></span>
 				<span class="entry"> <a href="http://vip.golday.hk/Mobile/Index/login.html" onclick="ga ('send','event','m_index',' login ','content_first');" target="_blank"> 存取款登录 </a></span>
 			</div>
 		</div> 
	</section> 
</template>

<script> 
export default {
	name: 'top',  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top{
		width:100%;
		box-shadow: 0 0 4px rgba(0,0,0,.2);
		 }
	.top .flex{
		width:100%;
		height:1rem;
		background-color: #ffffff;	
		padding:0 .3rem;
		flex-wrap:wrap;
		-webkit-flex-wrap:wrap;
	}
	.entry{
		padding:0 .2rem;
		height:.56rem;
		line-height:.56rem;
		border-radius:5px;
		font-size: 0.24rem;  
		border:1px solid #666;
		margin-left:.25rem;
	}
	.logo{
		width:2.25rem;
		height:.66rem;
	} 
	.font0{
		font-size:0;
	}
	 
</style>

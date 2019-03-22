<template>
	<div class="bottom">
		<img class="star" src="../img/index_25.jpg" alt="">
		<div class="flex prizes">
			<div class="prize">
				<img src="../img/index_28.jpg" alt="">
				<p class="p">国际史蒂维奖</p>
				<p class="p">客户服务冠军大奖</p>
			</div>
			<div class="prize">
				<img src="../img/index_30.jpg" alt="">
				<p class="p">中国金融行业</p>
				<p class="p">最具投资者信赖奖</p>
			</div>
			<div class="prize none">
				<img src="../img/index_32.jpg" alt="">
				<p class="p">可信网站</p>
				<p class="p">验证单位</p>
			</div>
		</div>
	</div> 
</template>

<script> 
export default {
	name: 'bottom', 
     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bottom{
		width:100%;
	}
	.star{
		width: 7.5rem;
		height: 3.2rem;
		display:block;
		margin:0 auto;
	}
	.prizes{
		padding:.25rem 0;
		background:#fff;
	}
	.prize{
		width:33.33%;
		border-right:1px solid #e8e8e8;
		text-align: center;
	}
	.prize img{
		width:.5rem; 
		display:block;
		margin:0 auto;
		margin-bottom:.1rem;
	}
	.prize .p{
		font-size: 0.24rem; 
		line-height: 0.32rem;
	}
	.prize.none{
		border:none;
	}
</style>

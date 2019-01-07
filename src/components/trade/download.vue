<template>
	<div class="discount">
		<app-subHeader :subTitle="subTitle"></app-subHeader>  
		<section>
			<p class="p1">MT4平台  国际通用  90%交易量载体</p>
			<p class="p2">成熟、安全、精确、稳定</p>
			<div class="flat">
				<img src="./img/flat.png">
			</div>
			<div class="txt">
				<p>18种划线工具</p>
				<p>9种交易的时段表</p>
				<p>30种国际流行的指标</p>
				<p>多种自定义功能</p>
			</div>
		</section>

		<section>
			<div class="loadBox">
				<p class="h2">IOS版</p>
				<div class="flex">
					<p class="text">
						浏览iPhone里的App Store,搜索MetaTrader4。点击下载安装即可使用。或扫描右侧二维码下载
					</p>
					<img  class="icon" src="./img/download_01.png">
				</div>
				<a class="btn" href="https://itunes.apple.com/cn/app/metatrader-4/id496212596?mt=8">立即下载</a>
			</div>
			<div class="loadBox">
				<p class="h2">Android版</p>
				<div class="flex">
					<p class="text">
						点击下载Golday.apk安装到手机。或扫描右侧二维码下载
					</p>
					<img  class="icon" src="./img/download_02.jpg">
				</div>
				<a class="btn btn1" href="http://www.golday.hk/GoldayMT4.apk">立即下载</a>
			</div>
		</section> 

	</div> 
</template>

<script> 
import subHeader from '../header/SubHeader'  
export default {
	name: 'discount',
	data () {
	    return {
	    	subTitle:'平台下载',
	    	 
	    }
  	},
  	components:{ 
  		"app-subHeader":subHeader,
  	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
	.p1{
		font-size:.32rem;
		padding-top:.3rem;
		text-align: center;	
		color:#000;
	} 
	.p2{
		font-size:.28rem;
		margin-bottom:.4rem;
		text-align: center;	
		color:#565656;
	} 
	.flat{
		padding-left: 1.35rem;
   		width: 4.75rem;
   		display: inline-block
	}
	.flat img{
		width:3rem;
	}
	.txt{
		display:inline-block;
		vertical-align:top;
	}
	.txt p{
		font-size:.2rem;
		line-height:.4rem;
		color:#808080;
	}
	.loadBox {
		border: 1px solid #d6d7dc;
	    width: 6.9rem;
	    margin: .3rem auto;
	    border-radius: 5px;
	    box-sizing: border-box;
	    padding: .3rem;
	    background: #fff;
	    font-size:0;
	}
	.loadBox .h2{
		color:#000;
		font-size:.32rem;
	}
	.flex{
		margin-top:.2rem;
	}
	.text{
		color:#808080;
		font-size:.28rem;
		flex:2;
		-webkit-flex:2;
	}
	.icon{
		width:2.15rem;
		flex:1;
		vertical-align:top;
	}
	.btn{
		border-radius: 5px;
	    border: 1px solid #666; 
	    display:inline-block; 
	    height: .5rem;
	    line-height: .5rem;
	    padding:0 .2rem 0 .45rem;
	    background: url(./img/download_03.png) no-repeat left .15rem center;  
	    background-size: .19rem .26rem;
		font-size:.3rem;
	}
    .btn1 {
    	background: url(./img/download_04.png) no-repeat left .15rem center;
    	background-size: .19rem .26rem;
	}
</style>

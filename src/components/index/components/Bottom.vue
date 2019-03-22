
<template>
	<footer class="footer">
		<img class="fauto" src="../img/officialSiteFoot.jpg" alt="" />
		<img class="ftitle" src="../img/officialSiteBottom.jpg" alt=""/>
	    <ul>
	      <li><i></i><p>中国金融服务行业<br>AAA级企业</p></li>
	      <li><i></i><p>2017年度<br>最具服务价值大奖</p></li>
	      <li><i></i><p>香港金银业贸易场<br>AA类047号行员</p></li>
	      <li><i></i><p>中国互联网金融行业<br>十佳企业奖</p></li>
	      <li><i></i><p>中国金融行业<br>最具投资者信赖奖</p></li>
	      <li><i></i><p>互联网金融行业<br>实名网站认证 </p></li> 
	    </ul>
	    
	</footer>
</template>

<script> 
export default {
	name: 'footer', 
     
}
</script>

<style scoped>
	.footer{width:7.5rem;background:#42403f;padding:0!important; }
	.footer .fauto{width:100%;display:block;}
	.footer .ftitle{width:6.3rem;height:.7rem;margin:.5rem auto 0;display:block;}
	.footer ul{width:100%;display: flex;justify-content: space-between;flex-wrap:wrap; border-left:1px solid #484645;box-sizing:border-box;padding:.3rem .3rem .5rem;}
	.footer ul li{width:2rem; box-sizing: border-box; border:none!important;padding:0!important;}
	.footer ul li i{width:100%;height:.9rem;display:block;}
	.footer ul li p{font-size:.22rem;color:#edd5a6;text-align: center;}
	.footer ul li:nth-child(1) i{background: url("../img/foot3_09.png") no-repeat center;background-size: .51rem .51rem}
	.footer ul li:nth-child(2) i{background: url("../img/foot3_12.png") no-repeat center;background-size: .51rem .51rem}
	.footer ul li:nth-child(3) i{background: url("../img/foot3_14.png") no-repeat center;background-size: .51rem .51rem;}
	.footer ul li:nth-child(4) i{background: url("../img/foot3_19.png") no-repeat center;background-size: .51rem .51rem}
	.footer ul li:nth-child(5) i{background: url("../img/foot3_21.png") no-repeat center;background-size: .51rem .51rem;}
	.footer ul li:nth-child(6) i{background: url("../img/foot3_22.png") no-repeat center;background-size: .51rem .51rem} 
	.hj_foot{font-size: .22rem;color: #999;text-align: center;padding:.2rem 0 .5rem;border-top:1px solid #666;    line-height: .4rem;}
	.hj_foot span{color:#666;font-size:.22rem;}
	body{padding-bottom:.6rem;}
</style>
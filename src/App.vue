<template>
	<div id="app" v-cloak> 
    	<router-view>	</router-view> 
    	<app-footer></app-footer>
    	<app-bottom></app-bottom>
	</div>
</template>

<script> 
import footer from './components/footer/Footer'
import bottom from './components/footer/Bottom'
export default {
	name: 'app',
	components:{  
		'app-footer':footer, 
		'app-bottom':bottom, 
	} 
}
</script>

<style>
	[v-cloak]{
		/* display:none; */
	}
	body{
		background:#e8e8e8;
		padding-bottom: 1rem;
	}
	/* 查看更多条 */
	.lookMore{
		width:100%;  
		text-align: center;
		font-size: 0.3rem;
		background:#fff; 
		height:.8rem;
		line-height:.8rem;
		margin-top:.3rem;
	}
	.lookMore img{
		width: .32rem;
   	 	height: .32rem;
    	vertical-align: middle;
	}
	.lookMore  i{
		vertical-align: middle;
	}
	/* .lookMore .morePlus{
		width: 0.32rem;
		height: 0.32rem;
		border: solid 0.02rem #666;
		margin-right:.15rem;
		border-radius:50%;
		font-size:.3rem;
		line-height:.25rem;
		text-align: center;
		font-weight:bold;
	} */
	/* container 包含的标题段落表格共有样式 */
	.container{
		width:100%;
		padding:.3rem;
		background:#fff;
		margin-top:.2rem;
	}

	.conTitle{
		font-size: 0.3rem;  
		color: #333;
		margin-bottom:.15rem;  
	}
	.conText{
		font-size: 0.28rem;  
		text-indent:2em;
		line-height:.45rem;
	}
	.conTime{
		font-size: 0.28rem; 
		color:#999; 
		margin:-.05rem  0 .07rem 0 ;
		line-height:.45rem;
	}
	.conDesc{
		font-size: 0.28rem;  
		line-height:.45rem;
		width: 100%;
	    overflow: hidden;
	    display:box;
	    box-orient: vertical;
	    line-clamp: 3; 
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 3;
	}
	.conTable{
		width:100%;
		margin:.25rem 0; 
	}
	.conTable thead{
		background:#fbf2d7;
	}
	.conTable td{
		height:.6rem;    
		vertical-align: middle;
		font-size:.26rem;
		text-align: center;
		padding:.15rem 0;
		border: 1px solid #e8e8e8;
	}
	.conTable tbody tr:nth-child(odd){
		background:#fff;
	}
	.conTable tbody tr:nth-child(even){

		background:#f7f7f7;
	}
	/* 二级页面顶部标题样式 如 ——行情中心——*/
	.topTitle{ 
		width:100%;
		text-align: center;
		font-size: 0.44rem;  
		color: #000;
		text-align: center;  
		padding:.55rem 0 0;  
	} 
	.topTitle i{
		display:inline-block;
		width: 0.7rem;
		height: 1px; 
		background-color: #666666;
		border-radius: 0.01rem; 
		vertical-align:middle;
	}
	/* 图文上下排列 */

	.imageText{
		width:100%; 
		margin-top:.2rem;
	} 
	.imageText .items{
		width: 3.35rem; 
		background: #fff;
		border-radius: 0.03rem;
		-webkit-border-radius: 0.03rem;
		border: solid 1px #e9e8e8;
		padding:.45rem 0;
		text-align: center;
		margin-bottom:.22rem;
		font-size:0;
	}
	.imageText .pic{
		width: 1.24rem;
		height: 1.24rem;
	}
	.imageText .p1{
		font-size: 0.32rem; 
		color: #323333;
		margin:.25rem 0 .1rem;
	}
	.imageText .p2{
		font-size: 0.28rem;  
		line-height:.4rem;
	}
	/* 帮助中心以及交易中心/交易规则问答列表样式 start*/
	.box{
		width:100%;
		background:#fff; 
	}
	.headline{
		width:100%;
		border-bottom:1px solid #e8e8e8;
		height:.8rem;
		line-height:.8rem;
		padding:0 .3rem;
	}
	.headline .title{
		font-size:.28rem;
		color:#333;
	}
	.headline .title i{
		width:.3rem;
		display:inline-block;
		height:.3rem;
		line-height:.3rem;
		text-align: center;
		vertical-align:middle;
		margin-right:.15rem;
		border-radius:50%;
		border:0.01rem solid #333;
		font-size: .22rem;
	}
	.headline .arrow{
		width:.13rem;
		height:.22rem;
		background:url("./assets/rule2.png") no-repeat center;
		background-size:cover; 
	} 
	.detail{
		padding:.2rem .3rem;
		background:#f4f4f4;
		font-size:.28rem; 
		line-height:.45rem;
		position:relative;
	}
	.detail::after{
		content:'';
		position:absolute;
		top:-.3rem;
		left:.7rem;
		border-top:.15rem solid transparent;
		border-left:.15rem solid transparent;
		border-right:.15rem solid transparent;
		border-bottom:.15rem solid #f4f4f4;

	} 
	/* 帮助中心以及交易中心/交易规则问答列表样式 end*/
</style>

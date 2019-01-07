<template>
	<div class="index">
		<div class="banner">
			<!-- 轮播组件 -->
			<app-swiper></app-swiper>
			<!-- 开户按钮 -->
			<div class="flex openAccount">

				<a href="https://www.golday.hk/Mobile/Activity/planm.html" onclick="ga ('send','event','m_index','open_demo_account','content_first');" target="_blank"><span>模拟开户</span></a> 
				<a href="https://www.golday.hk/Mobile/Index/real_account.html" onclick="ga ('send','event','m_index','open_real_account','content_first');" target="_blank"><span class="two">真实开户</span></a>
			</div>
		</div>
		<!-- 最新公告 -->
		<ul class="notice">
			<router-link :to="{path:'/detail',query:{id:notice.id,title:'平台公告',type:1}}">
			<li>最新公告 | {{notice.notice}}</li>
			</router-link>
		</ul>
		<section class="marketContainer">
			<!-- —— 行情中心 —— -->
			<h2 class="title"> <i></i>  行情中心 <i></i> </h2>
			<div class="flex">
				<div class="data" :class="{'green':item[2] < 0}"  v-for="(item,index) in graphs" :key="index"> 
					<p class="name">{{item[0] | toTxt}}</p>
					<p class="num">{{item[1]}}</p>
					<p class="rate">{{item[2]}} {{item[2] | getT}} </p>
					<p class="rate">({{item[3]}}) </p>
				</div>
				 
			</div>
			<!-- 多空比例 -->
			<h3 class="subtitle">多空比例</h3>
			<div class="flex">
				<div class="ratio"> 
					<div class="graphic">
						<p class="graphicT">伦敦金</p>
						<app-pie :more="morej" :less="lessj" :circle1="circle1" :circle2="circle2">	</app-pie>
					</div>
					<div class="flex">
						<div class="tip">
							<p class="name">多头</p>
							<span class="bg bgRed"></span>
							<p class="digitR">{{morej}}%</p>
						</div>
						<div class="tip none">
							<p class="name">空头</p>
							<span class="bg bgGreen"></span>
							<p class="digitG">{{lessj}}%</p>
						</div>
					</div>
				</div>
				<div class="ratio"> 
					<div class="graphic">
						<p class="graphicT">伦敦银</p>
						<app-pie :more="morey" :less="lessy" :circle1="circle1" :circle2="circle2">	</app-pie>
					</div>
					<div class="flex">
						<div class="tip">
							<p class="name">多头</p>
							<span class="bg bgRed"></span>
							<p class="digitR">{{morey}}%</p>
						</div>
						<div class="tip none">
							<p class="name">空头</p>
							<span class="bg bgGreen"></span>
							<p class="digitG">{{lessy}}%</p>
						</div>
					</div>
				</div>
			</div>
			<p class="txRight">以上建议仅供参考，不作为投资唯一依据</p>

			<!-- 操作建议 -->
			<h2 class="subtitle">操作建议</h2>
			<div class="flex"> 
				<div class="advise">
					<p class="h1">{{operation.llgbt}}</p>
					<p class="adDetail">上方阻力：{{operation.llgzlw}}</p>
					<p class="adDetail">下方支撑：{{operation.llgzcw}}</p>
				</div>
				<div class="advise">
					<p class="h1">{{operation.llsbt}}</p>
					<p class="adDetail">上方阻力：{{operation.llszlw}}</p>
					<p class="adDetail">下方支撑：{{operation.llszcw}}</p>
				</div>
				<router-link to="/market/GoldTech" class="more"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></router-link>
			</div>
		</section>
		<section class="planContainer">
			<!-- —— 投资者保障计划 —— -->
			<img class="planBg" src="./img/index2.jpg" alt="">
			<h2 class="title"><i></i> 投资者保障计划 <i></i></h2>
			<div class="flex plans">
				<div class="plan" v-for="(item,index) in plans" :key="index" :class="{'active':index==tabIndex}" @click="tabPlan(index)"> 
					<p>{{item.t1}}<br>{{item.t2}}</p>
				</div> 
			</div>
			<transition-group name="fade-desc"> 
				<div class="desc" :class="'desc'+index" v-for="(item,index) in descs" :key="index" v-show="index === tabIndex">{{item}} </div>
			</transition-group>
		</section>

		<section class="downloadContainer" v-pre>
			<!-- ——  MT4平台下载 —— -->
			<h2 class="title"><i></i> MT4平台下载 <i></i></h2>
			<p class="tips">国际通用 90%交易载体</p>
			<img class="phone" src="./img/index4.jpg" alt="MT4平台下载">
			<table class="table">
				<tr><td><img src="./img/index_09.jpg" alt=""><i>18</i> <br>种划线工具 </td><td><img src="./img/index_11.jpg" alt=""><p><i>9</i><br>种交易时段图表</p></td></tr>
				<tr><td><img src="./img/index_15.jpg" alt=""><p><i>30</i><br>种国际流行指标</p></td><td><img src="./img/index_17.jpg" alt=""><p><i>N</i><br>种自定义功能</p></td></tr>
			</table>
			<div class="flex download">
				<a href="https://itunes.apple.com/cn/app/metatrader-4/id496212596?mt=8" onclick="ga ('send','event','m_index',' download_ios ','content_first');" > <span>IOS版下载</span></a>
				<a href="http://www.golday.hk/GoldayMT4.apk" onclick="ga ('send','event','m_index',' download_android ','content_second');"><span>Android版下载</span></a> 
			</div>
		</section>

		<section class="gdContainer">
			<!-- ——  金盛·快而不凡 —— -->
			<h2 class="title"><i></i> 金盛·快而不凡 <i></i></h2>
			<p class="tips">让您体验极致交易快感</p> 
			<app-swiperText></app-swiperText>
		</section>
		<app-bottom></app-bottom> 
	</div> 
</template>

<script>
import swiper from './components/Swiper'
import swiperText from './components/SwiperText'
import bottom from './components/Bottom'
import footer from '../footer/Footer'
import pie from '../market/components/Pie'
export default {
	name: 'index',
	data(){
		return{
			circle1:"60%",
			circle2:"75%",
			tabIndex:0,
			banner:[],
			notice:{},
			graphs:[],
			operation:{},
			plans:[
				{
					t1:"提供无负数",
					t2:"结余保障"
				},{
					t1:"国际标准网络",
					t2:"安全技术"
				},{
					t1:"保护客户",
					t2:"个人隐私"
				}
			],
			descs:["为了让客户可以安心交易，金盛贵金属为客户提供「无负数结余保证」*，客户的交易账户将不会出现负数结余，并无须支付因此而产生的额外欠款*只适用于个人客户" ,"为确保客户可安心在网上进行各项交易，金盛贵金属已采用符合国际标准的网上编码技术，再配合其它专为互联网及网上交易而设的安保措施，可对抗各类型网络攻击及黑客行为，防止未经授权的登入和交易。" ,"金盛贵金属一直严格遵守由香港法定机构所颁布的私隐条例，更内部制定严谨的客户资料处理程序，所有客户资料及交易纪录均作高度保密及加密处理，防止个人资料外泄。 " ],
			morej:0,
	    	lessj:0 ,
	    	morey:0,
	    	lessy:0 
		}
	}, 
	created(){   
		 this.getDatas();
	}, 
	methods:{

		tabPlan(index){
			this.tabIndex =index;
		},
		getDatas(){
			/*let params = new URLSearchParams();
			params.append("p",1);*/ 
			this.$http.post('/Mobile/Index/ptgg',1) //最新公告
				.then((res)=>{  
					this.notice.notice = res.data[0].bt;
					this.notice.id = res.data[0].id;
				})
			this.$http.get('/GetScript/getMGraphs') //实时行情
				.then((res)=>{   
					let obj=res;  
					for(let i in obj){ 
						if(i != "QHKG"){
							obj[i].splice(1,2);
							obj[i].unshift(i); 
							this.graphs.push(obj[i]) 	
						} 
					} 
				});
			this.$http.get("/Mobile/Index/czjy")  //伦敦金多头空头
	  			.then((res)=>{   
	  				this.morej = res.data.llgkd;  
	  				this.lessj = res.data.llgkk;
	  				this.morey = res.data.llskd;  
	  				this.lessy = res.data.llskk;  
	  				
	  			})
			this.$http.get('/Mobile/Index/czjy') //操作建议
				.then((res)=>{ 
					this.operation = res.data;
				})

			
		}
	},
	filters:{
		toTxt:(value)=>{
			let txt;
			if(value == 'QLLG'){
				txt = "伦敦金";
			}else if(value == 'QLLS'){
				txt = "伦敦银";
			}else if(value == 'QUSDX' ){
				txt = "美元指数";
			}else if(value == 'QCL' ){
				txt = "纽约原油";
			}
			return txt;
		},
		getT:(value)=>{ 
			if(value > 0){
				return "▲";
			}else if(value < 0){
				return "▼";
			}
			  
		}
	},
    components:{
    	'app-swiper':swiper,
    	'app-swiperText':swiperText,
    	'app-bottom':bottom,
    	'app-footer':footer,
    	'app-pie':pie,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.downloadContainer,.gdContainer{
		background:#fff;
		padding-bottom:.6rem; 
	}
	.gdContainer{
		margin-top:.22rem;
	}
	.tips{
		text-align: center;
		font-size: 0.26rem; 
		color: #999;
		margin-top:-.3rem;
	}
	.phone{
		width:6.27rem;
		height:4.42rem;
		display:block;
		margin:.3rem auto;
	}
	.table{
		width:6.9rem;
		margin:0 auto ;
		border:1px solid #f2f2f2; 
	}
	.table img{
		width:.86rem;
		height:.75rem;
		float:left;
		vertical-align:middle;
		margin-right:.1rem;
	}
	.table i{
		font-size:.32rem;
	}
	.table td{
		font-size: 0.26rem;
		height:1.18rem;
		padding-left:.3rem;
		border:1px solid #f2f2f2;
		vertical-align:middle;
	}
	.download{
		padding:0 .96rem;
	}
	.download span{
		width: 2.6rem;
		height: 0.7rem;
		line-height:.7rem;
		text-align: center;
		font-size: 0.3rem;
		background-color: #f6f6f6;
		border-radius: 0.06rem;
		border: solid 0.02rem #999999;
	}


	.marketContainer{
		width:100%;
		padding: 0 .3rem;
		background:#e8e8e8;
		padding-bottom:.4rem;
	}
	.notice{
		width:100%;
		height: 0.6rem;
		background-color: #fff;
		color: #ff5555;
		padding:0 .3rem;
		position:relative;
		margin-top:.2rem;
		line-height:.6rem;
	}
	.notice li{
		width:100%;
		line-height:.6rem;
		font-size: 0.26rem; 
	}
	.title{ 
		font-size: 0.44rem;  
		color: #000;
		text-align: center;  
		text-align: center;
		padding:.4rem 0 .3rem;  
		position: relative;
	} 
	.title i{
		display:inline-block;
		width: 0.7rem;
		height: 0.02rem; 
		background-color: #666666;
		border-radius: 0.01rem; 
		vertical-align:middle;
	}
	.data{
		width:1.65rem;
		height: 1.8rem;
		background-color: #ffffff;
		border-radius: 0.06rem;
		text-align: center;
		padding: .2rem 0;
		color: #e84848; 
	} 
	.data.green{
		color: #00a003;
	}
	.data .name{
		font-size: .26rem;
		color:#666;  
	}
	.data .num{
		font-size: .3rem;
		margin-top:.1rem;
		font-weight:bold; 
	}
	.data .rate{
		font-size: .22rem; 
	}
	.subtitle{
		font-size: 0.3rem; 
		color: #333333;
		margin:.3rem 0 .2rem .15rem;
	}
	.ratio{
		width:3.4rem; 
		height: 3.6rem;
		background-color: #ffffff;
		border-radius: 0.06rem;
	}
	.graphic{
		width: 100%; 
		margin:.1rem auto 0;
		position:relative;
	}
	.graphicT{
		position:absolute;
		top:0;
		left:0;
		width: 100%;
		height:100;
		font-size:.3rem;
		color:#333;
		line-height:2.5rem;
		text-align: center;
	}
	.tip{
		width:49%;
		border-right:.02rem solid #d7d7d7;
		text-align: center;
		font-size:0;  
	}
	.tip.none{
		border:none;
	}
	.tip .name{
		font-size:.26rem;
	}
	.tip .bg{
		width: 0.8rem;
		height: 0.08rem;
		background-color: #e84848;
		border-radius: 0.04rem;
		margin:.05rem 0 .02rem ;
	}
	.tip .bgRed{ 
		background-color: #e84848; 
	}
	.tip .bgGreen{ 
		background-color: #00a003; 
	}
	.tip .digitR{
		font-size: 0.26rem; 
		color: #e84848;
	}
	.tip .digitG{
		font-size: 0.26rem; 
		color: #00a003;
	}
	.txRight{
		font-size: 0.22rem; 
		line-height: .55rem; 
		color: #666666;
		text-align: right;
	}
	.advise{
		width:100%;
		height: 1.6rem;
		background-color: #ffffff;
		border-radius: 0.06rem;
		padding:.2rem .3rem;
		margin-bottom:.2rem;
	}
	.advise .h1{
		font-size: 0.26rem; 
		color: #333333;
		margin-bottom:.1rem;
	}
	.advise .adDetail{
		font-size: 0.24rem; 
		font-family: PingFang-SC-Medium;
		line-height: 0.36rem; 
		color: #666666;
	}
	.more{
		width:100%;  
		text-align: center;
		font-size: 0.3rem;
	}
	.more img{
		width: .32rem;
   	 	height: .32rem;
    	vertical-align: middle;
	}  
	.more i{
		vertical-align: middle;
	}
	.banner{
		width:100%;
		height:6.8rem;
		position:relative;
	}
	.openAccount{
		width:100%;
		position:absolute;
		bottom:.75rem;
		left:0;
		padding:0  1rem;
	}
	.openAccount span{ 
		width: 2.6rem;
		height: 0.7rem;
		border-radius: 0.06rem;
		border: solid 1px #fff; 
		font-size: .3rem; 
		color: #fff;
		text-align: center;
		line-height:.7rem;
	}
	.openAccount span.two{
		background:#fff;
		color: #666;
	}
	.planContainer{
		width:100%;
		height:6.8rem;
		/* background:url("./img/index2.png") no-repeat center;
		background-size:cover; */
		padding:0 .3rem .9rem .3rem;
		position:relative;
		border-bottom:.25rem solid #e8e8e8;
	}
	.planContainer .planBg{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:6.6rem;
	}
	.plan{
		width:32%;
		height: 2rem; 
		border-radius: 0.06rem;
		padding-top:1.1rem; 
		position: relative;
	}
	.plans .plan:nth-child(1){
		background:#fbf3e8 url("./img/index21.png") no-repeat top .26rem center;
		background-size:.63rem .72rem;
	} 
	.plans .plan:nth-child(2){
		background:#fbf3e8 url("./img/index31.png") no-repeat top .26rem center;
		background-size:.75rem .72rem;
	} 
	.plans .plan:nth-child(3){
		background:#fbf3e8 url("./img/index41.png") no-repeat top .26rem center;
		background-size:.76rem .73rem;
	} 
	.plans .plan.active:nth-child(1){
		background:#ff5555 url("./img/index22.png") no-repeat top .26rem center;
		background-size:.63rem .72rem;
	} 
	.plans .plan.active:nth-child(2){
		background:#ff5555 url("./img/index33.png") no-repeat top .26rem center;
		background-size:.75rem .72rem;
	} 
	.plans .plan.active:nth-child(3){
		background:#ff5555 url("./img/index44.png") no-repeat top .26rem center;
		background-size:.76rem .73rem;
	}  
	.plan p{
		font-size: 0.3rem; 
		line-height: 0.38rem; 
		color: #686867;
		text-align: center; 
	} 
	.plan.active p{
		color:#fff;
	}
	.planContainer .desc{ 
		width:92%; 
		height: 2.2rem;
		background: rgba(250,241,227,.7); 
		border-radius:3px;
		font-size:.26rem;
		padding:.3rem;
		margin-top:.4rem; 
		position: absolute;
	    bottom: .65rem;
	    left: 4%;
	} 
	.desc::after{
		content:'';
		position:absolute;
		top:-.38rem;
		left:13%; 
		width:0;
		height:0;
		border-top:.2rem solid transparent;
		border-left:.2rem solid transparent;
		border-right:.2rem solid transparent;
		border-bottom:.2rem solid hsla(37,70%,94%,.7);
	}
	.desc1::after{
		position:absolute;
		top:-.38rem;
		left:50%;
		transform:translateX(-50%);
	}
	.desc2::after{
		position:absolute;
		top:-.38rem;
		left:82%; 
	}
	.show{display:block!important;}
	
	/* 投资者保障计划过渡 */
	
	.fade-desc-enter-active {
	    transform: translateX(0);
	    transition: all .5s ease;
	}
	.fade-desc-leave-active {
	    transform: translateX(-100%);
	    transition: all .5s ease;
	}
	.fade-desc-enter {
	    transform: translateX(100%);
	}
	.fade-desc-leave {
	    transform: translateX(0);
	}
	 
</style>

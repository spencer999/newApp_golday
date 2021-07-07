<template>
	<div class="index"> 
		<!-- 轮播组件 -->
		<div class="banner"> 
			<app-swiper></app-swiper> 
		</div>
		<!-- 上方导航块 -->

		<div class="flex nav">
 			<!-- <router-link class="navItem" tag="div" to="/aboutGolday">
 				<img class="pic" src="../img/nav1.png">
 				<span class="navName">关于金盛</span>
 			</router-link> -->
 			<router-link class="navItem" tag="div" to="/customer/discount">
 				<div class="pic"><img src="./img/nav1.png"></div>
 				<span class="navName">优惠活动</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/trade/classify">
 				<div class="pic"><img src="./img/nav2.png"></div>
 				<span class="navName">交易产品</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/trade/rules">
 				<div class="pic"><img src="./img/nav3.png"></div>
 				<span class="navName">交易细则</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/trade/download">
 				<div class="pic"><img src="./img/nav4.png"></div>
 				<span class="navName">平台下载</span>
 			</router-link>
 			<div class="navItem">
 				<a href="https://vip.golday.hk/Mobile/Index/login.html">
 					<div class="pic"><img src="./img/nav5.png"></div>
 					<span class="navName">用户中心</span>
 				</a>
 			</div> 
 			<router-link class="navItem" tag="div" to="/customer/school">
 				<div class="pic"><img src="./img/nav6.png"></div>
 				<span class="navName">金盛课堂</span>
 			</router-link>
 			  
 			<router-link class="navItem" tag="div" to="/help">
 				<div class="pic"><img src="./img/nav7.png"></div>
 				<span class="navName">常见问题</span>
 			</router-link>
 			<router-link class="navItem" tag="div" to="/user">
 				<div class="pic"><img src="./img/nav8.png"></div>
 				<span class="navName">用户之声</span>
 			</router-link>
		</div>
		<!-- 开户按钮 -->
		<div class="flex openAccount">

			<a href="https://www.golday.hk/Mobile/Activity/planmt.html" onclick="ga ('send','event','m_index','open_demo_account','content_first');" ><img src="./img/demoimg.png" alt=""><span>模拟开户</span></a>
			<a href="https://m.golday9999.com/Mobile/Index/real_accountt.html" class="two" onclick="ga ('send','event','m_index','open_real_account','content_first');"><img src="./img/realimg.png" alt=""><span >真实开户</span></a>
		</div>
		<!-- 最新公告 -->
		<ul class="notice">
			<router-link :to="{path:'/detail',query:{id:notice.id,title:'平台公告',type:1}}">
			<li>最新公告 | {{notice.bt}}</li>
			</router-link>
		</ul> 
			 
		<div class="flex pd30">
			<div class="data" :class="{'green':item[1] == 0}"  v-for="(item,index) in graphs" :key="index"> 
				<p class="name">{{item[0] | toTxt}}</p>
				<p class="num">{{item[2]}} {{item[1] | getT}}</p>
				<p class="rate">{{item[3]}}  </p>
				 
			</div>
			 
		</div> 
		<!-- 实时交易参考 -->
		<section class="section">
			<div class="titleBox1">
				<h2 class="bigtitle"> <i></i>  实时交易参考 <i></i> </h2>
			</div>
			<div class="tradeBox">

				<div class="ideaBox" v-for="(item,index) in teachers" :key="index">
					<div class="avator">	
						<img :src="item.avatar" alt="">
						<div class="info">
							<p class="tea">{{item.account}}</p>
							<p class="time">{{item.time}}</p>
						</div>
					</div>
					<p class="idea">{{item.content}}</p>
				</div>
				 
			</div>
		</section> 
		<!-- 行业热点新闻 -->
		<section>
			<div class="titleBox2">
				<span :class="{'active':newsTabber === true}" @click="newsTab(1)">行业热点新闻</span>
				<span :class="{'active':newsTabber === false}" @click="newsTab(2)">实盘策略</span>
				<span><a href="https://m.golday9999.com/Mobile/Index/economic_calendar.html" target="_blank">财经日历</a></span>
			</div>
			<!-- 热点新闻 -->
			<div class="newsBox" v-if="newsTabber">	
				<div class="newSwiper swiper1 swiper-container">
				    <div class="swiper-wrapper"> 
				    	 
				       	<router-link :to="{path:'/detail',query:{id:item.id,title:'热点新闻',type:9}}"  tag="div"   class="swiper-slide slide"   v-for="(item,index) in newsSwiper" :key="index">
				           <img :src="item.home_pic3">
				        
					        <p class="newsTitle">{{item.bt}}</p>
							<p class="newsDetail" v-html="item.zy"> </p>
							<p class="newsTime"> {{item.sj}}</p>
						</router-link> 
				        
				     </div>
				     
				    <div class="swiper-pagination pagination pagination1"></div>
				 
				      <div class=" prev1"></div>
				      <div class=" next1"></div> 
				</div>
				
			</div>
			<!-- 实盘侧罗 -->
			<div class="newsBox" v-if="!newsTabber">	
				<div class="newSwiper swiper2 swiper-container">
				    <div class="swiper-wrapper"> 
				    	 
				        <router-link :to="{path:'/detail',query:{id:item.id,title:'实盘策略',type:7}}"  tag="div"   class="swiper-slide slide"   v-for="(item,index) in panSwiper" :key="index">
				            <img :src="item.home_pic3"> 
					        <p class="newsTitle">{{item.bt}}</p>
							<p class="newsDetail" v-html="item.zy"> </p>
							<p class="newsTime"> {{item.sj}} </p>
						</router-link>  
				     </div>
				     
				    <div class="swiper-pagination pagination pagination2"></div>
				 
				      <div class=" prev2"></div>
				      <div class=" next2"></div> 
				</div>
				
			</div>
		</section>
		<!-- ——  平台下载 —— -->


		<section class="section">
			<div class="titleBox3">
				<h2 class="bigtitle"> <i></i>  平台下载 <i></i> </h2>
			</div>
			<div class="downloadTab">
				<div class="tab a1" :class="{'active':download === true}" @click="tabDownload()">
					<p class="p1">APP下载</p>
					<p class="p2">指尖交易让赚钱更简单</p>
				</div>
				<div class="tab a2" :class="{'active':download === false}" @click="tabDownload()">
					<p class="p1">MT4平台下载</p>
					<p class="p2">国际通用交易软件</p>
				</div>
				
			</div>
			<div class="downloadBox">
				<div class="download" v-if="download">
					<div>
						<p class="left">
							<b class="big">金盛贵金属APP</b> <b class="ruby">集开户、交易、存取款、实时报价、行情播报、专家分析、客服咨询</b> 等功能于一身，随时随地手机交易，即时把握最佳盈利时机！ 
						</p>
						<img class="right" src="./img/downapp.png" alt="">
					</div>
					<div class="flex appandriod">
						<span> <a href="https://www.golday.hk/Home/Qr/download_QR.html" target="_blank"><img src="./img/apple.png" alt=""> iOS 下载</a></span>
						<span> <a href="https://www.golday.hk/Home/Qr/download_QR.html" target="_blank"><img src="./img/Android.png" alt="">  Android 下载</a></span>
					</div>
				</div>
				<div class="download" v-if="!download">
					<img class="mt4img" src="./img/downmt4.jpg" alt="">
					<div class="flex appandriod">
						<span> <a href="https://www.golday9999.com/Mobile/Activity/download_mt4_QR.html" target="_blank"><img src="./img/apple.png" alt=""> iOS 下载</a></span>
						<span> <a href="https://www.golday9999.com/Mobile/Activity/download_mt4_QR.html" target="_blank"><img src="./img/Android.png" alt="">  Android 下载</a></span>
					</div>
				</div>
				
			</div>
			
		</section>
		<!-- ——  关于我们 —— -->
		<section class="section">  
			<div class="titleBox4">
				<h2 class="bigtitle"> <i></i>  关于我们 <i></i> </h2>
			</div>
			<div class="aboutus">
				<h3>7年稳健运营<br>香港金银业贸易场AA类会员047号行员</h3>
				<p>金盛贵金属(m.golday9999.com)自成立以来，先后荣获 【最具投资者信赖】、【行业类十佳企业奖】、【最具创新大奖】、【创新应用系统奖】、【年度优秀交易平台】等多项荣誉，足以彰显金盛贵金属的资质和综合实力，且单笔交易0.1手以上均提供【交易编码】，有据可查，保证所有交易公开透明，受到行业和投资者的充分认可与肯定。</p>
			</div>
			<img class="matop" src="./img/matop.jpg" alt="">
			<div class="maflex">
				<div class="maitem">
					<img class="maimg" src="./img/hkgolday.png" alt=""><!-- 
					<input type="hidden" class="hide"  id="copy1" value="goldaycs1"> -->
					<span class="copy copy1" data-clipboard-text="goldaycs1" @click="copy('copy1')"></span>
				</div>
				<div class="maitem">
					<img class="maimg" src="./img/bb1.png" alt=""><!-- 
					<input type="hidden"  class="hide" id="copy2" value="800067971"> -->
					<span class="copy copy2" data-clipboard-text="800067971" @click="copy('copy2')"></span>
				</div>
				
			</div>
			
		</section>
		 

		<app-bottom></app-bottom>
	</div> 
</template>

<script>
import swiper from './components/swiper' 
import bottom from './components/Bottom' 
import Swiper from 'swiper';
import Clipboard from 'clipboard'
import 'swiper/dist/css/swiper.min.css'; 
export default {
	name: 'index',
	data(){
		return{ 
			download:true, 
			newsTabber:true,
			notice:{
			 	bt:null,
        		id:null
      		},
      		timeStartFormat:null,
			graphs:[], 
			newsSwiper:[],
			panSwiper:[],
			teachers:[],
			copyTxt1:"goldaycs1",
			copyTxt2:"800067971"
		}
	},  
	created(){ 
		/*this.getTimeStamp(); */ 
		this.getDatas();
	}, 
	methods:{
		copy(copyClass){
      		let clipboard = new Clipboard('.'+copyClass);
     		clipboard.on('success', e => {
        	console.log('复制成功', e)
	        alert("复制成功！");
       		 // 释放内存
        	clipboard.destroy();
      		})
      	},	
		newsTab(num){
			if(num == 1){
				this.newsTabber = true;
			}else{
				this.newsTabber = false;
			}
		},
		tabDownload(){
			this.download = !this.download;
		},
		 
		getDatas(){
			/*let params = new URLSearchParams();
			params.append("p",1);*/ 
			this.$http.post('/Mobile/Index/ptgg',1) //最新公告
				.then((res)=>{  
					this.notice  = res.data[0]; 
				})

			this.$http.get('/Home/GetScript/getMGraphs') //实时行情
				.then((res)=>{   
					let obj=res;
					console.log(obj);
          			for(let i in obj){
			            if(i.indexOf(2) != -1){  
			                console.log(obj[i][1]);
							if(obj[i][1].indexOf("-") != -1){
			            		obj[i].unshift(0);
			            	}else{
			            		obj[i].unshift(1);
			            	}

			            	 obj[i].unshift(i);
			                this.graphs.push(obj[i])
			              
			            }
          			}
				});

			this.$http.get('/Home/Index2020/viewpoint') //实时交易
				.then((res)=>{  
					this.teachers = res.data.records;
				})
			this.$http.post('/Mobile/Index/hyrdxw',1) //行情热点
				.then((res)=>{  
					this.newsSwiper  = res.data.slice(0,3);
					this.$nextTick(() => {
		            // DOM更新了
		            // swiper重新初始化
		             /*eslint-disable no-new */
		            let  mySwiper1 = new Swiper('.swiper1', {
		            	autoplay: 2000,
		             	pagination : '.pagination1',
		             	prevButton:'.prev1',
						nextButton:'.next1',
		            })
		          }) 
				}) 
			this.$http.post('/Mobile/Index/spcl',1) //实盘策略
				.then((res)=>{  
					 this.panSwiper  =res.data.slice(0,3);
					this.$nextTick(() => {

			            // DOM更新了
			            // swiper重新初始化
			            /* eslint-disable no-new */
			            let  mySwiper2 = new Swiper('.swiper2', {
			            	autoplay: 2000,
			             	pagination: '.pagination2',
			            	prevButton:'.prev2',
							nextButton:'.next2',
			            })
			            
			        })
				}) 
			
		},
		/*getTimeStamp(){
			let timeStart;
		    let curTime = new Date().getTime();
		    let startDate = curTime - (7 * 3600 * 24 * 1000);
		    startDate = new Date(startDate).toLocaleDateString();
		    if(startDate.indexOf("年") >-1){ 
		        startDate = startDate.replace(/年/g,'\/');  
		    }
		    if(startDate.indexOf("月") >-1){
		        startDate = startDate.replace(/月/g,'\/');   
		    }
		    if(startDate.indexOf("日") >-1){
		        startDate = startDate.replace(/日/g,'');    
		    }
		    startDate = startDate.split("/");  
		    timeStart=startDate.join("-"); 
		    this.timeStartFormat= timeStart;
		}*/
	},
	filters:{
		toTxt:(value)=>{
			let txt;
			if(value == 'QLLG2'){
				txt = "伦敦金";
			}else if(value == 'QLLS2'){
				txt = "伦敦银";
			}else if(value == 'QUSDX2' ){
				txt = "美元指数";
			}else if(value == 'QC2L' ){
				txt = "纽约原油";
			}
			return txt;
		},
		getT:(value)=>{ 
			if(value  == 1){
				return "↑";
			}else if(value  == 0){
				return "↓";
			}
			  
		}
	},
    components:{
    	'app-swiper':swiper, 
    	'app-bottom':bottom, 
    	 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	
	.pagination{
		top:1.8rem;
		left:auto!important;
		right:.3rem;
		width:2rem!important;
		height: 1rem;
	}
	.swiper-pagination .swiper-pagination-bullet-active{
   		background: #ff5555;
  	}
	.swiper-pagination span{
		width:.18rem;
		height: .18rem;
		border-radius: 30px;
		opacity: 1;
		margin: 0 .1rem;
		background:#dee0e8;

	} 
	.prev1,.prev2{
		width:.27rem;
		height: .49rem;
		background: url("./img/swiperLeft.png") no-repeat top center;
		background-size:.27rem .49rem;
	    left: 10px;
	    top:1.7rem;
	    position: absolute;
	    right: auto;
	    margin-top: -22px;
	    z-index: 10;
	    cursor: pointer;
	}
	.next1,.next2{
		width:.27rem;
		height: .49rem;
		background: url("./img/swiperLeft.png") no-repeat top center;
		background-size:.27rem .49rem;
		transform: rotate(180deg);
	    right: 10px;
	    top:1.7rem;
	    position: absolute;
	     
	    margin-top: -22px;
	    z-index: 10;
	    cursor: pointer;
	}
	.titleBox2{
		width:100%;
		height: 1.25rem;
		background: url("./img/bgnews.jpg") no-repeat top center;
		background-size:7.5rem 1.25rem;
		display: flex;
		padding:0 .3rem ;
		justify-content: space-between;
		align-items: center;
	}
	.titleBox2 span{
		height: 1.2rem;
		line-height: 1.2rem;
		font-size:.32rem;
		color:#c2b5a5;
		font-weight: bold;
		
	}
	.titleBox2 span.active{
		color:#fff; 
		border-bottom:.04rem solid #c2b5a5;
	}
	.newsBox{
		width:100%;
		padding:.3rem .3rem .4rem;
		background:#fff; 
	}
	.newsBox .newSwiper{
		width: 6.9rem;
		height: 6rem;
	}
	.newSwiper a img{
		width: 6.9rem;
		height: 3rem;
	}
	.newsBox p{
		color:#333;
		font-size:.28rem; 
	}
	.newsTitle{  
		font-weight: bold;
		line-height: .5rem;
		width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.newsDetail{
		line-height: 0.42rem;
		overflow:hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		 -webkit-box-orient:vertical;
		 -webkit-line-clamp:3;
	}
	.newsBox .newsTime{
		font-size: 0.26rem;
		margin-top:.1rem;
		color:#999;
		text-align: right;
	}
	.tradeBox{
		width:100%;
		padding:0 .3rem 0rem .3rem;
		height:6.55rem;
		overflow-y: scroll;
	}
	.tradeBox .ideaBox{
		width:100%;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid #e8e8e8;
	}
	.ideaBox .avator img{
		width:.8rem;
		height: .8rem;
		display: inline-block;
		vertical-align: middle;
	}
	.ideaBox .avator .info{
		display: inline-block;
		vertical-align: middle;
	}
	.ideaBox .info .tea{
		font-size: 0.3rem;
		color: #333333;
	}
	.ideaBox .info .time{
		font-size: 0.24rem;
		color: #999;
		line-height: 0.48rem;
	}
	.ideaBox .idea{
		font-size: 0.28rem;
		color: #333333;
		line-height: 0.42rem;
	}
	.downloadTab{
		width: 6.4rem;
		height: 1rem;
		margin:.3rem auto;
		background-color: #ffffff;
		border-radius: 7px;
		border: solid 0.02rem #ff5555;
		font-size: 0;
	}
	.downloadTab .tab{
		display: inline-block;
		width: 3.18rem;
		height: .98rem;
		text-align: center;
		padding-top:.1rem;
		color: #ff5555;
	}
	.downloadTab .tab .p2{
		font-size:.24rem; 
		opacity: 0.8;
	}
	.downloadTab .tab .p1{
		font-size:.32rem; 
	}
	.downloadTab .tab.active{
		background-color: #ff5555;
		color:#fff;
	}
	.downloadTab .a1.active{
		border-radius: 7px 0rem 0rem 7px;
	}
	.downloadTab .a2.active{
		border-radius: 0px 7px  7px 0;
	}
	.download{
		width:100%;
		height: 5.43rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 .3rem;
		flex-wrap: wrap;
	}
	.download .mt4img{
		width:6.9rem ;  
	}
	.download .right{
		width: 3.44rem;
		height: 4.3rem;
		vertical-align: middle;
	}
	.download .left{
		width: 3rem;
		font-size: 0.28rem;
		color:#333;
		vertical-align:middle;
		line-height: .45rem;
		display: inline-block;
	}
	.download .big{
		font-size: 0.4rem;
		color:#333; 
	}
	.download .ruby{
		font-size: 0.28rem;
		color: #ff5555;
	}
	.appandriod{
		width:100%;
		margin-top: .3rem;
	}
	.appandriod span{
		width: 3.35rem;
		height: 0.78rem;
		line-height: .78rem;
		text-align: center;
		font-size: 0.3rem;
		color:#fff;
		background-color: #cca95e;
		border-radius: 0.06rem;
	}
	.appandriod img{
		width:.28rem;
		height: .34rem;
		vertical-align: middle;
		margin-right:.1rem;
	}
	.index{
		position:relative; 
	}
	.section{
		width:100%;
		margin:0 auto .2rem;
		background: #fff;
		padding-bottom: .4rem;
	}
	.pd30{padding:.2rem .3rem;} 
	.nav{
		width:100%;
		padding: 0 .3rem .3rem;
   		  
		background:#fff; 
		box-shadow: 0 0 4px rgba(0,0,0,.2);
		-webkit-box-shadow: 0 0 4px rgba(0,0,0,.2);
	}
	.nav .pic{
		width:.9rem;
		height: .9rem;
		border-radius: 50%;
		background:#fbf2e9;
		text-align: center;
		line-height: .9rem;
		display: inline-block;
	}
 	.nav .pic img{
		width:.43rem; 
		vertical-align: middle;
	}
	.nav .navItem{
		width:1.5rem;
		text-align: center;
		font-size: 0;
		margin-top:.45rem;
	}
	.nav .navName{
		font-size:.26rem;
		margin-top:.25rem;
	}
	.notice{
		width:100%;
		height: 0.6rem;
		background-color: #fff;
		color: #ff5555;
		padding:0 .3rem;
		position:relative; 
		line-height:.6rem;
	}
	.notice li{
		width:100%;
		line-height:.6rem;
		font-size: 0.26rem;
	    overflow: hidden;
	    text-overflow:ellipsis;
	    white-space:nowrap;
	}
	.bigtitle{ 
		font-size: 0.44rem;  
		color: #fff;
		text-align: center;  
		text-align: center;
		padding:.4rem 0;  
		position: relative;
	} 
	.bigtitle i{
		display:inline-block;
		width: 0.7rem;
		height: 0.02rem; 
		background-color: #fff;
		border-radius: 0.01rem; 
		vertical-align:middle;
	}
	.data{
		width: 2.2rem;
		height: 1.31rem;
		background-color: #ffffff;
		border-radius: 0.06rem;
		text-align: center;
		padding: .15rem 0;
		color: #ff3334; 
	} 
	.data.green{
		color: #33cc99;
	}
	.data .name{
		font-size: .24rem;
		color:#333;  
	}
	.data .num{
		font-size: .32rem;
		/* margin-top:.1rem; */
		font-weight:bold; 
	}
	.data .rate{
		font-size: .22rem; 
	}
	 
	 
	.banner{
		width:100%;
		height:3.6rem;
		position:relative;
	}
	.openAccount{
		width:100%; 
		padding:0.2rem  .3rem; 
	}
	.openAccount img{
		width:.37rem;
		margin-right:.1rem;
		vertical-align: middle;
	}
	.openAccount a{ 
		width: 3.35rem;
		height: 0.78rem; 
		box-shadow: 0rem 0.05rem 0rem 0rem 
		#b58f3f;
		border-radius:3px; 
		font-size: .3rem; 
		color: #fff;
		text-align: center;
		line-height:.8rem; 
	    background: #cca95e url("./img/demo.png")no-repeat left top  ;
	    background-size:.7rem .38rem;
	}
	.openAccount a.two{ 
	    background: #ff5555 url("./img/real.png")no-repeat right top ;
	    background-size:1rem .38rem;
	    box-shadow: 0rem 0.05rem 0rem 0rem 
			#de3535;
		padding-right: .3rem;
	}
	.titleBox1{
		width:100%;
		background: url("./img/bgtrade.jpg") no-repeat top center;
		background-size:7.5rem 1.25rem;
	}
	.titleBox3{
		width:100%;
		background: url("./img/bgdownload.jpg") no-repeat top center;
		background-size:7.5rem 1.25rem;
	}
	.aboutus{
		padding:.3rem;
		color:#333;
	}
	.aboutus h3{
		font-size: 0.36rem;
		line-height: .48rem; 
	}
	.aboutus p{
		font-size: 0.28rem;
		line-height: .42rem; 
		margin-top:.3rem;
	}
	.titleBox4{
		width:100%;
		background: url("./img/bgaboutus.jpg") no-repeat top center;
		background-size:7.5rem 1.25rem;
	}
	.show{display:block!important;}
	.matop{
		width:4.46rem;
		height: .64rem;
		margin:0 auto;
		display: block;
	}
	.maflex{
		display: flex;
		justify-content: space-between;
		padding:.3rem .37rem 0;
	}
	.maitem{
		position: relative;
	}
	.copy{
		position: absolute;
		right:0;
		bottom:.2rem;
		width:1rem;
		height: .8rem; 
	}
	.maimg{
		width:3.2rem;
		height: 3.9rem;
	}
	 
	 
</style>

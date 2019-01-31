<template>
	<div class="newYear" v-if="newYearAct">
		<!-- 新年送猪福，天降红包雨倒计时 -->
		<div class="timeoutBox" v-show="timeOutShow">
			<span class="close" @click="changeTimeOut"> × </span>
			<p class="num">{{threeTimeOut}}</p>
		</div>

		<!-- 倒计时结束，开始红包雨 -->
		<ul v-show="bagRainShow">
			<li v-for="item in bags" :key="item.id" :style="{transform:item.trans,left:item.left}"@click="clickBag"><img  :class="item.cl" :src="item.image" alt="">{{item.id}}</li>
		</ul> 
		<!-- 点中红包，等待拆开 -->
		<section class="contain openBag"  v-show="openBagShow">
			<span class="close" @click="closeNewYearAct"> × </span>
			<div class="openIt" @click="openBag"></div>
			<img class="blessing" :src="blessingImg" alt="">
		</section>
		<!-- 填写账号 -->
		<section class="contain login" v-show="loginBoxShow">	
			<span class="close" @click="closeNewYearAct"> × </span>
			<div class="formBox">
				<p class="title">请提供您的真实交易账号</p>
				<div class="line">
					<input type="text" placeholder="请填写您的交易账号" v-model="account.login"  > 
				</div>
				<div class="line"> 
					<input type="text" placeholder="请填写您的手机号" v-model="account.mobile" > 
				</div>
				<div class="fitch" @click="comfirmUp">确认提交</div>
				<p class="noyet">还没有账号，立即<a href="https://www.golday.hk/Mobile/Index/real_account.html"> <i>免费开户</i> </a></p>
			</div>
		</section>
		<!-- 抽中红包或赠金 -->
		<section class="contain getBag" v-if="getBagShow">
			<span class="close" @click="closeNewYearAct"> × </span>
			<p class="bagTitle">恭喜您！抽中<span class="fInherit">{{packetName}}</span></p>
			<b class="money">{{moneyNum}}</b><i class="unit">{{unit}}</i>
			<p class="fitch" @click="fitchBag">领取</p>
			<p class="rules" @click="changeRuleShow">查看活动规则>>> </p>
		</section>
		<!-- 现金红包领取成功 -->
		<section class="contain success" v-if="redPacketShow" >
			<span class="close" @click="closeNewYearAct"> × </span>
			<p class="bagTitle">提交成功</p>
			<img class="kefu" src="./img/gzh.jpg" alt="">
			<p class="tip">请扫描上方二维码<br>联系客服立即领取红包</p>
			<p class="rules" @click="changeRuleShow">查看活动规则>>> </p>
		</section>
		<!-- 赠金领取成功 -->
		<section class="contain success" v-if="sendJinShow">
			<span class="close" @click="closeNewYearAct"> × </span>
			<p class="bagTitle mar">提交成功</p>
			<p class="tip">客服将尽快处理
			<br>并给您发放相应的赠金</p>
			<p class="rules" @click="changeRuleShow">查看活动规则>>> </p>
		</section>

		<!-- 活动规则 -->
		<section class="contain actRuleBg" v-if="ruleShow">
			<span class="close" @click="changeRuleShow"> × </span>
			<div class="actRule">
				<h3>一、活动奖励：</h3>
				<p>活动期间，用户每天登录金盛官网，点击屏幕中的红包，即可随机获得微信红包或赠金红包。</p>
				<h3>二、奖励说明：</h3>
				<p></p>
				<p>1.抽到微信红包可扫描客服二维码直接发放；赠金红包则在中奖后24小时内发放</p>
				<p>2.赠金红包需用户交易账户内资金大于50美元才能添加，账户中无资金的需入金50美元以上才会到账。</p>
			</div>
		</section>
	</div>
</template>

<script>
import qs from 'qs'
export default{
	name:"newYearBag",
	data(){
		return{
			newYearAct:false,
			threeTimeOut:3,
			timeOutShow:true,
			bags:[],
			bagRainShow:false,
			openBagShow:false,
			blessingImg:null,
			loginBoxShow:false,
			account:{
				login:null,
				mobile:null
			} , 
			getBagShow:false,
			packetName:null,
			moneyNum:null,
			unit:null,
			ruleShow:false,
			redPacketShow:false,
			sendJinShow:false,
			controlRain:false,
			type:null //获奖类型
		}
	},
	created(){
		/*随机生成红包祝福语*/
		let srcNum= parseInt(Math.random()*(6-1)+1);
		this.blessingImg = 'static/img/fu'+srcNum+'.png';

		//检查活动是否开始
		this.$http.get("/Activity2019/RedBag201902/checkTime")
			.then((res)=>{ 
/**************************************************************上线时status == -11 活动开始************************************************************/
				if(res.status == -11){
					this.newYearAct = true;
				}
			})
	},
	mounted(){
		let time =4;
		let threeInterval = setInterval(()=>{
			time--;
			this.threeTimeOut= time;
			if(time == 0){
				clearInterval(threeInterval);
				this.timeOutShow = false;//倒计时窗口关闭
				this.controlRain = true;//显示红包雨窗口
				this.init(); //红包雨初始
				this.bagRain(); //红包雨计时器
			}
		},1000);  
		 
		 
	},
	watch:{
		controlRain(){
			this.bagRainShow = this.controlRain; 
		},
	},
	methods:{ 
		/*倒计时窗口关闭*/
		changeTimeOut(){
			this.timeOutShow = false; 
			this.newYearAct = false;
			this.controlRain = false;
			 
		},
		init(){ 
			let hb = parseInt(Math.random()*(4-1)+1);
			let left = parseInt(Math.random()*(7-0.8)+0.1);
			let rot = parseInt(Math.random()*(20-(-30))-30) + "deg"; 
			this.bags.push({ 
				cl:"bag"+hb,
				image:"static/img/redbag"+hb+".png",
				left:left+"rem" ,
				trans:"rotate("+rot+")"
			}); 
		  
		},
		bagRain(){ 
			let rainInterval = setInterval(()=>{
				this.init(); 
				if(!this.controlRain){
					clearInterval(rainInterval);
				}
			},300)
			/*setTimeout(()=>{
				clearInterval(rainInterval);
				this.newYearAct = false;
			},20000)*/
		}, 
		/*点击红包雨，显示祝福拆红包窗口*/
		clickBag(){ 
			this.controlRain = false;
			this.openBagShow = true; 

		},
		/*点击拆，显示显示登录窗口*/
		openBag(){
			this.openBagShow = false; 
			this.loginBoxShow = true; 

		},
		/*账号输入，确认提交*/
		comfirmUp(){
			if(this.account.login ===''|| this.account.mobile === ""){
				alert("请填写交易账号和手机号");
				return false;
			}
			if(!/^\d{8}$/.test(this.account.login)){
				alert("请填写正确的交易账号");
				return false;
			}
			if(!/^1[3-9]\d{9}$/.test(this.account.mobile)){
				alert("请填写正确的交手机号");
				return false;
			}
			let postData = qs.stringify(this.account);
			this.$http.post("/Activity2019/RedBag201902/redBag201902",postData)
				.then((res)=>{
					this.account.login='';
					this.account.mobile='';
					if(res.status==1){
						this.loginBoxShow = false; 
						this.type = res.type;
						if(res.type == 1){ 
							this.packetName = "红包";
							this.moneyNum = res.prize_name;
							this.unit = "元";
						}else if(res.type == 2){ 
							this.packetName = "赠金";
							this.moneyNum = res.prize_name;
							this.unit = "美元"; 
						} 
						this.getBagShow = true;//显示抽中金额窗口
					}else{
						alert(res.info);
					}
				}) 
				
		},
		fitchBag(){
			this.getBagShow = false;
			if(this.type == 1){
				this.redPacketShow = true;
			}else if(this.type == 2){
				this.sendJinShow = true;
			}
			
		},
		changeSendJinShow(){ 
			this.sendJinShow = !this.sendJinShow;
		}, 
		changeRuleShow(){ 
			this.ruleShow = !this.ruleShow;
		},
		closeNewYearAct(){ 
			this.newYearAct = false;
		},  

		

	}
}
</script>

<style scope>
	.newYear{
		position: fixed;
		top:0;
		width:100%;
		height:100%;
		z-index:100;
		background:rgba(0,0,0,.5);
	}
	/* 倒计时 */
	.timeoutBox{
		width:7.5rem;
		height:6.9rem;
		margin:3rem auto;
		position:relative;
		background:url("./img/timeout.png") no-repeat center;
		background-size:7.5rem 6.9rem;
	}
	.close{
		width:.5rem;
		height: .5rem;
		line-height: .45rem;
		font-size: .45rem;
		border-radius: 50%; 
		border:1px solid #fcaa2c;
		color:#fcaa2c;
		text-align: center;
		position: absolute;
		top:-1rem;
		right: .4rem;
	}
	.timeoutBox .num{
		color:#fff1c7;
		font-size:.5rem;
		font-weight: bold;
		text-align: center;
		position:absolute;
		top:1.5rem;
		left:50%;
		transform:translateX(-64%);	
	}
	/* 红包雨 */
	.newYear ul li{  
		position: absolute;
	    top:-2.3rem; 
	   	z-index: 1000;
	}
	@keyframes redImg {
	    0% {
	        top:0;
	    }
	    100% {
	        top: 100%;
	    } 
	}
	.newYear li{ 
	    animation: redImg 3s 1 linear;
	    -webkit-animation: redImg 3s 1 linear;
	    -moz-animation: redImg 3s 1 linear;
	    -ms-animation: redImg 3s 1 linear;
	    -o-animation: redImg 3s 1 linear;
	    transition:all .3s;
	}
	.bag1{
		width:.96rem;
	}
	.bag2{
		width:.8rem;
	}
	.bag3{
		width:.65rem;
	} 
	.contain{
		width:6.68rem;
		height:7.64rem;
		margin:2.5rem auto; 
		position:relative;
	}
	/* 登录 */
	.login{ 
		padding-top:2.3rem; 
		background:url("./img/formbg.png") no-repeat center;
		background-size:6.68rem 7.64rem;
	}

	.formBox{
		width:5.5rem;
		height: 4.7rem; 
		margin:0 auto;
		text-align: center;
		box-sizing: border-box;
	}
	.formBox .title{
		font-size: .28rem;
		font-weight:bold;
		color:#f7ae5c;	 
	} 
	.formBox .fitch{
		width:3.4rem;
		height: .66rem;
		line-height: .66rem;
		background-image: linear-gradient(0deg, 
		#f2a85e 0%, 
		#feeebb 100%);
		background-image:-webkit-linear-gradient(0deg, 
		#f2a85e 0%, 
		#feeebb 100%);
		font-size: .32rem;
		color:#a81407;
		border-radius: 30px;  
		margin: .15rem auto;
    	border-radius: 30px;
	}
	.formBox .line{
		width:3.15rem;
		height: .6rem;
		line-height: .6rem;
		    font-size: 0;
		background: #fde7c6;
		border-radius: 30px;
		margin:.15rem auto;
		padding-left: .3rem;
		box-sizing: border-box;
	}
	.formBox .line input{
		width:100%;
		height: 100%;
		font-size: .24rem;
		color:#999999;
	}
	.formBox .noyet{
		font-size: .24rem;
		color:#f2a960;
		margin:.2rem auto .5rem;
	}
	.formBox .noyet i{
		font-size: .24rem;
		color:#fddd91;
	}
	/* 拆红包 */
	.openBag{ 
		padding-top:1rem; 
		background:url("./img/open.png") no-repeat center;
		background-size:6.68rem 7.64rem;
	}
	.openIt{
		width: 1.5rem;
    	height: 1.5rem;
		border-radius:50%;
		margin:0rem auto;
	}
	.blessing{ 
		width:3.2rem;
		position: absolute;
	    top: 2.3rem;
	    left: 1.97rem;
	}
	 /* 得到红包或赠金 */
	.getBag{ 
		padding-top:1rem; 
		background:url("./img/getBag.png") no-repeat center;
		background-size:6.68rem 7.74rem;
	}
	.bagTitle{
		font-size:.36rem;
		color:#e91d2c;
		text-align: center;
	}
	.fInherit{
		font-size:inherit;
		color:inherit;
	} 
	.getBag .unit{
		font-size:.3rem;
		color:#e91d2c;
		position: absolute;
	    right: 2rem;
	    top: 2.2rem;
	}
	.getBag .money{
		font-size: 1rem;
	    color: #e91d2c;
	    margin-left: 2.3rem;
	    text-align: center;
	    width: 2rem;
	    display: inline-block;
	} 
	.getBag .fitch{
		font-size:.32rem;
		color:#b85c2a;
		font-weight:bold;
		text-align: center;
		margin:1.3rem auto .8rem;
	}
	.rules{
		font-size:.26rem;
		color:#f2a960;
		text-align: center;
		/* position:absolute;
		bottom:2rem;
		left:2rem; */
	}
	.success{ 
		padding-top:.7rem; 
		background:url("./img/getkefu.png") no-repeat center;
		background-size:6.68rem 7.74rem;
	}
	.success .kefu{
		width:2.3rem;
		display:block;
		margin:0 auto;
	}
	.success .bagTitle{
		font-weight:bold;
	}
	.tip{
		font-size:.26rem;
		color:#fde7c6;
		line-height: .4rem;
		text-align: center;
		margin:.5rem auto  .3rem;
	}
	.mar{
		margin:1.2rem auto 1.7rem;
	}
	.actRuleBg{ 
		/* padding-top:.7rem; */
		padding:1.2rem 1.65rem  2.2rem 1.68rem;
		margin-top:0;
		position:fixed;
		top:3rem;
		left: .42rem;
		background:url("./img/rule.png") no-repeat center;
		background-size:6.68rem 7.74rem;
	} 
	.actRule{
		width:100%;
		height:4.3rem;
		overflow-y:scroll;
	}
	.actRule h3 ,.actRule p{
		font-size:.24rem;
		color:#e91d2c;
		line-height:.35rem;
	}
</style>
<template>
	<div class="discount">
		  <app-subHeader :subTitle="subTitle"></app-subHeader>
      <div class="flex flexs">
        <span @click="tabChange(1)" :class="{active:show}">金盛贵金属APP</span>
        <span @click="tabChange(2)" :class="{active:!show}">MT4交易平台</span>
      </div>
      <section class="downloadapp" v-show="show">
          <img class="mobileimg" src="./img/mobile_app_03.jpg">
          <h3 class="appTitle">产品优势</h3>
          <div class="lineBox">
              <img src="./img/mobile_app_06.jpg">
              <div class="rightPart">
                 <p class="p11">品牌资质：</p>
                 <p class="p22">香港金银业贸易场行员，编号：047</p>
              </div>
          </div>
          <div class="lineBox">
              <img src="./img/mobile_app_09.jpg">
              <div class="rightPart">
                  <p class="p11">专业：</p>
                  <p class="p22">金盛拥有专业的分析师团队，为新手提供实用、完善的交易指导；为具备交易经验的客户提供实时、全面的行情资讯和分析评论</p>
               </div>
          </div>
          <div class="lineBox">
              <img src="./img/mobile_app_11.jpg">
              <div class="rightPart">
                  <p class="p11">服务：</p>
                  <p class="p22">金盛客服7*24小时在线，随时随地，为您答疑解惑</p>
              </div>
          </div>
          <div class="lineBox">
              <img src="./img/mobile_app_13.jpg">
              <div class="rightPart">
                  <p class="p11"> 交易：</p>
                  <p class="p22"> 采用国际通用的MT4交易平台，行情图表配备丰富的画线工具和分析指标，并倶备止损止盈等风控功能，操作简单、下单灵活</p>
              </div>
          </div>
      </section>
      <section class="MT4"  v-show="!show">
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
                <img  class="icon" src="./img/download_01.png">
              </div>
              <a class="btn btn1" href="https://www.golday9999.com/GoldayMT4.apk">立即下载</a>
            </div>
          </section>
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
        show:true,
	    	 
	    }
  	},
    methods:{
      tabChange(num){
        if(num == 1 && this.show == true){
        }else{
          this.show = !this.show;
        }
      }
    },
  	components:{ 
  		"app-subHeader":subHeader,
  	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .discount{
    background: #fff;
  }
  .flexs{
    margin:0;
    width: 7.1rem;
    margin:0 auto;
    height: 0.88rem;
    background-color: #fafafa;
    border-radius: 0.1rem;
    border: solid 0.01rem #ec615c;
  }
  .flexs span{
    width: 50%;
    text-align: center;
    height: 0.88rem;
    line-height:.88rem;
    font-size: 0.3rem;
    color: #999999;
  }
  .flexs .active{
    background-color: #ec615c;
    border-radius: 3px;
    color:#fff;
  }
  .downloadapp{
    width:7.5rem;
    padding:0.2rem .2rem .8rem;
    box-sizing: border-box;
    background: #fff;
  }
  .mobileimg{
    width:7.1rem;
    margin:0 auto .8rem;
    display: block;
  }
  .appTitle{
    font-size: 0.36rem;
    color: #333333;
  }
  .lineBox{
    margin-top:.4rem;
  }
  .lineBox img{
    width: 0.36rem;
    height: 0.34rem;
    vertical-align: top;
    float:left;
    margin:.1rem  .25rem  0 0 ;
  }
  .lineBox .rightPart{
    display:table-cell;
    vertical-align: top;
  }
  .p11{
    font-size: 0.36rem ;
    color: #090909;
  }
  .p22{
    font-size: 0.3rem ;
    color: #333333;
    line-height: .35rem;
  }
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
	    margin: .3rem auto 0;

	    border-radius: 5px;
	    box-sizing: border-box;
	    padding: .3rem;
	    background: #fff;
	    font-size:0;
	}
  .MT4{
    padding-bottom: .5rem;
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

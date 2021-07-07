<template> 	
	<footer class="foot">
		<p class="p1">24小时客服热线</p>
		<p class="p2"><a href="tel:852-3758 2228"></a> 852-3758 2228 (香港)</a></p>
		<p class="line"></p>
		<p class="p3">免责声明   |   隐私条款   <!-- |   <b class="appTxt" @click="js_app()">APP相关</b> --></p>
		<p class="p3">Copyright © 2021金盛贵金属有限公司版权所有，不得转载</p>
		<p class="p3">ICP许可证号：晋ICP备2020009056号</p>  
		 <p class="p3">	
		APP开发者：香港金盛贵金属有限公司<br>
		APP名称： 金盛贵金属  应用版本：3.3.3<br>
		应用权限：<b class="mlr" @click="js_yingyong()">查看权限</b>隐私政策：<b class="mlr" @click="js_yingsi()">查看政策</b><br>
		更新时间；2021年1月25日<br>
		温馨提示： 投资有风险，入市需谨慎，最终收益以实际为准
	 	</p> 
 
	 <section class="mask" v-show="yingyong">
	    <div class="content">
	        <div class="topTitles"> 应用权限说明</div> 
	        <span class="close js_close" @click="js_yingyong()"> × </span>  
	        <div class="scroll">
	         <p>1、允许该应用通过全球定位系统(GPS)或网络位置信息源(例如基站和WLAN)获取您的精确位置信息。您必须在设备上开启这些位置信息服务，应用才能获得位置信息。应用会使用此类服务确定您的位置，这可能会消耗更多电量。</p>
	         <p>2、允许该应用获取您的大致位置信息。这类位置信息来自于使用网络位置信息源(例如基站和WLAN)的位置信息服务。您必须在设备上开启这些位置信息服务，应用才能获得位置信息。应用会使用此类服务确定您的大概位置。</p>
	         <p>3、允许该应用使用麦克风录制音频。此权限可让该应用不经您的确认即可随时录制音频。</p>
	         <p>4、该应用访问设备的电话功能。此权限可让该应用确定本机号码和设备ID、是否正处于通话状态以及拨打的号码。</p>
	         <p>5、允许该应用读取存储卡中的内容。</p>
	         <p>6、允许该应用使用相机拍摄照片和视频。此权限可让该应用随时使用相机，而无需您确认。</p>
	         <p>7、允许该应用写入SD卡。</p>
	         <p>8、允许该应用访问后台位置，该权限仅会影响应用在后台运行时对位置信息的访问权限。常规权限允许访问网络允许该应用访问网络连接，可能产生GPRS流量。</p>
	         <p>9、允许该应用更改网络连接的状态。</p>
	         <p>10、允许该应用创建网络套接字和使用自定义网络协议。浏览器和其他某些应用提供了向互联网发送数据的途径，因此应用无需该权限即可向互联网发送数据。</p>
	         <p>11、允许该应用读写系统的设置数据。恶意应用可能会破坏您的系统配置。</p>
	         <p>12、允许该应用请求安装文件包。</p>
	         <p>13、允许该应用使用其他的位置信息提供程序命令。此权限使该应用可以干扰GPS或其他位置信息源的运作。</p>
	         <p>14、允许该应用修改全局音频设置，例如音量和用于输出的扬声器。</p>
	         <p>15、允许该应用阻止手机进入休眠状态。</p>
	         </div>
	    </div>
	</section>
	<section class="mask" v-if="yingsi">
	    <div class="content">
	        <div class="topTitles"> 隐私政策</div> 
	        <span class="close js_close" @click="js_yingsi()"> × </span>  
	         <div class="scroll">
	        <p class="incent">香港金盛贵金属有限公司（下称“交易商”）根据《个人资料(隐私条例》来保护客户的个人资料隐私。在交易商使用客户资料以提供其最佳之服务时，亦会高度关注对于客户资料使用之安排。交易商会根据香港特别行政区法例《个人资料(隐私)条例》之规定，力求完全符合个人资料保证要求。为此，交易商会确保其雇员遵守法例规定的保安和保密严谨标准。</p>
	        <p>1、为保障客户正常使用服务，维护服务的正常运行，改进及优化服务体验以及保障账户安全，可能需要客户授权使用如下个人权限：
	        实名认证：确保客户信息准确无误；相机/相册：发送图片，选取图片上传，存储照片，扫一扫，用于反馈意见和个人信息审核时使用； 银行卡识别：为保障客户资金安全，需进行银行卡审核； 用户地址：主要用于发放实物奖励。</p>
	        <p>2、交易商收集的各项个人资料，只供应业务运作及其他有关活动之用。</p>
	        <p>3、关于使用Cookies技术：交易商可能会在客户及存款交易商的电脑设定cookies，可能会于交易商的产品和服务中使用cookies来分析客户在交易商网站的浏览行为，以协助交易商更好的了解客户需求及提供更好的服务方式，但对于收集得来和共用的资料是不具姓名及无法被个别识别的。</p>
	        <p>4、信息储存：交易商会按照法律法规规定，将收集的用户信息存储于中国香港服务器。一般而言，我们仅为实现对客服务所必需的时间保留客户的用户信息。</p>
	        <p>5、信息安全保护：交易商致力于使用防火墙、密码和个人身份证号码认证系统和操控机制来控制未授权的系统进入和存储资料，或使用其他资料保障工具确保网站安全及符合业界标准。</p>
	        <p>6、交易商不会将客户个人资料用于用户画像、个性化展示，也不会收集关于您设备上安装的其他APP信息。交易商使用客户的用户信息，超出了与收集时声称的目的及具有直接或合理关联的范围，将会在使用用户信息前，再次告知并征求客户的明示同意（通过主动点击“确认”做出直接性动作） 。</p>
	        <p>7、交易商会将客户个人资料保密储存，防止其个人资料被盗用，未达到隐私保护之最佳效果，除符合本款第五、第七条之规定外，客户充分理解交易商不会向客户本人以外的任何主体提供客户的资料、信息，即使该主体声称其为授权。</p>
	         </div>
	    </div>
	</section> 
	<!-- <section class="mask" v-show="apptxt">
	    <div class="content">
	        <div class="topTitles"> APP 相关</div> 
	        <span class="close js_close" @click="js_app()"> × </span>  
	        
	        <div class="scroll">
	        <p>APP名称：金盛贵金属</p>
	        <p>APP开发者：香港金盛贵金属有限公司</p>
	        <p>应用版本：安卓V3.3.0/IOS V2.4.0</p>
	        <p>更新时间：2021年1月25日</p>

	        <p>应用权限：</p>
	        <p>1、允许该应用通过全球定位系统(GPS)或网络位置信息源(例如基站和WLAN) 获取您的精确位置信息。您必须在设备上开启这些位置信息服务，应用才能获得位置信息。应用会使用此类服务确定您的位置，这可能会消耗更多电量。</p>

	        <p>2、允许该应用获取您的大致位置信息。这类位置信息来自于使用网络位置信息源(例如基站和WLAN)的位置信息服务。您必须在设备上开启这些位置信息服务，应用才能获得位置信息。应用会使用此类服务确定您的大概位置。</p>

	        <p>3、允许该应用使用麦克风录制音频。此权限可让该应用不经您的确认即可随时录制音频。</p>

	        <p>4、该应用访问设备的电话功能。此权限可让该应用确定本机号码和设备ID、是否正处于通话状态以及拨打的号码。</p>

	        <p>5、允许该应用读取存储卡中的内容。</p>

	        <p>6、允许该应用使用相机拍摄照片和视频。此权限可让该应用随时使用相机，而无需您确认。</p>

	        <p>7、允许该应用写入SD卡。</p>

	        <p>8、允许该应用访问后台位置，该权限仅会影响应用在后台运行时对位置信息的访问权限。常规权限允许访问网络允许该应用访问网络连接，可能产生GPRS流量。</p>

	        <p>9、允许该应用更改网络连接的状态。</p>

	        <p>10、允许该应用创建网络套接字和使用自定义网络协议。浏览器和其他某些应用提供了向互联网发送数据的途径，因此应用无需该权限即可向互联网发送数据。</p>

	        <p>11、允许该应用读写系统的设置数据。恶意应用可能会破坏您的系统配置。</p>

	        <p>12、允许该应用请求安装文件包。</p>

	        <p>13、允许该应用使用其他的位置信息提供程序命令。此权限使该应用可以干扰GPS或其他位置信息源的运作。</p>

	        <p>14、允许该应用修改全局音频设置，例如音量和用于输出的扬声器。</p>

	        <p>15、允许该应用阻止手机进入休眠状态。</p>

	        <p>隐私政策：</p>
	        <p>交易商根据《个人资料(隐私条例》来保护客户的个人资料隐私。在交易商使用客户资料以提供其最佳之服务时，亦会高度关注对于客户资料使用之安排。交易商会根据香港特别行政区法例《个人资料(隐私)条例》之规定，力求完全符合个人资料保证要求。为此，交易商会确保其雇员遵守法例规定的保安和保密严谨标准。</p>

	        <p>1、为保障客户正常使用服务，维护服务的正常运行，改进及优化服务体验以及保障账户安全，可能需要客户授权使用如下个人权限： 实名认证：确保客户信息准确无误；相机/相册：发送图片，选取图片上传，存储照片，扫一扫，用于反馈意见和个人信息审核时使用； 银行卡识别：为保障客户资金安全，需进行银行卡审核； 用户地址：主要用于发放实物奖励。</p>

	        <p>2、交易商收集的各项个人资料，只供应业务运作及其他有关活动之用。</p>

	        <p>3、关于使用Cookies技术：交易商可能会在客户及存款交易商的电脑设定cookies，可能会于交易商的产品和服务中使用cookies来分析客户在交易商网站的浏览行为，以协助交易商更好的了解客户需求及提供更好的服务方式，但对于收集得来和共用的资料是不具姓名及无法被个别识别的。</p>

	        <p>4、信息储存：交易商会按照法律法规规定，将收集的用户信息存储于中国香港服务器。一般而言，我们仅为实现对客服务所必需的时间保留客户的用户信息。</p>

	        <p>5、信息安全保护：交易商致力于使用防火墙、密码和个人身份证号码认证系统和操控机制来控制未授权的系统进入和存储资料，或使用其他资料保障工具确保网站安全及符合业界标准。</p>

	        <p>6、交易商不会将客户个人资料用于用户画像、个性化展示，也不会收集关于您设备上安装的其他APP信息。交易商使用客户的用户信息，超出了与收集时声称的目的及具有直接或合理关联的范围，将会在使用用户信息前，再次告知并征求客户的明示同意（通过主动点击“确认”做出直接性动作） 。</p>

	        <p>7、交易商会将客户个人资料保密储存，防止其个人资料被盗用，未达到隐私保护之最佳效果，除符合本款第五、第七条之规定外，客户充分理解交易商不会向客户本人以外的任何主体提供客户的资料、信息，即使该主体声称其为授权。</p>
	        </div> 
	    </div>
	</section> -->
	</footer>
</template>

<script>
export default {
   name: 'foot',
   data () {
	    return {
	        msg: '金盛贵金属官网_正规香港贵金属交易平台', 
	        yingyong:false,
	        yingsi:false,
	        apptxt:false
	    }
  	},
  	methods:{
	  	js_yingyong(){
			this.yingyong = !this.yingyong;
		},
		js_yingsi(){
			this.yingsi = !this.yingsi;
		},
		js_app(){
			this.apptxt = !this.apptxt;
		}
  	}
  	

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.foot{
		width:100%;
		padding:.4rem 0 1.2rem ;
		color: #333333;
		background:#42403f;
		line-height: 0.48rem; 
		text-align: center;
	}		
	.appTxt{
		font-size: inherit;
		font-weight: normal;
	}
	.p1{
		font-size: 0.24rem; 
		color: #c9c9c9;  
	}
	.p2{
		font-size:0.36rem;
		color: #c9c9c9;
	}
	.p3{
		font-size: 0.24rem; 
		line-height: 0.4rem; 
		color: #999;
	}
	.line{
		width:6.9rem;
		height:1px;
		margin:.2rem auto .2rem;
		background:#d4d4d4;
	}
	.mt15{
		margin-top:.15rem;
	}

	.mlr{
		margin:0 .1rem;
		text-decoration: underline;
	}
	.mask{
        width:100%;
        height: 100%;
        background:rgba(0,0,0,.3);
        position: fixed;
        top:0;
        left: 0;
        
        z-index: 1000;
    }
    .content{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 7px;
        background: #fff;
        width:6.5rem;
        height: 8rem;
    }  
    .content .topTitles{
        width: 100%;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        color:#fff;
        font-size: .32rem;
        background-color: #ff5555;
        border-radius:3px 0px 0px;
         margin-bottom:.3rem;
    }
    .content .scroll{
    	width: 100%;
    	height: 6.6rem;
    	overflow-y: scroll;
    }
    .content .close{
        width: .35rem;
        height: .35rem;
        line-height: .32rem;
        color:#fff;
        font-size: .26rem;
        text-align: center;
        position: absolute;
        top:.08rem;
        right: .08rem;
        border: solid 1px #ffffff;
        border-radius: 30px;
        cursor: pointer;
    }
    
    .content p{
        font-size: .26rem;
        text-align: left;
	    line-height: .4rem;
	    color: #333;
	    width: 92%;
	    margin: .08rem auto;
    }
    .content .incent{
        text-indent:.4rem;
    }
</style>

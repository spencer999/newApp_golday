<template> 	
	<section class="bottom" v-if="show">
		<span class="close" @click="show = !show"></span>
		<span class="down" @click="goDownload" onclick="ga('send','event','m_index','download_app','content_bottom')"></span>
	</section>
</template>

<script>
export default {
    name: 'bottom',
    data () {
	    return {
	    	show:true,
	        msg: '金盛贵金属官网_正规香港贵金属交易平台', 
	    }
    },
    methods:{
    	goDownload:function(){ 
    		if (this.isWeixin) {
	        	window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.jinsheng.jinsheng";
	      	} else {
		        if (this.sysPlatform == "ios") {
		          window.location.href = "https://itunes.apple.com/cn/app/金盛貴金屬/id978618010";
		        } else if (this.sysPlatform == "android") {
		          window.location.href = "http://www.golday.hk/Public/apk/goldayapp.apk";
		        } else {
		          window.location.href = "https://itunes.apple.com/cn/app/金盛貴金屬/id978618010";
		        }
	      	}
    	},
    	 // 判断是否为移动设置访问
 
   		isMobileAccess:function(){
			let sUserAgent = navigator.userAgent;
			let mobileAgents = ['Windows CE', 'iPad', 'iPhone', 'iPod', 'Android', 'android', 'Windows Phone', 'Symbian', 'BlackBerry', 'Linux'];
			for (let i = 0, len = mobileAgents.length; i < len; i++) {
				if(sUserAgent.indexOf(mobileAgents[i]) !== -1){
					return true;
				}
			}
			return false;
	    },

    	/*移动设备判断安卓||IOS*/
    	sysPlatform:function(){
      		let isMobile = this.isMobileAccess,
        	userAgent = navigator.userAgent.toLowerCase(),
        	sys = "";

	      	if (isMobile) {
		        //安卓
		        if (userAgent.match(/(android|linux)/i)) {
		          	sys = "android";
		        }
		        //苹果
		        if (userAgent.match(/(iphone|ipad|ipod|ios)/i)) {
		          	sys = "ios";
		        }
	        	return sys;
	      	} else {
	        	return false;
	      	}
    	},

	    /*判断是否微信*/
	    isWeixin:function(){
	      	let isMobile = this.isMobileAccess,
	        userAgent = navigator.userAgent.toLowerCase();

	      	if (isMobile && userAgent.match(/MicroMessenger/i) == "micromessenger") {
	        	return true;
	      	} else {
	        	return false;
	      	}
	    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bottom{
		width:7.5rem;
		height:1.02rem;
		background:url("../../assets/download.png")no-repeat center;
		background-size:7.5rem 1.02rem;
		position:fixed;
		bottom:0;
		left:0;
		transition:all .3s;
	}
	.close{
		width:0.45rem;
		height:0.45rem;  
		position:absolute;
		top:0;
		left:0;
	}
	.down{
		width:1.85rem;
		height:.75rem;  
		position:absolute;
		top:.16rem;
		right:.18rem;
	}
</style>

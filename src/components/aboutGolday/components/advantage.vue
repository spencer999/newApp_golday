<template>
	<div class="imageText flex">
		<div class="items" v-for="(item,index) in adsList" :key="index">
		 	<img class="pic" :src="item.src" alt="item.tag">
		 	<p class="p1">{{item.tag}}</p> 
			<p class="p2" v-html="item.desc"> </p>  
		</div> 
	</div> 
</template>

<script>
import ads from '../img/ads.png'
import ads1 from '../img/ads1.png'
import ads2 from '../img/ads2.png'
import ads3 from '../img/ads3.png'
import ads4 from '../img/ads4.png'
import ads5 from '../img/ads5.png'
export default {
	name: 'advantage',
	data () {
	    return {
	    	adsList:[
	    		{
	    			tag:"闪电报价",
	    			desc:"国际同步报价<br>即时稳定的交易数据<br>数据全面 速度快捷",
	    			src:ads
	    		},
	    		{
	    			tag:"快速交易",
	    			desc:"24小时连续交易<br>交易机制先进灵活<br>保证客户即时成交",
	    			src:ads1
	    		},
	    		{
	    			tag:"极速开户",
	    			desc:"轻松快捷的开户服务<br>只需一步即刻开户<br>就是这么快！",
	    			src:ads2
	    		},{
	    			tag:"高速存取",
	    			desc:"随存随取 即时到账<br>支持多家支付平台<br>信心保证 资金安全 ",
	    			src:ads3
	    		},
	    		{
	    			tag:"国际平台",
	    			desc:"国际通用MT4&MF<br>交易速度快<br>安全性能高",
	    			src:ads4
	    		},
	    		{
	    			tag:"火速服务",
	    			desc:"速度与激情至上<br>全方位24小时服务<br>用心服务 始终如一",
	    			src:ads5
	    		} 
	    	]
	    }
  	}
}
</script> 

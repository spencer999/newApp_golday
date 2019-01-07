<template>
<div class="londonJ">
	<div class="container">	
		   <div class="flex">
			  	<span class="h2">伦敦银 </span>
			  	<span class="number">	<b>	{{data[0]}} ↑</b> <i> {{data[3]}} (	{{data[4]}}%)</i> </span>
		    </div>
			<p class="note">更新时间：{{date}}</p>
			<!-- K线图 -->
	 		<app-kline>	</app-kline> 
	</div>
	<!-- 多头空头饼图 -->
	<div class="container">	
		<p class="h2">	多空比例 </p>
		<div class="flex circle">	
			<div>	
				<p class="desc">多头 <i></i> </p>
				<span class="num">{{more}}%</span>
			</div>
			<app-pie :more="more" :less="less">	</app-pie> 
			<div class="green">	
				<p class="desc">空头 <i></i> </p>
				<span  class="num">{{less}}%</span>
			</div>
			
		</div>
		<p class="note tr">以上建议仅供参考，不作为投资唯一依据</p>
	</div>
	 

	<div class="container">	
		<p class="h2">	操作建议 </p>
		<p class="conDesc mt30">伦敦银支撑阻力	</p>
		<p class="conDesc">上方阻力：{{operation.llszlw}}<br>下方支撑：{{operation.llszcw}}	</p> 
	</div>
</div> 
</template>

<script>
import kline from './components/KLine'
import pie from './components/Pie'
export default {
	name: 'londonJ',
    data () {
	    return {
	    	operation:{},
	    	date:'',
	    	data:[],
	    	what:{},
	    	more:0,
	    	less:0 
	    }
  	},	
  	components:{
  		'app-kline':kline,
  		'app-pie':pie,
  	},
  	created(){
		this.getDatas();
	},
	methods:{ 
		getDatas(){ 
			this.$http.get('/GetScript/getGraphs')  
				.then((res)=>{     
					this.date = res.LLS.pop().time;
					this.data = res.MRHQ.QLLS;
				})
			this.$http.get("/Mobile/Index/czjy")  //伦敦金多头空头
	  			.then((res)=>{   
	  				this.more = res.data.llskd;  
	  				this.less = res.data.llskk;   
	  			})
			this.$http.get('/Mobile/Index/czjy') //操作建议
				.then((res)=>{ 
					this.operation = res.data;
				})

			
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.tr{
		text-align: right;	
	}
	.number{
		font-size:0;
	}
	.number b{
		font-size: 0.36rem; 
		color: #00a003;
	}
	.number i{
		font-size: 0.26rem; 
		color: #00a003;
	}
	.note{
		font-size: 0.22rem; 
		color: #999999; 
		line-height: 0.5rem; 
	}
	.tips{
		text-align: right;
		font-size:0;
		margin-top:.3rem;
	}
	.tips span{
		display:inline-block;
		font-size: 0.24rem; 
	    color: #999999;
	    padding:0.05rem .15rem;
	    border:0.01rem solid #e8e8e8;
	    margin-left:.15rem;
	} 

	.h2{
		font-size: 0.3rem; 
		line-height: 0.44rem; 
		color: #333333;
	} 
</style>

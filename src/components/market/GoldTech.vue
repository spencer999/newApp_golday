<template>
<div class="goldTech">
	<div class="line">
		<app-kline>	</app-kline> 
	</div>
	<section v-for="(item,index) in dataList" :key="index">
		<div class="container" @click="item.id = -item.id">	
			<p class="conTitle"> {{item.title}}</p> 
			<p class="conDesc" >上方阻力： {{item.top}}<br> 下方阻力：{{item.bottom}} </p> 
			<p class="note">(以上建议仅供参考，不作为投资唯一依据。)</p>
		</div>
		<div class="detail" v-show="item.id < 0">
			<p class="conTitle">【黄金技术分析】 </p> 
			<p class="conDesc"> {{item.content}} </p> 
		</div>
	</section>
	<div class="lookMore mt" @click="getMore()" v-show="dataList.length"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></div>
	
</div> 
</template>

<script> 
import kline from './components/KLine'
export default {
	name: 'goldTech',
    data () {
	    return {
	    	page:1,
	    	dataList:[], 
	    }
  	},
  	created(){
  		this.getData();
  		
  	},
  	components:{
  		'app-kline':kline
  	}, 
  	methods:{
  		getData(){
  			/*let params = new URLSearchParams();
            params.append('p',this.page );*/
  			this.$http.post('/Mobile/Index/hjjsfx',this.page) //黄金技术分析数据请求
				.then((res)=>{   
					console.log(res);
					this.dataList = this.dataList.concat(res.data); 
				})
  		},
  		
  		getMore(){
  			this.page++; //点击更多，分页加载
  			this.getData();
  		},
  		 
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
	.line{ 
		padding-top:.3rem;
		background:#fff;
		margin-top:.2rem;
	}
	.note{
		font-size: 0.22rem; 
		color: #999999; 
		line-height: 0.5rem; 
	}    
</style>

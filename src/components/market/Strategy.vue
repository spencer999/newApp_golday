<template> 
	<section class="strategy">
		<router-link :to="{path:'/detail',query:{id:item.id,title:'实盘策略',type:7}}"  tag="div" class="container" v-for="(item,index) in dataList" :key="index">
			<h3 class="conTitle">{{item.bt}}</h3>
			<p class="conTime">{{item.sj}}</p> 
		</router-link>  
		<div class="lookMore mt" @click="getMore()" v-show="dataList.length > 0"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></div>
	</section> 
</template>

<script>
export default {
	name: 'strategy',
	data () {
	    return {
	    	page:1,
	    	dataList:[],
	    }
  	},
  	created(){
  		this.getData();
  	},
  	methods:{
  		getData(){
  			/*let params = new URLSearchParams();
            params.append('p',this.page ); */
  			this.$http.post('/Mobile/Index/spcl', this.page) //实盘策略
				.then((res)=>{   
					this.dataList = this.dataList.concat(res.data); 
				})
  		},
  		getMore(){
  			this.page++;
  			this.getData();
  		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>

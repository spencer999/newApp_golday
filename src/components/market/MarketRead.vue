<template>
	<section class="marketRead">
		<router-link :to="{path:'/detail',query:{id:item.id,title:'行情解读',type:5}}"  tag="div" class="container" v-for="(item,index) in dataList" :key="index">
			<h3 class="conTitle">{{item.bt}}</h3>
			<p class="conTime">{{item.sj}}</p>
			<p class="conDesc">{{item.zy}}</p>
		</router-link>  
		<div class="lookMore mt" @click="getMore()" v-show="dataList.length > 0"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></div>
	</section> 
</template>

<script>
export default {
	name: 'marketRead',
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
            params.append('p',this.page );*/
  			this.$http.post('/Mobile/Index/hqjd',this.page) //行情解读
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

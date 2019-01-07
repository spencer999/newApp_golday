<template>
	<section class="lastestNew">
		<router-link :to="{path:'/detail',query:{id:item.id,title:'实时快讯',type:4}}"  tag="div" class="container" v-for="(item,index) in dataList" :key="index">
			<h3 class="conTitle">{{item.bt}}</h3>
			<p class="conTime">{{item.sj}}</p> 
			<p class="conDesc">{{item.zy}}</p>
		</router-link>  
		<div class="lookMore mt" @click="getMore()" v-show="dataList.length > 0"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></div>
	</section> 
</template>

<script>
export default {
	name: 'lastestNew',
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
  			this.$http.post('/Mobile/Index/sskx',this.page) //实时快讯
				.then((res)=>{  
					console.log(res);
					this.dataList = this.dataList.concat(res.data);
					console.log(this.dataList); 
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

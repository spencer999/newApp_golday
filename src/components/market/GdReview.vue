<template>
	<section class="gdReview">
		<router-link :to="{path:'/detail',query:{id:item.id,title:'金盛点评',type:6}}"  tag="div" class="container" v-for="(item,index) in dataList" :key="index">
			<h3 class="conTitle">{{item.bt}}</h3>
			<p class="conTime">{{item.sj}}</p>
			<p class="conDesc">{{item.zy}}</p>
		</router-link>  
		<div class="lookMore mt" @click="getMore()" v-show="dataList.length"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></div>
	</section> 
</template>

<script>
export default {
	name: 'gdReview',
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
  			this.$http.post('/Mobile/Index/jsdp',this.page) //金盛点评
				.then((res)=>{   
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

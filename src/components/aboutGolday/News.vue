<template>
	<div class="news">
		<router-link :to="{path:'/detail',query:{id:item.id,title:'企业新闻',type:8}}"  tag="div" class="container"  v-for="(item,index) in newsList" :key="index">
			<img class="w100" :src="item.xt" alt="">
			<div class="flex">
				<span class="conTitle">{{item.bt}}</span>
				<span class="date">{{item.time}} </span>
			</div>
			<p class="conText mt1">{{item.zy}}</p>
		</router-link>
		<div class="lookMore" @click="getMore" v-show="newsList.length"><img src="../../assets/more.png" alt="查看更多"><i> 查看更多</i></div>
	</div> 
</template>

<script> 
export default {
	name: 'news',
  	data () {
	    return {
	    	page:1,
	    	newsList:[]
	    }
  	},
  	created(){
  		this.getData();
  	},
  	methods:{
  		getData(){
  			/*let params = new URLSearchParams();
            params.append('p',this.page );*/
  			this.$http.post("/Mobile/Index/jsxw",this.page)
  				.then((res)=>{ 
  					console.log(res);
  					this.newsList = res.data;
  				});
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
	.w100{
		width:100%;
		display:block;
		margin-bottom:.25rem ;
	} 
	.date{
		font-size: 0.26rem;  
	} 
	.conTitle{
		width: 78%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    vertical-align: middle;
	    margin-bottom:0;
	}
	.mt1{
		margin-top:.1rem;
	}
</style>

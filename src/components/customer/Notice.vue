<template>
	<div class="discount">
		<app-subHeader :subTitle="subTitle"></app-subHeader>
		<div class="container">
			<h2 class="topTitle mb30"> <i></i>  平台公告 <i></i> </h2>
			<router-link :to="{path:'/detail',query:{id:item.id,title:'平台公告',type:1}}" class="flex notice" v-for="(item,index) in noticeList" :key="index">
				<span>{{item.bt}}</span>
				<span>{{item.sj}}</span>
			</router-link>
			<p class="line"></p>
		</div>
		<div class="lookMore" @click="getMore" v-show="noticeList.length"><img src="../../assets/more.png" alt="查看更多"> <i>查看更多</i></div>
 
	</div> 
</template>

<script> 
import subHeader from '../header/SubHeader'  
export default {
	name: 'discount',
	data () {
	    return {
	    	subTitle:'平台公告',
	    	noticeList:[],
	    	page:1
	    }
  	},
  	created(){
  		this.getData();
  	},
  	methods:{
  		getData(){
  			/*let params = new URLSearchParams();
  			params.append("p",this.page);*/
  			this.$http.post("/Mobile/Index/ptgg",this.page)
  			.then((res)=>{
  				this.noticeList = this.noticeList.concat(res.data);
  				console.log(this.noticeList);
  				console.log(res.data);
  			})
  		},
  		getMore(){
  			this.page++;
  			this.getData();
  		}
  	},
  	components:{ 
  		"app-subHeader":subHeader,
  	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container{
		margin-bottom:.3rem; 
		padding:0 .3rem .3rem ; 
	}  
	.notice{
		width:100%;
		height:.84rem;
		line-height:.84rem;
		border-top:0.01rem solid #e8e8e8;
	}
	.notice span{
		font-size: 0.28rem; 
		color: #333333;
	} 
	.notice span:nth-child(1){
		width: 70%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.mb30{
		margin-bottom:.3rem;
	}
</style>

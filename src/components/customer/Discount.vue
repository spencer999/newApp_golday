<template>
	<div class="discount">
		<app-subHeader :subTitle="subTitle"></app-subHeader>
		<div class="container" v-for="(item,index) in discountList" :key="index"> 
			<a :href="item.wap_url">
			<img class="discountImg" :src="item.dt" alt="最新优惠">
			<p class="disName">{{item.bt}} </p>
			<p class="disDesc">{{item.nr}}</p>
			</a> 
		</div>
		<div class="lookMore" v-show="discountList.length" @click="getMore"><img src="../../assets/more.png" alt="查看更多"><i>查看更多</i></div>
	</div> 
</template>

<script> 
import subHeader from '../header/SubHeader' 
export default {
	name: 'discount',
	data () {
	    return {
	    	page:1,
	    	subTitle:'最新优惠',
	    	discountList:[]
	    }
  	},
  	created(){
  		this.getData();
  	},
  	methods:{
  		getData(){
  			this.$http.post("/Mobile/Index/zxyh", this.page)
  			.then((res)=>{ 
  				this.discountList = res.data;
  			});
  		},
  		getMore(){
  			alert();
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
	p{
		font-size:.35rem;
		line-height:.55rem;
	}
	.discountImg{
		width:100%; 
	}
	.disName{
		font-size: 0.3rem; 
		color: #333333; 
		line-height:.55rem;

	}
	.disDesc{
		font-size: 0.26rem;
		line-height:.4rem;
		text-indent:2em;
	}
</style>

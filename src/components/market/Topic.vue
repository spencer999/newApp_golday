<template>
	<div class="topic"> 
		<div class="container" v-for="(item,index) in discountList" :key="index"> 
			<a :href="item.url">
			<img class="discountImg" :src="item.path" alt="专题解热">
			<p class="disName">{{item.title}} </p>
			<p class="disDesc">{{item.important}}</p> 
			</a> 
		</div>
	</div> 
</template>

<script>   
export default {
	name: 'topic',
	data () {
	    return { 
	    	discountList:[]
	    }
  	},
  	created(){
  		this.$http.get('/Mobile/Index/zjjr').
  				then((res)=>{  
  					this.discountList= res.data;
  				})
  	}
  	 
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
		color: #333; 
		line-height:.55rem;

	}
	.disDesc{
		font-size: 0.28rem;
		line-height:.4rem;
		text-indent:2em;
	}
</style>

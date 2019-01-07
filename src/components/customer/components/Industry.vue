<template>
	<div class="investQue"> 
		<router-link :to="{path:'/detail',query:{id:item.id,title:'行业百科',type:3}}"  tag="div" class="container" v-for="(item,index) in basicList" :key="index" v-if="show"> 
			<p class="conTitle">{{item.bt}}</p>
			<p class="conText" v-html="item.ny"></p>
		</router-link> 

		<div class="lookMore" v-show="basicList.length" @click="getMore"><img src="../../../assets/more.png" alt="查看更多"> 查看更多</div>
	</div> 
</template>

<script>  
export default {
	name: 'investQue',
	data () {
	    return {
	    	page:1, 
	    	show:true, 
	    	basicList:[] 
	    }
  	}, 
  	created(){
  		this.getData();
  	},
  	methods:{
  		getData(){
  			this.$http.post("/Mobile/Index/hybk", this.page)
  				.then((res)=>{
  					this.basicList = res.data;
  				})
  		},
  		getMore(){
  			this.page++;
  			this.getData();
  		}
  	}
}
</script>

 
 

<template>
	<div class="gold">
		<div class="flex tabBlock">
			<span class="tab" :class="{'active':show}" @click="show = !show">基础</span>
			<span class="tab" :class="{'active':!show}" @click="show = !show">进阶</span>
		</div>
		<router-link :to="{path:'/detail',query:{id:item.id,title:'黄金知识',type:2}}" tag="div" class="container" v-for="(item,index) in basicList" :key="index" v-if="show"> 
			<p class="conTitle">{{item.bt}}</p>
			<p class="conText" v-html="item.ny"></p>
		</router-link>
		<router-link :to="{path:'/detail',query:{id:item.id,title:'黄金知识',type:2}}"  tag="div"  class="container" v-for="(item,index) in advancedList" :key="index" v-if="!show"> 
			<p class="conTitle">{{item.bt}}</p>
			<p class="conText"  v-html="item.ny"></p>
		</router-link>

		<div class="lookMore" v-show="basicList.length" @click="getMore"><img src="../../../assets/more.png" alt="查看更多"> <i> 查看更多</i></div>
	</div> 
</template>

<script>  
export default {
	name: 'gold',
	data () {
	    return { 
	    	show:true, 
	    	page:1,
	    	basicList:[],
	    	advancedList:[]
	    }
  	},
  	created(){
		this.getData();
  	},
  	methods:{
  		getData(){ 
  			this.$http.post("/Mobile/Index/hjzs",this.page)
  				.then((res)=>{
  					this.basicList = this.basicList.concat(res.data.type6);
  					this.advancedList = this.advancedList.concat(res.data.type10);
  				});
  		},
  		getMore(){
  			this.page++;
  			this.getData();
  		}
  	}
}
</script>
<style>
	.conText p{
        display:none;
    }
    .conText p:nth-child(1){
        display:block;
    }
</style>

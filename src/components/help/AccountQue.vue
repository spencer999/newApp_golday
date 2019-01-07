<template>
	<div class="accountQue">   
		<div class="box">
			<div class="group" v-for="(item,index) in conList" :key="index">
				<div class="flex headline" @click="item.id = !item.id">
					<span class="title"> <i>{{index+1}}</i> {{item.bt}}</span>
					<i class="arrow"></i>
				</div>
				<div class="detail" v-show="!item.id" v-html="item.ny">    </div>
			</div>
			
		</div>

	</div> 
</template>

<script>  
export default {
	name: 'accountQue',
  	data () {
	    return { 
	    	show:false,
	    	conList:[]
	    }
  	} ,
  	created(){
  		this.$http.get('/Mobile/Index/bzzx')
				.then((res)=>{ 
					console.log(res);
					this.conList=res.data.type4;
				})
  	}
}
</script> 
 
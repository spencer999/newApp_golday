<template>
	<div class="user">
		<img class="w75" src="./img/user.jpg">
		<div class="border pd20">
			<textarea v-model="advise" name="" id="" cols="30" rows="10" placeholder="请输入您的意见或建议，我们会尽快回复您。"></textarea>
			<p class="textNum">{{num}}/500</p>
		</div>
		<div class="border">
			<span>
				<img src="./img/user_icon.jpg" alt="">
			</span>
			<input type="text" placeholder="交易账号/手机号" v-model="phone">
		</div>
		<div class="upBtn" @click="submitInfo">提交</div>
	</div> 
</template>

<script> 
export default {
	name: 'news',
  	data () {
	    return {
	    	phone:null,
	    	advise:null,
	    	num:0
	    }
  	},
  	created(){ 
  	},
  	methods:{
  		submitInfo(){
  			if(this.advise === null){
  				alert("请输入您的意见或建议，我们会尽快回复您。");
  			}else if(/\d(8,11)/.test(this.phone)){
  				alert("请输入正确的交易账号/手机号")
  			}
  			 
  			/*this.$http.post("/Mobile/Index/jsxw",this.page)
  				.then((res)=>{ 
  					console.log(res);
  					this.newsList = res.data;
  				});*/
  		} 
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
	.user{
		background:#fff;
		padding-bottom:3rem;
	}
	.pd20{
		padding:.2rem;
	}
	.w75{
		width:100%;
		height: 3.23rem;
	}
	.border{
		width:6.9rem;
		margin:0.2rem auto;
		border: solid 1px #cccccc;
		font-size:0;
	}
	.border textarea{
		width:100%;
		height: 2.5rem;
		font-size:.28rem;
		line-height: .35rem;
		color:#666;
	}

	.textNum{
		font-size: 0.28rem;
		color:#ccc;
		text-align: right;
	}
	.border span,.border input{
		height: 0.8rem;
		line-height: .8rem;
		vertical-align: middle;
		padding-left: .25rem;
    	box-sizing: border-box;
		display: inline-block;
		width:6rem;
	}
	.border span img{
		width:.28rem;
		height: .32rem;
		vertical-align: middle;
	}
	.border span{
		text-align: center;
		background-color: #f5f5f5;
		width:.8rem;
		padding-left:0;
	} 
	.upBtn{
		width: 6.9rem;
		height: 0.9rem;
		background-color: #fcaa2b;
		border-radius: 0.1rem;
		margin:0 auto;
		font-size: 0.36rem;
		color:#fff;
		text-align: center;
		line-height: .9rem;
	}                                   
</style>

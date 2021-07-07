<template>
	<div class="details"> 
		<app-subHeader :subTitle="subTitle"></app-subHeader>
		<div class="container" > 
			<p class="detailTitle">{{detail.bt}}</p>
      <p class="detailTime">本文编辑：金盛贵金属&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{{detail.time}}</p>
			<div class="detailDesc"  v-html="detail.nr"></div>
		</div> 
	</div> 
</template>

<script>  
import subHeader from '../../header/SubHeader'
export default {
	name: 'detail',
	data () {
	    return { 
            subTitle:'传啥接啥', 
	    	    detail:{
              bt:null,
              nr:null,
              time:null
            },
            id:1,
            type:1,
            url:"/Mobile/Index/ptgg_detail",
	    }
  	},
  	created(){
        this.id = this.$route.query.id;
        this.subTitle = this.$route.query.title;
        this.type = this.$route.query.type;
        if(this.type == 1){
            this.url = "/Mobile/Index/ptgg_detail";
        }else if(this.type == 2){
            this.url = "/Mobile/Index/threeKnow_detail";
        }else if(this.type == 3){
            this.url = "/Mobile/Index/hybk_detail";
        }else if(this.type == 4){
            this.url = "/Mobile/Index/sskx_detail";
        }else if(this.type == 5){
            this.url = "/Mobile/Index/hqjd1_detail";
        }else if(this.type == 6){
            this.url = "/Mobile/Index/jsdp_detail";
        }else if(this.type == 7){
            this.url = "/Mobile/Index/spcl_detail";
        }else if(this.type == 8){
            this.url = "/Mobile/Index/jsxw_detail";
        }else if(this.type == 9){
            this.url = "/Mobile/Index/hyrdxw_detail";
        } 



         


		    this.getData();
  	},
  	methods:{
  		getData(){ 
           /* let params = new URLSearchParams();
            params.append('id',this.id );*/
  			this.$http.post(this.url,this.id)
  				.then((res)=>{
  				  console.log(res);
            //this.detail = res.data;
            this.detail.bt = res.data.bt;
            this.detail.nr = res.data.nr;
            if(res.data.time == undefined){
              this.detail.time = res.data.publish;
            }else{
              this.detail.time = res.data.time;
            }
  				});
  		}, 
  	},
  	components:{ 
  		"app-subHeader":subHeader,
  	},
}
</script>
<style scoped> 
    .container{
        padding:.5rem .3rem 2rem .3rem;
    }
    .detailTitle{ 
        font-size:.4rem;
        color:#000;
        font-weight: bold;
        margin-bottom:.35rem;
    }
    .detailTime{
      font-size:.24rem;
      color:#908f8f;
      text-align: center;
      margin-bottom:.35rem;
    }
     .detailDesc .strong{
      position: relative;
      padding-left:0.2rem;
      display: inline-block;
      font-size: .35rem;
      font-weight: bold; 
       margin: .2rem 0;
           color: #000;
    }
   /* .detailDesc  .strong::before{
      position: absolute;
      top:0;
      left: 0;
      content: "";
      display: inline-block;  
      width:.1rem;

      height: .3rem;
      background:orange;
    }*/
    .detailDesc,.detailDesc p,.detailDesc span,.detailDesc a{ 
        font-size:.26rem;
        line-height: .45rem 
    }
    .detailDesc table{
        border:1px solid #ddd;
        border-collapse:collapse;
    }
    .detailDesc table td{
        border:1px solid #ddd;
    }
   
    img{
        width:100%!important;
    }
    table,td{
        border:1px solid #ddd;
    }
</style>

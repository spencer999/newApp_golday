<template>
	<div class="details"> 
		<app-subHeader :subTitle="subTitle"></app-subHeader>
		<div class="container" > 
			<p class="detailTitle">{{detail.bt}}</p>
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
	    	detail:{},
            id:1,
            url:"/Mobile/Index/ptgg_detail",
	    }
  	},
  	created(){
        this.id = this.$route.query.id;
        this.subTitle = this.$route.query.title;
        if(this.$route.query.type == 1){
            this.url = "/Mobile/Index/ptgg_detail";
        }else if(this.$route.query.type == 2){
            this.url = "/Mobile/Index/threeKnow_detail";
        }else if(this.$route.query.type == 3){
            this.url = "/Mobile/Index/hybk_detail";
        }else if(this.$route.query.type == 4){
            this.url = "/Mobile/Index/sskx_detail";
        }else if(this.$route.query.type == 5){
            this.url = "/Mobile/Index/hqjd1_detail";
        }else if(this.$route.query.type == 6){
            this.url = "/Mobile/Index/jsdp_detail";
        }else if(this.$route.query.type == 7){
            this.url = "/Mobile/Index/spcl_detail";
        }else if(this.$route.query.type == 8){
            this.url = "/Mobile/Index/jsxw_detail";
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
  					this.detail = res.data; 
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
        font-size:.3rem;
        color:#333;
        margin-bottom:.35rem;
    } 
    .detailDesc,.detailDesc p,.detailDesc strong,.detailDesc span,.detailDesc a{ 
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

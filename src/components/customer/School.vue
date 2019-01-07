<template>
    <div class="school">
		<app-subHeader :subTitle="subTitle"></app-subHeader>
        <!-- 头部导航 --> 
        <div class="flex schoolNav">
			<router-link tag="span" class="item" :class="{'none':index == navList.length-1}" v-for="(item ,index) in navList" :key="index" :to="item.path" replace>{{item.tag}}</router-link>
		</div>

        <router-view></router-view>
         
    </div> 
</template>

<script>  
import subHeader from '../header/SubHeader'
export default {
    name: 'school',
    data () {
	    return {
	    	subTitle:'金盛课堂',
	    	navList:[
	    		{
	    			tag:"黄金知识",
	    			path:'/school/gold'
	    		},
	    		{
	    			tag:"白银知识",
	    			path:'/school/siliver'
	    		},
	    		{
	    			tag:"投资百问",
	    			path:'/school/investQue'
	    		},
	    		{
	    			tag:"行业百科",
	    			path:'/school/industry'
	    		} 
	    	]
	    }
  	},
  	components:{ 
  		"app-subHeader":subHeader,
  	},  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/* 导航 */
	.schoolNav{
		padding:0 .3rem;
		flex-wrap:nowrap;
		height:1rem;
		background:#fff;
		margin-top:.25rem;
	} 
	.schoolNav .item{
		font-size:.26rem;
		padding:0 .2rem;
		text-align: center; 
		position:relative;
	}
	.schoolNav .item.active{
		color:#ff5555;
	}
	.schoolNav .item.active::after{
		content:'';
		position:absolute;
		bottom:-.25rem;
		left:.2rem;
		width:1rem;
		height:.03rem;
		background:#ff5555;;
	}
	.none{
		border:none;
	}  
	/* 主体 */
	.container{
		padding:.3rem;
	}
	.tabBlock{
		width: 4.00rem;
		height: .80rem;
		background-color: #ffffff;
		border-radius: .40rem;
		border-radius:30px;
		font-size:0;
		margin:.25rem auto;
	}
	.tabBlock .tab{
		width:50%;
		font-size: .3rem;
		line-height:.8rem;  
		padding-left:.9rem;
	}
	.tabBlock .tab:nth-child(1){
		background:url(./img/school4.png) no-repeat left .45rem center;
		background-size:.36rem .31rem;
		border-right:0.01rem solid #e8e8e8;
	}
	.tabBlock .tab:nth-child(2){
		background:url(./img/school2.png) no-repeat left .45rem center;
		background-size:.36rem .31rem; 
	}
	.tabBlock .tab.active:nth-child(1){
		background:url(./img/school1.png) no-repeat left .45rem center;
		background-size:.36rem .31rem; 
		color: #ff5555;
	}
	.tabBlock .tab.active:nth-child(2){
		background:url(./img/school3.png) no-repeat left .45rem center;
		background-size:.36rem .31rem;
		color: #ff5555; 
	}
</style>

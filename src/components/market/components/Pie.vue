<template> 
	<div class="center" ref="pie"></div>  
</template>

<script> 

import echarts from 'echarts'
export default {
	name: 'echarts',
	data () {
	    return { 
	    	circleIn:"60%",
	    	circleOut:"85%"  
	    }
  	},
  	props:["more","less","circle1","circle2"], 
  /*	props:["what"], */
  	watch: {
        more: function(newVal,oldVal){  
        	this.circleIn = this.circle1 || '60%';
        	this.circleOut = this.circle2 || '85%';
            this.getPie(); 
        }
    },  
  	methods:{   
  		   
  		getPie(){      
 			this.charts = echarts.init(this.$refs.pie);
 			let colors=['#f6909e','#83dce7'];
            this.charts.setOption({
			    tooltip: {
			        trigger: 'item', 
			        show:false,
			        formatter: "{a} <br/>{b}: {c} ({d}%)",
			        
			    },  

			    series: [
			        {
			            name:'',
			            type:'pie',
			            hoverAnimation:false,
			            color:['#00a003','#e84848'] ,
			            radius: [this.circleIn, this.circleOut],
			            avoidLabelOverlap: false,
			            label: {
			            	backgroundColor:'#000',
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[  
			                {value:this.less},
			                {value: this.more,} 
			            ]
			           
			        }
			    ]
			});

  		}
  	}
}
</script> 
<style>
	.circle{
		padding:0 .6rem ;
		font-size:0;


	}
	.note{
		font-size: 0.22rem; 
		color: #999999; 
		line-height: 0.5rem; 
	}
	.center{
		width:2.5rem;
		height:2.5rem; 
		margin: 0 auto;
	} 
	.circle .desc{
		font-size: 0.26rem;
	}
	.circle .desc i{
		display:inline-block;
		width:.45rem;
		height:.15rem;
		border-radius:30px;
		background:#e84848;
		vertical-align:middle;
	}
	.circle .num{
		font-size: 0.36rem;
		color: #e84848;
	}
	.green .desc i{ 
		background:#00a003;
	}
	.green .num{ 
		color: #00a003;
	}
	.h2{
		font-size: 0.3rem; 
		line-height: 0.44rem; 
		color: #333333;
	}
	  
</style>

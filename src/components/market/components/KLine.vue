<template>
	<div class="container">	 	
		<div class="tips"> 
		<span 
				:class="{'active': active == index}" 
				v-for="(item,index) in legends" 
				:key="index"
				@click="changeData(index)" >{{item}}</span> 
		<!-- <span>分时</span> -->
		</div>
	<div ref="echarts" class="echarts"></div>
	</div>
</template>

<script> 

import echarts from 'echarts'
export default {
	name: 'echarts',
	data () {
	    return { 
	    	active:0,
	    	legends:['M5','M15','M60'], 
	    	data: [],
	    	dates:[],
	    	result: [],
	    	echarts:{},
	    }
  	},
	 mounted(){
        this.$nextTick(function() {
            this.changeData(0);  //默认展示M5数据 
            
        })
    },
  	methods:{ 
  		changeData(url){ //点击切换请求数据
  			this.active = url;
  			if(url == 0){
  				this.getGraph('/GetScript/timeSharingGraphgw?mKey=0db23143d4a97ef87410700c73775a97&type=0&interval=0&mt=1536808874563'); 
  			}else if(url == 1){
  				this.getGraph('/GetScript/timeSharingGraphgw?mKey=0db23143d4a97ef87410700c73775a97&type=0&interval=1&mt=1536808734384');
  			}else if(url == 2){
  				this.getGraph('/GetScript/timeSharingGraphgw?mKey=0db23143d4a97ef87410700c73775a97&type=0&interval=1&mt=1536808734384');
  			}
  		}, 
  		getGraph(url){
  			this.$http.get(url).
  			then((res)=>{  
  				let list = Object.values(res.list); 
  				list.forEach((item)=>{
  					this.dates.push(this.timeStampToDate(item[0],'time'));
  					item.shift();
  				}) 
  				this.data = list;  
  				this.getEcharts(); //初始化echarts
  			})
  		},
  		timeStampToDate(timestamp,f) {
	         // 时间戳转日期
	        let md = new Date(parseInt(timestamp));
	        if(f == 'date') {
	            return (md.getFullYear()+'-'+md.getMonth() + 1) + "-" + md.getDate();
	        }else if(f == 'time') {
	            return  md.getHours() + ":" + md.getMinutes();
	        } 
	    },

  		calculateMA(dayCount, data) {  
		    for (let i = 0, len = data.length; i < len; i++) {
		        if (i < dayCount) {
		            this.result.push('-');
		            continue;
		        }
		        let sum = 0;
		        for (let j = 0; j < dayCount; j++) {
		            sum += data[i - j][1];
		        }
		        this.result.push((sum / dayCount).toFixed(2));
		    } 
		    console.log(this.result);
		    return this.result;
		},
  		getEcharts(){
  			  
			let colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
			let labelFont = 'bold 12px Sans-serif';
   
 			this.charts = echarts.init(this.$refs.echarts);
            this.charts.setOption({
			    animation: true,
			    color: colorList, 
			    
			    
			    dataZoom: [{
			        type: 'slider',
			        xAxisIndex: [0, 1],
			        realtime: false,
			        start:20,
			        end: 100,
			        top:15,
			        height: 20,
			        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
			        handleSize: '120%'
			    }, {
			        type: 'inside',
			        xAxisIndex: [0, 1],
			        start: 20,
			        end: 100,
			        top: 30,
			        height: 20
			    }],
			    xAxis: [{
			        type: 'category',
			        data: this.dates,
			        boundaryGap : false,
			        axisLine: { lineStyle: { color: '#777' } },
			        axisLabel: {
			            /*formatter: function (value) {
			            	let date = new Date(value);
           					return date.getHours() + ':' + date.getMinutes() ;
			                return echarts.format.formatTime('MM-dd', value);
			            }*/
			        },
			        min: 'dataMin',
			        max: 'dataMax',
			        axisPointer: {
			            show: true
			        }
			    }, {
			        type: 'category',
			        gridIndex: 1,
			        data: this.dates,
			        scale: true,
			        boundaryGap : false,
			        splitLine: {show: false},
			        axisLabel: {show: false},
			        axisTick: {show: false},
			        axisLine: { lineStyle: { color: '#ff5500' } },
			        splitNumber: 20,
			        min: 'dataMin',
			        max: 'dataMax',
			        axisPointer: {
			            type: 'shadow',
			            label: {show: false},
			            triggerTooltip: true,
			            handle: {
			                show: true,
			                margin: 30,
			                color: '#B80C00'
			            }
			        }
			    }],
			    yAxis: [{
			        scale: true,
			        splitNumber: 2,
			        axisLine: { lineStyle: { color: '#777' } },
			        splitLine: { show: true },
			        axisTick: { show: false },
			        axisLabel: {
			            inside: true,
			            formatter: '{value}\n'
			        }
			    }, {
			        scale: true,
			        gridIndex: 1,
			        splitNumber: 2,
			        axisLabel: {show: false},
			        axisLine: {show: false},
			        axisTick: {show: false},
			        splitLine: {show: false}
			    }],
			    grid: [{
			        left: 10,
			        right: 10,
			        top: 70,
			        height: 140
			    }, {
			        left: 10,
			        right: 10,
			        height: 40,
			        top: 260
			    }],
			    graphic: [{
			        type: 'group',
			        left: 'center',
			        top: 70,
			        width: 300,
			        bounding: 'raw',
			        children: [{
			            id: 'MA5',
			            type: 'text',
			            style: {fill: colorList[1], font: labelFont},
			            left: 0
			        }, {
			            id: 'MA10',
			            type: 'text',
			            style: {fill: colorList[2], font: labelFont},
			            left: 'center'
			        }, {
			            id: 'MA20',
			            type: 'text',
			            style: {fill: colorList[3], font: labelFont},
			            right: 0
			        }]
			    }],
			    series: 
			    [
				     {
				        type: 'candlestick', 
				        data: this.data,
				        itemStyle: {
				            normal: {
				                color: '#ef232a',
				                color0: '#14b143',
				                borderColor: '#ef232a',
				                borderColor0: '#14b143'
				            },
				            emphasis: {
				                color: 'black',
				                color0: '#444',
				                borderColor: 'black',
				                borderColor0: '#444'
				            }
				        }
				    }  
				] 
			});

  		}
  	}
}
</script> 
<style scoped>
	.container{
		padding:0 .3rem .3rem;
	}
	.echarts{
		width:100%;
		height:4.8rem;
	}  
	.tips{
		text-align: center;
		font-size:0;
		margin:.2rem 0;
	}
	.tips span{
		display:inline-block;
		font-size: 0.24rem; 
	    color: #999999;
	    width:1rem;
	    height:.5rem;
	    line-height:.5rem;
	    border:1px solid #e8e8e8;
	    margin-left:.15rem;
	}
	.tips span.active{
		background:#ff5555;
		color:#fff;
	}
	.detail::after{
		left:47%;
		top:-.5rem;
		border-top: .25rem solid transparent;
	    border-left: .25rem solid transparent;
	    border-right: .25rem solid transparent;
	    border-bottom: .25rem solid #f4f4f4;

	}   
</style>

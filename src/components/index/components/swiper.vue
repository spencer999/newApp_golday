
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide slide"   v-for="(item,index) in banner" :key="index">
         <a :href="item.web_url">
           <img :src="item.wap">
         </a>
       </div>
     </div>
     <!-- 如果需要分页器 -->
    <div class="swiper-pagination bullet"></div>
    <!-- 如果需要导航按钮
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'wrapper',
    data () {
      return {
        banner: [],
      }
    },
    created(){
      this.$http.get('/Mobile/Index/bannerData')
        .then((res)=>{
          console.log(res);
          this.banner=res.data;
          this.$nextTick(() => {
            // DOM更新了
            // swiper重新初始化
            /* eslint-disable no-new */
            let  mySwiper = new Swiper('.swiper-container', {
              autoplay: 2000,
              pagination : '.swiper-pagination',
            })
          })
        })
    }
  }
</script>

<style>
  .swiper-container {
    width: 100%;
    height: 3.6rem;
  }
  .swiper-slide,.swiper-slide img{
    width:100%;
    height:3.6rem;
  }
   
 .bullet span{
    width: 0.56rem;
    height: 0.05rem;
    border-radius: 0;
    background-color: #ffffff;
    opacity:1;
     margin:0 .04rem!important;
    font-size:0;
  }
  .bullet .swiper-pagination-bullet-active{
    background: #ff5555;
  }

</style>

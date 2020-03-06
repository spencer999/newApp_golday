<template>
  <div class="popMask" v-if="show">
    <div class="content">
      <div class="title">温馨提示</div>
      <div class="text">
        <p class="p"> 近日发现有公司网站:中盛金汇 http://www.ebangtao.cn/zh-cn/，冒用金盛贵金属有限公司的名义以及行员资质(香港金银业贸易场AA类047号行员)，并声称与金盛贵金属同属一家公司，以内地个人手机号码招揽个人及机构投资者进行黄金交易，推荐投资老师等。香港金盛贵金属有限公司郑重声明与上述网站没有任何关系，并已就此事件采取法律措施。 </p>

        <p class="p"> 敬请各界人士，尤其是我司广大投资者，提高警觉，免招损失。 </p>

          </div>
      <span class="warmClose" @click="closeWarn"> ✕ </span>
    </div>

  </div>
</template>

<script>
  export default{
    name:"warnPop",
    data(){
      return{
        show:true,

      }
    },
    methods:{
      closeWarn(){
        this.show = false;

      },




    }
  }
</script>

<style scope>
  .popMask{
    width:100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    position: fixed;
    top:0;
    left:0;
    z-index:100;
  }
  .popMask .content{
    position: absolute;
    top:50%;
    left:50%;
    width:85%;
    transform: translate(-50%,-50%);
    padding-bottom:.3rem;
    background: #fff;
  }
  .popMask  .content  .title{
    background: #f8f8f8;
    border-bottom: 1px solid #e0e0e0;
    width:100%;
    height:.8rem;
    line-height: .8rem;
    text-align: center;
    color:#333;
    font-size:.33rem;
  }
  .popMask  .content .text{
    width:90%;
    margin:.3rem  auto 0;
  }
  .popMask  .content .text p{
    font-size: .26rem;
    color: #666;
    text-indent: .35rem;
    line-height: .4rem;
    margin: .1rem 0;
    word-break: break-all;
  }
  .popMask .content .warmClose{
    position: absolute;
    width: .55rem;
    height: .55rem;
    line-height: .5rem;
    font-size: .4rem;
    text-align: center;
    color: #fff;
    background: #777777;
    border-radius: 50%;
    border: 2px solid #fff;
    top: -.25rem;
    right: -.25rem;
  }
</style>

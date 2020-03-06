<template>
    <div class="mask" v-show="show"  @click="fadeOut()">
      <img class="bg1" src="../img/yearBg.png" alt="">
      <img class="bg2"  src="../img/yearm.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "newYear2020",
        data(){
          return{
            show:true,
          }
        },
        mounted() {
          this.$nextTick(() => {
            setTimeout(this.fadeOut,9000)
          })
        },
        methods:{
          fadeOut(){
            this.show = false;
          },

        }
    }
</script>

<style scoped>
  .mask{
    width:100%;
    height: 100%;
    background:rgba(0,0,0,.7);
    position:fixed;
    top:0;
    left:0;
    z-index:100000;
  }
  .bg1{
    width:100%;
    display: block;
  }
  .bg2{
    width:0;
    margin:.3rem auto;
    display: block;
    transition:width 1s;
    animation: toShow 1s 2s forwards;
  }

  @keyframes toShow {
    from{width:0}
    to{
      width:75%;
    }
  }
</style>

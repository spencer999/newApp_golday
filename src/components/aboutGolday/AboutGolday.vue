<template>
    <div class="aboutGolday">
        <!-- 头部导航 -->
        <app-aboutNav></app-aboutNav>

        <router-view></router-view>
         
    </div> 
</template>

<script> 
import aboutNav from './components/AboutNav'
import footer from '../footer/Footer'
export default {
    name: 'aboutGolday', 
    components:{
        "app-aboutNav":aboutNav,
        "app-footer":footer,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
    
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' 
import promise from 'es6-promise'; 

promise.polyfill();//兼容低版本ios post无法请求

Vue.config.productionTip = false

//配置默认根路径
axios.defaults.baseURL="https://m.golday.com";
Vue.prototype.$http = axios;   
axios.interceptors.response.use(res => {
	//console.log('响应:', res.config.url, res)
  return res.data
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) 
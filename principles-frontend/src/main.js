import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import  Axios  from  'axios'

Vue.prototype.routing = router

Vue.config.productionTip = false

Vue.prototype.$http  =  Axios;
const  token  =  localStorage.getItem('token')

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] =  token
}


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

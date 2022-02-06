import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),                            // render App.vue
}).$mount('#app')                 // append it to the el. with #app in... ??index.html?? or the other one in App.vue?
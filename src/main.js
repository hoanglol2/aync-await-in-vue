import Vue from 'vue'
import App from './App.vue'

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

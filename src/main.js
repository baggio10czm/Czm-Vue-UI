import Vue from 'vue'
import App from './App.vue'

import Button from './components/cButton'
import Icon from './components/icon'
import ButtonGroup from './components/buttonGroup'

Vue.component('c-button', Button)
Vue.component('icon', Icon)
Vue.component('button-group', ButtonGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

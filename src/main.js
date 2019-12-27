import Vue from 'vue'
import App from './App.vue'

import Button from './components/cButton'
import Icon from './components/icon'
import ButtonGroup from './components/buttonGroup'
import cInput from './components/cInput'
import Row from './components/row'
import Column from './components/column'

Vue.component('c-button', Button)
Vue.component('icon', Icon)
Vue.component('button-group', ButtonGroup)
Vue.component('c-input', cInput)
Vue.component('row', Row)
Vue.component('column', Column)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import Button from './components/cButton'
import Icon from './components/icon'
import ButtonGroup from './components/buttonGroup'
import Input from './components/cInput'
import Row from './components/row'
import Column from './components/column'
import cLayout from './components/layout/layout'
import cHeader from './components/layout/cHeader'
import Content from './components/layout/cContent'
import cSider from './components/layout/cSider'
import cFooter from './components/layout/cFooter'

Vue.component('c-button', Button)
Vue.component('icon', Icon)
Vue.component('button-group', ButtonGroup)
Vue.component('c-input', Input)
Vue.component('row', Row)
Vue.component('column', Column)
Vue.component('c-layout', cLayout)
Vue.component('c-header', cHeader)
Vue.component('c-content', Content)
Vue.component('c-footer', cFooter)
Vue.component('c-sider', cSider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

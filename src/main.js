// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/scss/index.scss'
import VuePreview from 'vue-preview'
import infiniteScroll from 'vue-infinite-scroll'
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(infiniteScroll)
Vue.use(VuePreview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import i18n from './tools/i18n'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "jquery"
import App from './App'

Vue.use(ElementUI)


import axios from 'axios';
Vue.prototype.$axios = axios;



Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

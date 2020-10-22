import Vue from 'vue'
import App from './App'
import api from './api'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store;
Vue.prototype.$api = api;

const app = new Vue({
	store,
	...App
})
app.$mount()

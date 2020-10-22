//设置全局变量
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import addresses from '@/api/addresses'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: { //设置全局访问的 state对象，与初始值
		store: {},
		cart: [],
		orderType: 'takein',
		address: {},
		addresses: addresses,
		member: {},
		order: {}
	},
	getters: { //实时监听 state 值的变化并进行返回
		isLogin: state => Object.keys(state.member).length > 0 //是否登录
	},
	mutations: {  //修改 store 中的值唯一的方法
		SET_ORDER_TYPE(state, type){
			state.orderType = type;
		},
		SET_MEMVER(state, member){
			state.member = member;
		},
		SET_ADDRESS(state, address){
			state.address = address;
		},
		SET_ADDRESSES(state, addresses){
			state.addresses = addresses;
		},
		SET_STORE(state, store){
			state.store = store;
		},
		SET_CART(state, cart){
			state.cart = cart;
		},
		REMOVE_CART(state){
			state.cart = [];
		},
		SET_ORDER(state, order){
			state.order = order;
		}
	},
	
	actions: {
		async getStore({commit}) {
			const store = await api('store'); //设置store的值 通过SET_STORE编辑全局变量
			commit('SET_STORE', store);
		}
	}
		
})

export default store
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        newItem(state, payload) {
            state.items.push(payload)
        }
    }
})

store.commit('newItem', {
    name: 'Appel',
    value: 1.19.toFixed(2),
    amount: 0
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
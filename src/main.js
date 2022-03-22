import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        items: [{
                name: "Brood",
                value: 1.10,
                amount: 0,
            },
            {
                name: "Broccoli",
                value: 1.79,
                amount: 0
            },
            {
                name: "Krentenbollen",
                value: 1.59,
                amount: 0
            },
            {
                name: "Noten",
                value: 0.99,
                amount: 0
            },
            {
                name: "Aardappelen",
                value: 0.89,
                amount: 0
            },
        ]
    },
    mutations: {
        newItem(state, payload) {
            state += {
                name: payload.name,
                value: payload.value,
                amount: payload.amount
            }
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
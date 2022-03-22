import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
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
        increment(state) {
            state.count = 5
        },
        newItem(state, input1, input2) {
            {
                state.items.name = input1,
                    state.items.value = input2,
                    state.items.amount = 0
            }
        }
    },
})


new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
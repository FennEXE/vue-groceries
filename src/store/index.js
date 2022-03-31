import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        items: [{
                name: "Appel",
                value: 1.19,
                amount: 0
            },
            {
                name: "Peer",
                value: 0.99,
                amount: 0
            },
            {
                name: "Brood",
                value: 1.99,
                amount: 0
            }
        ]
    },
    mutations: {
        newItem(state, payload) {
            state.items.push({
                name: payload.name,
                value: Number(payload.value).toFixed(2),
                amount: 0
            })
        },
        removeItem(state, payload) {
            let filter;
            filter = state.items.filter(things => things != state.items[payload]);
            state.items = filter;

        },
        changeItem(state, payload) {
            state.items[payload.id] = {
                name: payload.name,
                value: Number(payload.value).toFixed(2),
                amount: 0,
            };
            
        }
    },
    getters: {
        productList(state) {
            return state.items
        }
    },
    actions: {
        addItem({ commit }, payload) {
            commit('newItem', payload)
        },
        deleteItem({ commit }, payload) {
            commit('removeItem', payload)
        },
        editItem({ commit }, payload) {
            commit('changeItem', payload)
        }
    }
});
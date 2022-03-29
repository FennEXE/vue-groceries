import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
            console.log(state.items);
            filter = state.items.filter(things => things != state.items[payload]);
            console.log(filter);
            state.items = filter;

        },
        changeItem(state, payload) {
            console.log(state.items[payload.id]);
            state.items[payload.id] = {
                name: payload.name,
                amount: 0,
                value: Number(payload.value).toFixed(2)
            };
            console.log(state.items[payload.id]);
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
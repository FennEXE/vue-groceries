import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [{
            name: "Appel",
            value: 1.19,
            amount: 0
        }]
    },
    mutations: {
        newItem(state, payload) {
            state.items.push(payload)
        }
    },
    getters: {
        productList(state){
            return state.items
        }
    },
    actions: {
        addItem({commit, itemName, itemValue}) {
            commit('newItem', {
                name: itemName,
                value: Number(itemValue).toFixed(2),
                amount: 0
            })
        }
    }
});
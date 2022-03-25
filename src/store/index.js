import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [
            {
            name: "Appel",
            value: 1.19,
            amount: 0
        },
        {
            name: "Peer",
            value: 0.99,
            amount: 0
        }
    ]},
    mutations: {
        newItem(state, payload) {
            console.log("B")
            state.items.push({
                name: payload.name,
                value: Number(payload.value).toFixed(2),
                amount: 0
            })
        }
    },
    getters: {
        productList(state){
            return state.items
        }
    },
    actions: {
        addItem({commit}) {
            console.log(commit(name))
            commit('newItem')
        }
    }
});
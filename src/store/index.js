import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    //strict to prevent bad habits.
    strict: true,
    state: {
        //A few basic items for testing purposes.
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
        //Changes the amount for items in state.items
        amountChange(state, payload){
            state.items[payload.id] = {
                name: state.items[payload.id].name,
                value: Number(state.items[payload.id].value).toFixed(2),
                amount: payload.amount
            }
        },
        //Add's a new item
        newItem(state, payload) {
            state.items.push({
                name: payload.name,
                value: Number(payload.value).toFixed(2),
                amount: 0
            })
        },
        //Removes an item
        removeItem(state, payload) {
            let filter;
            filter = state.items.filter(product => product != state.items[payload]);
            state.items = filter;

        },
        //Changes the value or name of a product, keeps the amount.
        changeItem(state, payload) {
            state.items[payload.id] = {
                name: payload.name,
                value: Number(payload.value).toFixed(2),
                amount: state.items[payload.id].amount,
            };
            
        }
    },
    getters: {
        //Sends the product list when called
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
        },
        changeAmount({commit}, payload) {
            commit('amountChange', payload);
        }
    }
});
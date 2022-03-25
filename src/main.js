import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Vuex);

//Import store
import store from "./store";

console.log(store.getters.productList); //This gets "Appel, 1.19, 0"

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')


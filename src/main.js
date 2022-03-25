import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Vuex);

//Import store
import store from "./store";


store.addItem('Appel', 1.19);

new Vue({
    store,
    render: h => h(App),
})
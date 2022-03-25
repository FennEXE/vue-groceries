import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Vuex);

//Import store
import store from "./store";

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')


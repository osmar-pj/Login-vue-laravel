import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Buefy)

const app = new Vue({
    el: '#root',
    template: `<app></app>`,
    components: { App },
    router,
    store
})
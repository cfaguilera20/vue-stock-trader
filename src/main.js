import Vue from 'vue';
import ViewRouter from 'vue-router';
import VuewResource from 'vue-resource';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

import { routes } from './routes';
import store from './store/store';

Vue.use(ViewRouter);
Vue.use(VuewResource);

Vue.http.options.root = 'https://vuejs-stockt.firebaseio.com/';

Vue.filter('currency', value => {
    return '$' + value.toLocaleString();
});

const router = new ViewRouter({
    mode: 'history',
    routes
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

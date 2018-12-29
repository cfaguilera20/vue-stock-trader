import Vue from 'vue';
import ViewRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(ViewRouter);

const router = new ViewRouter({
    mode: 'history',
    routes
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

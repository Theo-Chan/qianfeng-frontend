import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from "vue-router";
import less from 'less'
import routes from "./router/route";

const router = VueRouter.createRouter(
    {
        history:VueRouter.createWebHashHistory(),
        routes,
    }
);
createApp(App).use(router).use(less).mount('#app')

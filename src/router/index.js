import HelloWorld from "@/components/HelloWorld";
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: HelloWorld }
    ]
});

export default router
import {createWebHistory, createRouter} from 'vue-router';

import HomePage from '../Pages/HomePage.vue';
import ContactPage from '../Pages/ContactPage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
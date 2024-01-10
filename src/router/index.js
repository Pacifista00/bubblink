import { createRouter, createWebHistory} from 'vue-router';

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Account from '../views/Account.vue';

const routes = [
    {
        path: '/', 
        component: Login,
    },
    {
        path: '/home', 
        component: Home,
    },
    {
        path: '/account',
        component: Account, 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
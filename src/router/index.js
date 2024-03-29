import { createRouter, createWebHistory} from 'vue-router';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Search from '../views/Search.vue';

const routes = [
    {
        path: '/', 
        component: Login,
    },
    {
        path: '/register', 
        component: Register,
    },
    {
        path: '/home', 
        component: Home,
        meta: { requiresAuth: true } 
    },
    {
        path: '/profile/:userid',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true } 
    },
    {
        path: '/search',
        component: Search,
        meta: { requiresAuth: true } 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
      next({ path: '/', query: { alertMessage: 'You are unauthenticated. Please login first!' } });
    } else {
      next();
    }
});

export default router;
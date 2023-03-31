import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';

const Tabla = () => import('../views/Tabla.vue');
const Register = () => import('../views/Register.vue');

import store from '../store';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiereAuth: true,
    },
    children: [
      {
        path: '/dashboard/tabla',
        name: 'dashboard-tabla',
        component: Tabla,
      },
     
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      invitado: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      invitado: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiereAuth && !store.state.user.token){
    next({name: 'login'})
  }else if(store.state.user.token && to.meta.invitado){
    next({name: 'dashboard'})
  }else{
    next();
  }
});

export default router;
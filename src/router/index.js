import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Main',
    name: 'Main',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MainView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BodyMain.vue')
    }
  },
  {
    path: '/rega',
    name: 'Rega',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CreateUserView.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

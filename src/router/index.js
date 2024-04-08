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
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BodyMain.vue')
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HelpView.vue')
    }
  },
  {
    path: '/phone',
    name: 'phone',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CalculatorCenView.vue')
    }
  },
  {
    path: '/CreateRequest',
    name: 'CreateRequest',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CreateRequestView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

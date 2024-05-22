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
    path: '/samsung',
    name: 'samsung',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Phone/SamsungView.vue')
    }
  },
  {
    path: '/CreateRequest',
    name: 'CreateRequest',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CreateRequestView.vue')
    }
  },
  {
    path: '/apple',
    name: 'apple',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Phone/AppleView.vue')
    }
  },
  {
    path: '/xiaomi',
    name: 'xiaomi',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Phone/XiaomiView.vue')
    }
  },
  {
    path: '/asus',
    name: 'asus',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Laptop/AsusView.vue')
    }
  },
  {
    path: '/hp',
    name: 'hp',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Laptop/HpView.vue')
    }
  },
  {
    path: '/samsungLap',
    name: 'samsungLap',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Laptop/SamsungLaptopView.vue')
    }
  },
  {
    path: '/asusDesc',
    name: 'asusDe',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Desctop/AsusDescView.vue')
    }
  },
  {
    path: '/dell',
    name: 'dell',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Desctop/DellView.vue')
    }
  },
  {
    path: '/acer',
    name: 'acer',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Desctop/AcerView.vue')
    }
  },
  {
    path: '/samsungTable',
    name: 'samsungTable',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Tablet/SamsungTableView.vue')
    }
  },
  {
    path: '/ursus',
    name: 'ursus',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Tablet/UrsusView.vue')
    }
  },
  {
    path: '/dexp',
    name: 'dexp',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Tablet/DexpView.vue')
    }
  },
  {
    path: '/poligon',
    name: 'poligon',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PoligonView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

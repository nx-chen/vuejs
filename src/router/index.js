import Vue from 'vue'
import VueRouter from 'vue-router'
import TabView from '../views/TabView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Tab',
    name: 'Tab',
    component: TabView
  },
  {
    path: '/Modal',
    name: 'Modal',
    component: TabView
  },
  {
    path: '/Dropdown',
    name: 'Dropdown',
    component: TabView
  },
  {
    path: '/Table',
    name: 'Table',
    component: TabView
  },
  {
    path: '/Progress',
    name: 'Progress',
    component: TabView
  },
  {
    path: '/Breadcrumb',
    name: 'Breadcrumb',
    component: TabView
  },
  {
    path: '/Navbar',
    name: 'Navbar',
    component: TabView
  },
  {
    path: '/Skeleton',
    name: 'Skeleton',
    component: TabView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

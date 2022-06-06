import Vue from 'vue'
import VueRouter from 'vue-router'
import TabView from '../views/TabView.vue'
import HomeView from '../views/HomeView.vue'
import ModalView from '../views/ModalView.vue'
import DropdownView from '../views/DropdownView.vue'
import TableView from '../views/TableView.vue'
import ProgressView from '../views/ProgressView.vue'

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
    component: ModalView
  },
  {
    path: '/Dropdown',
    name: 'Dropdown',
    component: DropdownView
  },
  {
    path: '/Table',
    name: 'Table',
    component: TableView
  },
  {
    path: '/Progress',
    name: 'Progress',
    component: ProgressView
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import TabView from '../views/TabView.vue'
import HomeView from '../views/HomeView.vue'
import ModalView from '../views/ModalView.vue'
import DropdownView from '../views/DropdownView.vue'
import TableView from '../views/TableView.vue'
import ProgressView from '../views/ProgressView.vue'
import BreadcrumbView from '../views/BreadcrumbView.vue'
import NavbarView from '../views/NavbarView.vue'
import SkeletonView from '../views/SkeletonView.vue'

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
    component: BreadcrumbView
  },
  {
    path: '/Navbar',
    name: 'Navbar',
    component: NavbarView
  },
  {
    path: '/Skeleton',
    name: 'Skeleton',
    component: SkeletonView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

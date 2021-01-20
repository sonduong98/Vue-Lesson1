import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/components/Contacts.vue')
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

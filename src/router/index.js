import Vue from 'vue'
import VueRouter from 'vue-router'
import Wan from '../views/Wan.vue'
import Login from '../views/Login.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Wan',
    component: Wan
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/list',
    name: 'List',
    component:List
  },
  {
    path: '/detail',
    name: 'Detail',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

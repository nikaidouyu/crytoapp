import Vue from 'vue'
import VueRouter from 'vue-router'
import Wan from '../views/Wan.vue'
import Login from '../views/Login.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
import Detail2 from '../views/Detail2.vue'
import Detail3 from '../views/Detail3.vue'
import Detail4 from '../views/Detail4.vue'
import Detail5 from '../views/Detail5.vue'
import Detail6 from '../views/Detail6.vue'
import Detail7 from '../views/Detail7.vue'

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
  },
  {
    path: '/detail2',
    name: 'Detail2',
    component:Detail2
  },
  {
    path: '/detail3',
    name: 'Detail3',
    component:Detail3
  },
  {
    path: '/detail4',
    name: 'Detail4',
    component:Detail4
  },
  {
    path: '/detail5',
    name: 'Detail5',
    component:Detail5
  },
  {
    path: '/detail6',
    name: 'Detail6',
    component:Detail6
  },
  {
    path: '/detail7',
    name: 'Detail7',
    component:Detail7
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

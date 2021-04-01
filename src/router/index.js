import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Index from '../views/Index.vue'
import Login from '../Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  { path: '/loginwithtoken', name: 'loginwithtoken', component: Login },
  {
    path:'/about',
    name:'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


import { createRouter, createWebHistory } from 'vue-router'
import He from '../pages/He.vue'
import Page2 from '../pages/Page2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: He,
  },{
    path:'/page2',
    name: 'page2',
    component:Page2
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

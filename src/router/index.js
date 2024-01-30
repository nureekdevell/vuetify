import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import DL from '@/components/DL.vue'

const routes = [
  {
    path: '/',
    component: DL,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

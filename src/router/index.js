import { createRouter, createWebHistory } from 'vue-router'
import SwapPage from '../views/SwapPage.vue'

const routes = [
  { path: '/', name: 'SwapPage', component: SwapPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
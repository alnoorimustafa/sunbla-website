import { createRouter, createWebHistory } from 'vue-router'
import AppVue from '@/App.vue'

const router = createRouter({
  history: createWebHistory('/sunbla-website/'),
  routes: [
    {
      path: '/',
      component: AppVue
    }
  ]
})

export default router

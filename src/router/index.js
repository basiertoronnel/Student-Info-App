import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Students from '../pages/Students.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    redirect: '/'
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  }
]

// In production (GitHub Pages) app is served at /Student-Info-App/; in dev at /
const base = import.meta.env.PROD ? '/Student-Info-App/' : '/'
const router = createRouter({
  history: createWebHistory(base),
  routes
})

export default router

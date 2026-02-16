import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Students from '../pages/Students.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  }
]

// Hash mode works on GitHub Pages without server config; no base path issues
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

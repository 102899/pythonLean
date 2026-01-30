import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WebEditor from '../views/WebEditor.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/editor',
    name: 'WebEditor',
    component: WebEditor
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

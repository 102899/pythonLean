import { createRouter, createWebHashHistory } from 'vue-router'
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
  },
  {
    path: '/brain',
    name: 'KnowledgeMap',
    component: () => import('../views/KnowledgeMap.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

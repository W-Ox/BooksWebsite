import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WillsBooksView from '../views/WillsBooksView.vue'
import JessBooksView from '../views/JessBooksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/will',
    name: 'will',
    component: WillsBooksView
  },
  {
    path: '/jess',
    name: 'jess',
    component: JessBooksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

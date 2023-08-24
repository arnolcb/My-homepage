import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import SaveYourWorldView from '../views/SaveYourWorldView.vue'
import WaCalculatorView from '../views/WaCalculatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/projects/save-your-world',
      name: 'Save Your World',
      component: SaveYourWorldView
    },
    {
      path: '/projects/wa-calculator',
      name: 'WA Calculator',
      component: WaCalculatorView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    }
  ]
})

export default router

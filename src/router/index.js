import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('../views/PlanView.vue'),
    },
  ],
})

router.beforeEach(async (to, from) => {
  // Lazy-load the store within the guard to ensure app context
  const { useResortStore } = await import('@/stores/resortStore')
  const resortStore = useResortStore()

  if (to.name === 'plan' && !resortStore.selectedResortId) {
    return { name: 'home' }
  }
})

export default router

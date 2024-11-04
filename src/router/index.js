import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('../views/PlansView.vue'),
      children: [
        {
          path: 'schedule', // This path will be appended to /plans
          name: 'schedule',
          component: () => import('../views/PlansView.vue'), // Add your ScheduleView component
          children: [
            {
              path: ':index', // This will match /plans/schedule/:index
              name: 'week-detail',
              component: () => import('../views/PlansView.vue'), // Add your SingleWeek component
              props: true, // Automatically pass route.params to the component as props
            },
          ],
        },
      ],
    },
  ],
})

export default router

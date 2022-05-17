import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// cus1 projects
import FirstProject from '../views/FirstProject.vue'
import FirstProjectMainCourses from '../views/FirstProjectMainCourses.vue'
import ThirdProject from '../views/ThirdProject.vue'
import ThankYou from '../views/ThankYou.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/first-project',
      name: 'first-project',
      component: FirstProject
    },
    {
      path: '/first-project-main-courses',
      name: 'first-project-main-courses',
      component: FirstProjectMainCourses
    },
    {
      path: '/third-project',
      name: 'third-project',
      component: ThirdProject
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router

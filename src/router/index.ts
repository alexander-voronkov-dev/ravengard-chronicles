import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import StoryPage from '../views/StoryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, left: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/story/:storyId',
      name: 'story',
      component: StoryPage,
    },
  ],
})

export default router

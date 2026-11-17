import AboutView from '@/View/AboutView.vue'
import ContactView from '@/View/ContactView.vue'
import HomeView from '@/View/HomeView.vue'
import ResumeView from '@/View/ResumeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/abouts',
      name: 'about',
      component: AboutView
    },
    {
      path: '/resume',
      name: 'resum',
      component: ResumeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
})


export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '@/components/HomePage.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomePage
//     },

//   ]
// })

// export default router
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Automation from '@/components/Automation.vue'
import DigitalMarketing from '@/components/DigitalMarketing.vue'
import AdvancedMarketing from '@/components/AdvancedMarketing.vue'
import AdditionalPage from '@/components/AdditionalPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/automation',
      name: 'automation',
      component: Automation
    },
    {
      path: '/digital-marketing',
      name: 'digital-marketing',
      component: DigitalMarketing
    },
    {
      path: '/advanced-marketing',
      name: 'advanced-marketing',
      component: AdvancedMarketing
    },
    {
      path: '/additional-page',
      name: 'additional-page',
      component: AdditionalPage
    }
  ]
})

export default router

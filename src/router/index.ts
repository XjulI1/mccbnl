import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VHome.vue'
import LoginView from '../views/VLogin.vue'
import { getItem, LocalStorageKeys } from '../utils/localStorage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/VAbout.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guest: true },
    },
  ],
})

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!getItem(LocalStorageKeys.AUTH_TOKEN)

  // Routes that require authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      next({ name: 'login' })
    } else {
      next()
    }
  }
  // Routes that are for guests only (like login)
  else if (to.matched.some((record) => record.meta.guest)) {
    if (isAuthenticated) {
      // Redirect to home if already authenticated
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VHome.vue'
import LoginView from '../views/VLogin.vue'
import SettingsView from '../views/VSettings.vue'
import { authHelper } from '../utils/authHelper'

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
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { requiresAuth: true },
    },
  ],
})

// Navigation guard to check authentication
router.beforeEach(async (to, from, next) => {
  await authHelper.checkAuthentication()
  const isAuthenticated = authHelper.isAuthenticated.value

  // Routes that require authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated or token invalid
      next({ name: 'login' })
    } else {
      next()
    }
  }
  // Routes that are for guests only (like login)
  else if (to.matched.some((record) => record.meta.guest)) {
    if (isAuthenticated) {
      // Redirect to home if already authenticated with valid token
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

import { useAuthStore } from '../stores/auth'

export default defineNuxtRouteMiddleware(async(to) => {
  const authStore = useAuthStore()
  await authStore.loadProfile()
  console.log(to.meta.requiresAuth)
  if (to.meta.requiresAuth && !authStore.user.isLoggedIn && to.path !== '/login') {
    return navigateTo('/login')
  }
})
import {defineStore} from 'pinia'
import { api } from '../api'
import {Notify} from 'quasar'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({
    isLoggedIn: false,
    steam_id: null,
  })

  function login(): void {
    window.location.replace('http://localhost:5000/api/auth/steam/login')
  }

  async function loadProfile(): Promise<void> {
    try {
      const {data} = await api.get('/auth/profile')

      if (data) {
        user.value = {
          isLoggedIn: true,
          ...data,
        }
      }
    } catch (error: unknown) {
      Notify.create(error as string)
    }
   
  }

  return {
    user,
    login,
    loadProfile,
  }
})
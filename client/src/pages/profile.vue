<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import {useQuasar} from 'quasar'

const $q = useQuasar()
const authStore = useAuthStore()

onMounted(async () => {
 /*   try {
    await authStore.loadProfile()
  } catch (error: unknown) {
    $q.notify(error as string)
  } */
})
</script>

<template>
 <div class="column">
    <span class="text-h4">Profile</span>
    <pre>User Data: {{JSON.stringify(authStore.user)}}</pre>
  </div>
</template>

<style scoped>

</style>
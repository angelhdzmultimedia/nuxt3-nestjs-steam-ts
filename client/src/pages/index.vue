<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

definePageMeta({
  requiresAuth: true
})

const authStore = useAuthStore()
</script>

<template>
  <div class="column">
    <span class="text-h4">Welcome, {{authStore.user.steam_id}}</span>
    <q-btn color="primary" to="/about">About</q-btn>
  </div>
</template>

<style scoped>

</style>
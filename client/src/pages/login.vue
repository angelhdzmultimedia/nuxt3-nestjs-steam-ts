<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <div class="column items-center">
    <span class="text-h4">Login</span>
    <q-btn @click="authStore.login" align="around" color="primary" icon="fa-brands fa-steam" label="Login With Steam"></q-btn>
  </div>
</template>

<style scoped>

</style>
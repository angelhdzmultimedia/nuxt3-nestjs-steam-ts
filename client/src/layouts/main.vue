<script setup lang="ts">

</script>

<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-btn icon="menu"></q-btn>
        <q-toolbar-title>
          App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="column items-center justify-center full-width full-height">
        <NuxtPage :key="$route.path"/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>
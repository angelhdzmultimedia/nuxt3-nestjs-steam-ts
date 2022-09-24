<script setup lang="ts">
import {useQuasar} from 'quasar'
const $q = useQuasar()
$q.dark.set(true)
</script>

<template>
    <NuxtLayout name="main"/>
</template>

<style>
  * {
    font-family: sans-serif;
  }
</style>
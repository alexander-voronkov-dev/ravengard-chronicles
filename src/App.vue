<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="app-shell">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.app-shell {
  width: min(1240px, 100%);
  margin: 0 auto;
}
</style>

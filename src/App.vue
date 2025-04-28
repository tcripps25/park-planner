<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>
<template>
  <div class="app-container">
    <AppHeader />
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Ensure RouterView's content (HomeView) can grow */
:deep(.main-container) {
  /* Or target RouterView directly if needed */
  flex-grow: 1;
  display: flex;
  /* Add display:flex if HomeView's root isn't already flex/grid */
  flex-direction: column;
  /* Add if needed */
  min-height: 0;
  /* Keep this from previous suggestions */
}
</style>

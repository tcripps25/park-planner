<script setup>
import { RouterView } from 'vue-router'

import MainSidebar from './components/MainSidebar.vue';
</script>

<template>
  <div class="flex-col flex h-screen overflow-hidden">

    <div class="flex h-full">
      <MainSidebar />
      <div class="flex flex-col grow">
        <div class="ml-10">
        </div>
        <main class="p-5 grow bg-white">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

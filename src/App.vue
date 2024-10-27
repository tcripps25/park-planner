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
        <main class="p-5 rounded-s-xl border shadow grow bg-slate-100">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

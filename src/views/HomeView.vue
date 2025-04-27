<script setup>
import SelectPark from '@/components/SelectPark.vue';
import AttractionList from '@/components/AttractionList.vue';


import { onMounted } from 'vue';



onMounted(() => {
  // Any initial setup (e.g., to fetch default park data if needed)
});
</script>

<template>
  <div class="main-container container">
    <SelectPark />
    <AttractionList />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}
</style>

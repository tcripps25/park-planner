<script setup>
import SelectPark from '@/components/SelectPark.vue';
import AttractionList from '@/components/AttractionList.vue';
import { onMounted } from 'vue';
import SelectedPlans from '@/components/SelectedPlans.vue';

onMounted(() => {
  // Any initial setup (e.g., to fetch default park data if needed)
});
</script>

<template>
  <div class="main-container">
    <div class="selected-plans-wrapper">
      <SelectedPlans />
    </div>
    <div class="selection-container">
      <SelectPark />
      <AttractionList />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 3fr minmax(0, 1fr);
  gap: 2rem;
  overflow: hidden;
  min-height: 0;
}

.selected-plans-wrapper {
  overflow-y: auto;
  min-height: 0;
  padding: 2rem;
}

.selection-container {
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  padding: 2rem;
}
</style>

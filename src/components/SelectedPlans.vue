<script setup>
import { useParkStore } from '@/stores/parkStore';
import ActivityCard from './ActivityCard.vue';
import PlanCalendar from './PlanCalendar.vue';

const parkStore = useParkStore();
</script>
<template>
  <div class="selected-plans-container">
    <PlanCalendar />
    <h1>Selected Plans</h1>
    <div class="selected-plans-list">
      <ActivityCard v-for="activity in parkStore.selectedRideObjects" :activity="activity" :key="activity.id"
        selected />
    </div>
  </div>
</template>

<style scoped>
.selected-plans-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  height: 100%;
  padding: 1rem;
  border-radius: .5rem;
  overflow: hidden;

  .selected-plans-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>

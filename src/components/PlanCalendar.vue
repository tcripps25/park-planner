<script setup>
import { useTripStore } from '@/stores/tripStore';


const tripStore = useTripStore();
</script>


<template>
  <div class="plan-calendar-list">
    <div v-for="day in tripStore.tripDays" :key="day.id" class="day-card">
      {{ day.weekday }}
      {{ day.day }}
      {{ day.month }}

    </div>
  </div>
</template>

<style scoped>
.plan-calendar-list {
  display: flex;
  gap: 1rem;

  .day-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    min-width: 10rem;
    background-color: var(--main-accent);
    border-radius: .5rem;
  }
}
</style>

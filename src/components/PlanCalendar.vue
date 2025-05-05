<script setup>
import { useTripStore } from '@/stores/tripStore';
import DayCard from './DayCard.vue';


const tripStore = useTripStore();
</script>


<template>
  <div class="plan-calendar-list">
    <div v-for="(day, index) in tripStore.tripDays" :key="day.id" class="plan-calendar-container">
      <!-- Only show month label if it's the first item OR month changes -->
      <span class="month-label" v-if="index === 0 || day.month !== tripStore.tripDays[index - 1].month">
        {{ day.month }}
      </span>

      <DayCard :day="day" />
    </div>
  </div>
</template>

<style scoped>
.plan-calendar-list {
  display: flex;
  gap: 1rem;
  overflow: scroll;
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: -1rem;

  .plan-calendar-container {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-top: 2rem;
    position: relative;

    .month-label {
      position: absolute;
      top: 0;
      font-weight: 600;
      font-size: 1rem;
      text-transform: uppercase;
      color: var(--text-muted);
    }
  }


}
</style>

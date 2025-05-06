<script setup>
import { useTripStore } from '@/stores/tripStore'
import DayCard from './DayCard.vue'

const tripStore = useTripStore()

function isFirstOfMonth(day, index, days) {
  return index === 0 || day.month !== days[index - 1].month
}
</script>

<template>
  <div class="plan-calendar-list">
    <div v-for="(day, index) in tripStore.tripDays" :key="day.id" class="plan-calendar-container">
      <!-- Month label only before first day of a new month -->
      <DayCard v-if="isFirstOfMonth(day, index, tripStore.tripDays)" :title="day.month" :day="day" />
      <DayCard v-else :day="day" />
    </div>
  </div>
</template>

<style scoped>
.plan-calendar-list {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  margin: -1rem;
}

.plan-calendar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
}
</style>

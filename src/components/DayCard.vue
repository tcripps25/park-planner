<script setup>

const props = defineProps({
  day: Object,
})
</script>

<template>
  <div class="day-card">
    <div class="weekday">{{ day.weekday }}</div>
    <div class="day">{{ day.day }}</div>
  </div>
</template>

<style scoped>
.day-card {
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-content: center;
  min-width: 5rem;
  background-color: var(--grey-bg);
  border: 1px solid var(--grey-border);
  border-radius: .5rem;
  padding: .5rem;

  .day {
    font-size: 1.4rem;
    font-weight: 500;
  }
}
</style>

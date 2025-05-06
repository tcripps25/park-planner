<script setup>

const props = defineProps({
  day: Object,
  title: String,
})
</script>

<template>
  <div class="day-card-container">
    <div><span class="month-label" v-if="title">{{ title }}</span></div>
    <button class="day-card">

      <div class="content">
        <div class="weekday">{{ day.weekday }}</div>
        <div class="day">{{ day.day }}</div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.day-card-container {
  position: relative;

  .day-card {
    cursor: pointer;
    display: flex;
    gap: .5rem;
    margin-top: 2rem;
    min-width: 5rem;
    background-color: var(--grey-bg);
    border: 1px solid var(--grey-border);
    border-radius: .3rem;
    padding: .5rem;
    transition: all 0.15s ease-in-out;

    &:hover {
      border: 1px solid var(--main-accent);
      transform: scale(1.05);
    }

    .content {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      gap: .5rem;
      width: 100%;

      .day {
        font-size: 1.2rem;
        font-weight: 500;
      }

    }
  }
}

.month-label {
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  position: absolute;
  margin-bottom: 0.25rem;
  color: var(--text-muted, #666);
}
</style>

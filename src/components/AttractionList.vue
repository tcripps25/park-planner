<script setup>

import { useParkStore } from '@/stores/parkStore';

import ActivityCard from '@/components/ActivityCard.vue';

const parkStore = useParkStore();

</script>

<template>
  <!-- Ride List -->
  <div v-if="parkStore.loading">
    Loading rides...
  </div>
  <div v-else-if="parkStore.error">
    Error: {{ parkStore.error }} <!-- Display the actual error message -->
  </div>
  <!-- Check if a park is selected AND there are no errors/loading -->
  <div v-else-if="parkStore.selectedParkId">
    <h2>Activities</h2>

    <!-- --- CHANGE HERE --- -->
    <!-- Loop through the categories using parkStore.rides -->
    <div v-for="(categoryRides, categoryName) in parkStore.rides" :key="categoryName">
      <!-- Only display categories with rides -->
      <div v-if="categoryRides.length > 0">
        <h3>{{ categoryName }}</h3>
        <ul class="attraction-grid">
          <li v-for="activity in categoryRides" :key="activity.id">
            <ActivityCard :activity="activity" />
          </li>
        </ul>
      </div>
    </div>
    <!-- Optional: Message if no rides found for a selected park -->
    <div
      v-if="!parkStore.loading && parkStore.selectedParkId && Object.values(parkStore.rides).every(cat => cat.length === 0)">
      No rides found for this park.
    </div>
  </div>
  <!-- Optional: Message to select a park -->
  <div v-else-if="!parkStore.selectedParkId && !parkStore.loading && !parkStore.error">
    Please select a park to see the rides.
  </div>
</template>

<style scoped>
h2 {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: 500;
}

h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.attraction-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}
</style>

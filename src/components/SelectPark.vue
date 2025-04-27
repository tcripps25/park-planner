// /Users/tom/Sites/park-planner/src/components/SelectPark.vue
<script setup>
import { useParkStore } from '@/stores/parkStore';
import { ref } from 'vue';

const parkStore = useParkStore();

// Example resorts and parks (you would eventually fetch from ThemePark API)
const resorts = [
  {
    id: 'e8d0207f-da8a-4048-bec8-117aa946b2c2',
    name: 'Disneyland Paris',
    parks: [
      { id: 'ca888437-ebb4-4d50-aed2-d227f7096968', name: 'Walt Disney Studios Park' },
      { id: 'dae968d5-630d-4719-8b06-3d107e944401', name: 'Disneyland Park' }
    ]
  },
  {
    id: 'e957da41-3552-4cf6-b636-5babc5cbc4e5',
    name: 'Walt Disney World Resort',
    parks: [
      {
        id: "75ea578a-adc8-4116-a54d-dccb60765ef9",
        name: "Magic Kingdom Park"
      },
      {
        id: "47f90d2c-e191-4239-a466-5892ef59a88b",
        name: "EPCOT"
      },
      {
        id: "288747d1-8b4f-4a64-867e-ea7c9b27bad8",
        name: "Disney's Hollywood Studios"
      },
      {
        id: "1c84a229-8862-4648-9c71-378ddd2c7693",
        name: "Disney's Animal Kingdom Theme Park"
      },
      {
        id: "b070cbc5-feaa-4b87-a8c1-f94cca037a18",
        name: "Disney's Typhoon Lagoon Water Park"
      },
      {
        id: "ead53ea5-22e5-4095-9a83-8c29300d7c63",
        name: "Disney's Blizzard Beach Water Park"
      }
    ]
  }
];

const selectedResort = ref(null);
const selectedPark = ref(null);

function handleResortSelect(event) {
  selectedResort.value = event.target.value;
  selectedPark.value = null; // Reset selected park when resort changes
  // Also clear rides in the store if a resort changes and park becomes null
  if (!selectedPark.value) {
    parkStore.setSelectedPark(null); // This will clear rides in the store
  }
}

// --- CHANGE HERE ---
// Removed async and the redundant fetchRides call
function handleParkSelect(event) {
  const parkId = event.target.value;
  selectedPark.value = parkId;
  // This call will trigger the fetch inside the store
  parkStore.setSelectedPark(parkId);
  // await parkStore.fetchRides(); // --- REMOVE THIS LINE ---
}
</script>

<template>
  <div>
    <!-- Select Resort -->
    <label for="resort">Select a Resort:</label>
    <select id="resort" @change="handleResortSelect">
      <option disabled selected value="">Select a resort</option>
      <option v-for="resort in resorts" :key="resort.id" :value="resort.id">
        {{ resort.name }}
      </option>
    </select>

    <!-- Select Park (only shows if a resort is selected) -->
    <div v-if="selectedResort">
      <label for="park">Select a Park:</label>
      <select id="park" @change="handleParkSelect">
        <option disabled selected value="">Select a park</option>
        <option v-for="park in resorts.find(r => r.id === selectedResort)?.parks" :key="park.id" :value="park.id">
          {{ park.name }}
        </option>
      </select>
    </div>


  </div>
</template>

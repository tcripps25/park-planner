<script setup>
import { useResortStore } from '@/stores/resortStore'
import { useParkStore } from '@/stores/parkStore'
import { ref } from 'vue'

import { Select } from 'primevue'

const resortStore = useResortStore()
const parkStore = useParkStore()

const selectedPark = ref(null)




</script>

<template>
  {{ resortStore.selectedResort.name }}

  <!-- Park Selector -->

  <div v-if="resortStore.selectedResort" class="w-full">
    <label for="park">Select a Park:</label>
    <Select class="w-full" v-model="parkStore.selectedParkId" :options="resortStore.availableParks" optionLabel="name"
      optionValue="id" placeholder="Select a Park" />
  </div>
</template>

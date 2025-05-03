// /src/stores/resortStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useResortStore = defineStore('resortStore', () => {
  // --- STATE
  const selectedResortId = ref(null)

  const resorts = [
    {
      id: 'e8d0207f-da8a-4048-bec8-117aa946b2c2',
      name: 'Disneyland Paris',
      parks: [
        { id: 'ca888437-ebb4-4d50-aed2-d227f7096968', name: 'Walt Disney Studios Park' },
        { id: 'dae968d5-630d-4719-8b06-3d107e944401', name: 'Disneyland Park' },
      ],
    },
    {
      id: 'e957da41-3552-4cf6-b636-5babc5cbc4e5',
      name: 'Walt Disney World Resort',
      parks: [
        { id: '75ea578a-adc8-4116-a54d-dccb60765ef9', name: 'Magic Kingdom Park' },
        { id: '47f90d2c-e191-4239-a466-5892ef59a88b', name: 'EPCOT' },
        { id: '288747d1-8b4f-4a64-867e-ea7c9b27bad8', name: "Disney's Hollywood Studios" },
        { id: '1c84a229-8862-4648-9c71-378ddd2c7693', name: "Disney's Animal Kingdom Theme Park" },
        { id: 'b070cbc5-feaa-4b87-a8c1-f94cca037a18', name: "Disney's Typhoon Lagoon Water Park" },
        { id: 'ead53ea5-22e5-4095-9a83-8c29300d7c63', name: "Disney's Blizzard Beach Water Park" },
      ],
    },
  ]

  // --- GETTERS
  const selectedResort = computed(
    () => resorts.find((r) => r.id === selectedResortId.value) || null,
  )

  const availableParks = computed(() => selectedResort.value?.parks || [])

  // --- ACTIONS
  function setSelectedResort(resortId) {
    selectedResortId.value = resortId
  }

  return {
    selectedResortId,
    resorts,
    selectedResort,
    availableParks,
    setSelectedResort,
  }
})

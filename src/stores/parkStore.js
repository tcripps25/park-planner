import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useFetchRides } from '@/composables/useFetchRides' // Import the composable

export const useParkStore = defineStore('parkStore', () => {
  // --- STATE
  const selectedParkId = ref(null)
  const selectedRides = ref([])
  const tripStartTime = ref('09:00')

  // --- COMPOSABLE: Fetch rides
  const { rides, loading, error, fetchRides } = useFetchRides(selectedParkId)

  // --- ACTIONS
  async function setSelectedPark(parkId) {
    selectedParkId.value = parkId
    selectedRides.value = [] // Clear selected rides when park changes
    // Ensure fetchRides is only called after park selection
    if (selectedParkId.value) {
      try {
        await fetchRides() // Ensure the rides are fetched before updating the store
      } catch (err) {
        error.value = 'Failed to fetch rides'
      }
    } else {
      // Optionally clear rides if park is deselected
      rides.value = { SHOW: [], ATTRACTION: [], RESTAURANT: [], OTHER: [] }
      error.value = null // Clear error
    }
  }

  function selectRide(rideId) {
    if (!selectedRides.value.includes(rideId)) {
      selectedRides.value.push(rideId)
    }
  }

  function deselectRide(rideId) {
    selectedRides.value = selectedRides.value.filter((id) => id !== rideId)
  }

  function setStartTime(time) {
    tripStartTime.value = time
  }

  // --- GETTERS
  const selectedRideObjects = computed(() => {
    const allRides = [
      ...(rides.value?.SHOW || []),
      ...(rides.value?.ATTRACTION || []),
      ...(rides.value?.RESTAURANT || []),
      ...(rides.value?.OTHER || []),
    ]
    return allRides.filter((ride) => selectedRides.value.includes(ride.id))
  })

  return {
    // State
    selectedParkId,
    selectedRides,
    tripStartTime,
    rides,
    loading,
    error,
    // Actions
    setSelectedPark,
    selectRide,
    deselectRide,
    setStartTime,
    // Composables (fetchRides might not need to be exposed if only called internally)
    fetchRides, // You might not need to expose this
    // Getters
    selectedRideObjects,
  }
})

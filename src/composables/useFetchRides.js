// /src/composables/useFetchRides.js
import { ref, watch } from 'vue'
import axios from 'axios'

const API_BASE_URL = 'https://api.themeparks.wiki/v1/entity'

// Local metadata (consider moving)
const rideMetadata = {
  '6ea670b8-3097-4d60-b69c-94e16071da17': {
    duration: 8,
    land: 'Adventureland',
    avgWait: { morning: 15, midday: 25, evening: 10 },
  },
  'another-ride-id': {
    duration: 5,
    land: 'Tomorrowland',
    avgWait: { morning: 20, midday: 60, evening: 40 },
  },
  // ... other metadata
}

// Accept a getter function that returns the park ID
export function useFetchRides(getParkId) {
  const rides = ref({ SHOW: [], ATTRACTION: [], RESTAURANT: [], OTHER: [] })
  const loading = ref(false)
  const error = ref(null)

  const resetState = () => {
    rides.value = { SHOW: [], ATTRACTION: [], RESTAURANT: [], OTHER: [] }
    error.value = null
    loading.value = false
  }

  const fetchRides = async (parkId) => {
    if (!parkId) {
      resetState()
      console.log('No park selected, clearing rides.')
      return
    }

    console.log(`Attempting to fetch rides for park ID: ${parkId}`)
    loading.value = true
    error.value = null
    rides.value = { SHOW: [], ATTRACTION: [], RESTAURANT: [], OTHER: [] } // Clear previous

    try {
      const url = `${API_BASE_URL}/${parkId}/children`
      console.log(`Requesting rides from API: ${url}`)
      const response = await axios.get(url)
      console.log('Response from API:', response)

      const children = response.data.children || []
      const categorizedRides = { SHOW: [], ATTRACTION: [], RESTAURANT: [], OTHER: [] }

      children.forEach((ride) => {
        if (!ride || typeof ride !== 'object' || !ride.id || !ride.name || !ride.entityType) {
          console.warn('Skipping invalid ride data:', ride)
          return
        }
        const metadata = rideMetadata[ride.id] || {}
        const rideData = {
          id: ride.id,
          name: ride.name,
          entityType: ride.entityType,
          duration: metadata.duration ?? 'Unknown',
          land: metadata.land ?? 'Unknown',
          avgWait: metadata.avgWait ?? { morning: 0, midday: 0, evening: 0 },
        }
        switch (ride.entityType) {
          case 'SHOW':
            categorizedRides.SHOW.push(rideData)
            break
          case 'ATTRACTION':
            categorizedRides.ATTRACTION.push(rideData)
            break
          case 'RESTAURANT':
            categorizedRides.RESTAURANT.push(rideData)
            break
          default:
            categorizedRides.OTHER.push(rideData)
            break
        }
      })

      console.log('Categorized Rides:', categorizedRides)
      rides.value = categorizedRides
    } catch (err) {
      console.error('Error fetching rides:', err)
      error.value = `Failed to fetch rides for park ${parkId}. Please try again.`
      rides.value = { SHOW: [], ATTRACTION: [], RESTAURANT: [], OTHER: [] } // Clear on error
    } finally {
      loading.value = false
    }
  }

  // --- Watcher ---
  // Watch the getter function passed from the store
  watch(
    getParkId, // Watch the getter function directly
    (newParkId, oldParkId) => {
      console.log(`Park ID changed via getter from ${oldParkId} to ${newParkId}`)
      fetchRides(newParkId)
    },
    { immediate: true }, // Trigger immediately
  )

  return { rides, loading, error, fetchRides }
}

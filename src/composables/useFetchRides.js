import { ref } from 'vue'
import axios from 'axios'

const API_BASE_URL = 'https://api.themeparks.wiki/v1/entity'

// Local metadata for rides (for now, we'll keep it in the composable as well)
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
}

export function useFetchRides(selectedParkId) {
  const rides = ref({
    SHOW: [],
    ATTRACTION: [],
    RESTAURANT: [],
    OTHER: [],
  })
  const loading = ref(false)
  const error = ref(null)

  const fetchRides = async () => {
    if (!selectedParkId.value) {
      error.value = 'No park selected'
      return
    }

    loading.value = true
    error.value = null

    try {
      const url = `${API_BASE_URL}/${selectedParkId.value}/children`
      console.log(`Requesting rides from API: ${url}`)

      const response = await axios.get(url)
      console.log('Response from API:', response) // Log API response

      const children = response.data.children || []

      const categorizedRides = {
        SHOW: [],
        ATTRACTION: [],
        RESTAURANT: [],
        OTHER: [],
      }

      children.forEach((ride) => {
        const rideData = {
          id: ride.id,
          name: ride.name,
          entityType: ride.entityType,
          duration: rideMetadata[ride.id]?.duration || 'Unknown',
          land: rideMetadata[ride.id]?.land || 'Unknown',
          avgWait: rideMetadata[ride.id]?.avgWait || { morning: 0, midday: 0, evening: 0 },
        }

        if (ride.entityType === 'SHOW') {
          categorizedRides.SHOW.push(rideData)
        } else if (ride.entityType === 'ATTRACTION') {
          categorizedRides.ATTRACTION.push(rideData)
        } else if (ride.entityType === 'RESTAURANT') {
          categorizedRides.RESTAURANT.push(rideData)
        } else {
          categorizedRides.OTHER.push(rideData)
        }
      })

      console.log('Categorized Rides:', categorizedRides) // Log categorized rides

      rides.value = categorizedRides
    } catch (err) {
      console.error('Error fetching rides:', err)
      error.value = 'Failed to fetch rides'
    } finally {
      loading.value = false
    }
  }

  return { rides, loading, error, fetchRides }
}

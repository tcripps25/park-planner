import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Day } from '@/models/Day'

export const useTripStore = defineStore('tripStore', () => {
  const tripDateRange = ref([])

  function setTripDates(dateRange) {
    tripDateRange.value = dateRange
  }

  const tripDays = computed(() => {
    const [start, end] = tripDateRange.value || []
    if (!start || !end) return []

    const days = []
    const current = new Date(start)

    while (current <= new Date(end)) {
      days.push(new Day(current))
      current.setDate(current.getDate() + 1)
    }

    return days
  })

  return {
    tripDateRange,
    setTripDates,
    tripDays,
  }
})

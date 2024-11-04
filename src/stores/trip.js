import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Plan from '@/classes/Plan'

export const useTripStore = defineStore('trip', () => {
  // Define the state
  const plans = ref([]) // Initialize an empty array for plans

  // Method to add a new plan
  const addPlan = (
    name = 'Untitled Plan',
    startDate = new Date(),
    endDate = new Date(),
  ) => {
    // Create a new instance of Plan with default or provided values
    const newPlan = new Plan(name, startDate, endDate)

    // Add the new Plan instance to the plans array
    plans.value.push(newPlan)
  }

  // Optionally, you can create a computed property for easier access to plans
  const getPlans = computed(() => plans.value)

  // Expose the plans array and addPlan function
  return { plans, addPlan, getPlans }
})

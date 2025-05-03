<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useParkStore } from '@/stores/parkStore'
import { useResortStore } from '@/stores/resortStore'
import { useTripStore } from '@/stores/tripStore'


import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import Button from 'primevue/button'

const router = useRouter()

const tripStore = useTripStore()
const parkStore = useParkStore()
const resortStore = useResortStore()

const selectedResortId = ref(null)


const tripDates = ref([]) // [startDate, endDate]

function startNewPlan() {
  resortStore.setSelectedResort(selectedResortId.value)
  tripStore.setTripDates(tripDates.value)
  router.push({ name: 'plan' })
}
</script>

<template>
  <section class="start-screen">
    <h1>Start Your Plan</h1>

    <div class="form-group">
      <Select v-model="selectedResortId" id="resort" :options="resortStore.resorts" optionLabel="name" optionValue="id"
        placeholder="Select a Resort" class="w-full" />
    </div>

    <DatePicker placeholder="When are you going?" v-model="tripDates" selection-mode="range" class="date-picker" />

    <Button label="Start Planning" @click="startNewPlan" :disabled="!selectedResortId || tripDates.length !== 2" />

    <Button disabled severity="secondary" label="Load Saved Plan" />
  </section>
</template>

<style scoped>
.start-screen {
  min-width: 500px;
  margin: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}



.form-group {
  margin-bottom: 1rem;
  width: 100%;
}
</style>

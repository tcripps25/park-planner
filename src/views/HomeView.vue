<script setup>
import Button from '@/components/ui/Button.vue';
import { useTripStore } from '@/stores/trip';

const trip = useTripStore()
</script>

<template>

  <div class="about">
    <h1>This is the home page</h1>
    <Button label="Add Plan" @click="trip.addPlan('Plan')" />
  </div>

</template>

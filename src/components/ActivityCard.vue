<script setup>
import { useParkStore } from '@/stores/parkStore';
import { MapPinIcon } from '@heroicons/vue/16/solid';
import Button from '@/components/ui/Button.vue';
const props = defineProps({
  activity: Object,
})

const parkStore = useParkStore();

</script>

<template>
  <article class="activity-card">
    <header>
      <h3>{{ activity.name }}</h3>
    </header> (Duration: {{ activity.duration }})
    <Button rounded type="text">
      <MapPinIcon class="button-icon" />
    </Button>
    <Button type="solid" label="Select" @click=" parkStore.selectRide(activity.id)" />
  </article>
</template>

<style scoped>
.activity-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  height: 100%;

  header {
    background-color: var(--main-accent);
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: -1rem;
    color: white;
    padding: 1rem;

    h3 {
      font-weight: 500;
    }
  }

}
</style>

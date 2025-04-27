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
    </header>
    <!-- Wave at the bottom -->
    <svg class="curve-detail" viewBox="0 0 500 150" preserveAspectRatio="none">
      <path d=" M0,50 Q250,100 500,50 L500,150 L0,150 Z" fill="#3b82f6" />
    </svg>

    <div class="body-content">

      <Button rounded type="text">
        <MapPinIcon class="button-icon" />
      </Button>
      <Button type="solid" label="Select" @click=" parkStore.selectRide(activity.id)" />
    </div>
  </article>
</template>

<style scoped>
.activity-card {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;

  .curve-detail {
    margin-left: -1rem;
    margin-right: -1rem;

  }

  header {
    text-align: center;
    padding: 1rem;

    h3 {
      font-weight: 500;
      font-size: 1.3rem;
    }
  }

  .body-content {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: -1rem;
    margin-bottom: -1rem;
    height: 100%;
    padding: 1rem;
    background-color: #3b82f6;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

}
</style>

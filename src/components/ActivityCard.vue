<script setup>
import { useParkStore } from '@/stores/parkStore';
import { MapPinIcon, XMarkIcon } from '@heroicons/vue/16/solid';
import Button from '@/components/ui/Button.vue';
const props = defineProps({
  activity: Object,
  selected: Boolean,
})

const parkStore = useParkStore();

</script>

<template>
  <article class="activity-card">
    <header>
      <h3>{{ activity.name }}</h3>
      <span class="location-tag">
        <MapPinIcon class="icon" />
        Location
      </span>
      <Button v-if="selected" type="ghost" rounded class="close-button">
        <XMarkIcon class="button-icon" @click="parkStore.deselectRide(activity.id)" />
      </Button>
    </header>
    <!-- Wave at the bottom -->
    <svg class="curve-detail" viewBox="0 0 500 150" preserveAspectRatio="none">
      <path d=" M0,50 Q250,100 500,50 L500,150 L0,150 Z" fill="#3b82f6" />
    </svg>

    <div class="body-content">
      <Button v-if="!selected" type="solid" label="Select" @click="parkStore.selectRide(activity.id)" />
    </div>
  </article>
</template>

<style scoped>
.activity-card {
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  max-height: 200px;



  .curve-detail {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: -3rem;
  }

  header {
    text-align: center;
    padding: .5rem;

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      aspect-ratio: 1;
      padding: .35rem;
    }

    .icon {
      height: 1rem;
      width: 1rem;
    }

    h3 {
      font-weight: 500;
      font-size: 1.1rem;
    }

    .location-tag {
      display: flex;
      font-style: italic;
      justify-content: center;
      padding: 1rem;
      align-items: center;
      gap: .25rem;
    }
  }

  .body-content {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: -1rem;
    margin-bottom: -1rem;
    height: max-content;
    padding: .5rem;
    background-color: #3b82f6;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

}
</style>

<script setup>
import { ref } from 'vue';
import TabLink from './ui/TabLink.vue';

const items = ref([
    { label: 'Calendar', to: "/plan/calendar", icon: '' },
    { label: 'Calendar', to: "/plan/calendar", icon: '' },
]);
</script>

<template>
    <div class="flex gap-1">
        <TabLink v-for="(item, index) in items" :key="index" :link="item" />
    </div>

</template>
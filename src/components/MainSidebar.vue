<script setup>
import { computed } from 'vue';
import { useTripStore } from '@/stores/trip'; // Import the store
import MainNav from './MainNav.vue';
import SiteHeader from './SiteHeader.vue';
import { HomeIcon, CalendarIcon } from '@heroicons/vue/16/solid';

const tripStore = useTripStore(); // Get the store instance

// Dynamically generate menu items, including children based on store data
const menuItems = computed(() => [
    { label: 'Home', to: { name: 'home' }, icon: HomeIcon },
    {
        label: 'Plans',
        to: 'plans',
        section: true,
        children: tripStore.plans.map((plan, index) => ({
            label: plan.name || `Plan ${index + 1}`,
            // to: { name: 'plan', params: { index } },
            icon: CalendarIcon,
        })),
    },
]);

</script>

<template>
    <div class="min-w-56 rounded-se-lg">
        <SiteHeader />
        <MainNav :items="menuItems" />
    </div>
</template>
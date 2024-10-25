<script setup>
import { ref } from 'vue';
import MainNavLink from './MainNavLink.vue';

const items = ref([
    { label: 'Home', to: "/", icon: 'pi pi-plus' },
    { label: 'About', to: "/about", icon: 'pi pi-search' },
    { label: 'Plan', to: "/plan", icon: '' }

]);

</script>

<template>
    <nav class="flex flex-col pt-5">
        <MainNavLink v-for="(item, index) in items" :key="index" :to="item.to" :label="item.label" />
    </nav>
</template>
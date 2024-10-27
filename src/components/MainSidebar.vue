<script setup>
import MainNav from './MainNav.vue';
import SiteHeader from './SiteHeader.vue';
import { menuItems } from '@/data/mainmenu';
</script>

<template>
    <div class=" min-w-56 rounded-se-lg">
        <SiteHeader />
        <MainNav :items="menuItems" />
    </div>
</template>
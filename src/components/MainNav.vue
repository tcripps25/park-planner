<script setup>
import { ref, computed } from 'vue';
import MainNavLink from './MainNavLink.vue';
import MainNavSection from './MainNavSection.vue';


const props = defineProps({
    items: Array
})

// Track visibility for each submenu
const openSections = ref({});

// Define toggleSection as a const function
const toggleSection = (index) => {
    openSections.value[index] = !openSections.value[index];
};

</script>

<template>
    <nav class="flex flex-col">
        <ul>
            <li v-for="(linkItem, index) in items" :key="'link-' + index">
                <MainNavSection @click="toggleSection(index)" v-if="linkItem.section" :item="linkItem" />
                <MainNavLink v-else :item="linkItem" />
                <MainNav v-if="linkItem.children && openSections[index]" :items="linkItem.children" />
            </li>
        </ul>
    </nav>
</template>
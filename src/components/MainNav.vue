<script setup>
import { ref } from 'vue';
import MainNavLink from './MainNavLink.vue';
import MainNavSection from './MainNavSection.vue';

const props = defineProps({
    items: Array
});

// Track the selected section index for visibility control
const selectedSectionIndex = ref(null);

// Define toggleSection to set selectedSectionIndex
const toggleSection = (index) => {
    selectedSectionIndex.value = selectedSectionIndex.value === index ? null : index;
};




</script>

<template>
    <nav class="flex flex-col">
        <ul>
            <li v-for="(linkItem, index) in items" :key="'link-' + index">
                <!-- Set hidden based on whether the current index matches the selected index -->
                <MainNavSection @click="toggleSection(index)" v-if="linkItem.section" :item="linkItem">
                    <template #submenu>
                        <MainNav class="ml-5" v-if="linkItem.children" :items="linkItem.children" />
                    </template>
                </MainNavSection>
                <MainNavLink v-else :item="linkItem" />
            </li>
        </ul>
    </nav>
</template>
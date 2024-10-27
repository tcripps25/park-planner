<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    item: Object,
})
</script>
<template>
    <RouterLink active-class="bg-sky-800 text-sky-50"
        class="transition px-4 py-2 text-sm hover:bg-sky-800 hover:text-sky-50 text-sky-900 flex gap-2 items-center"
        :to="item.to">
        <component v-if="item.icon" :is="item.icon" class="h-4 w-4" />
        {{ item.label }}
    </RouterLink>
</template>
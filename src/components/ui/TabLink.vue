<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    link: Object,
})
</script>

<template>
    <RouterLink :to="link.to">
        <div class="px-2 py-1 first-of-type:-ml-1 bg-slate-200 w-max rounded">
            <span class="font-semibold">{{ link.label }}</span>
        </div>
    </RouterLink>
</template>
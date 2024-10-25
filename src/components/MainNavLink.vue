<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    to: String,
    label: String,
})
</script>
<template>
    <RouterLink active-class="bg-sky-800 text-sky-50"
        class="transition px-4 py-2 hover:bg-sky-800 hover:text-sky-50 font-semibold" :to="to">{{ label }}
    </RouterLink>
</template>
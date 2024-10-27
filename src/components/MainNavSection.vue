<script setup>
import { ref } from 'vue';
import Button from './ui/Button.vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';

const props = defineProps({
    item: Object,
})

const showSubmenu = ref(false)

</script>

<template>
    <Button @click="$emit('someEvent')" :label="item.label" type="section">
        <template #icon>
            <ChevronDownIcon class="h-4 w-4" />
        </template>
    </Button>
</template>
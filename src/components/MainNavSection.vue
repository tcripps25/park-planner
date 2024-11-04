<script setup>
import { ref } from 'vue';
import Button from './ui/Button.vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';

const props = defineProps({
    item: Object,
})

const showSubmenu = ref(false)
const toggleShowSubmenu = () => {
    showSubmenu.value = !showSubmenu.value
}

</script>

<template>
    <div>
        <Button @click="toggleShowSubmenu" :label="item.label" type="section">
            <template #icon>
                <ChevronDownIcon class="h-4 w-4 mr-1 transition" :class="showSubmenu ? '' : '-rotate-90'" />
            </template>
        </Button>
        <slot v-if="showSubmenu" name="submenu">
        </slot>
    </div>
</template>
<script setup>

const props = defineProps({
    label: String,
    ariaLabel: String,
    trailing: Boolean,
    inline: Boolean,
    dest: String,
    disabled: Boolean,
    type: {
        type: String,
        required: false,
        default: 'text', // Default style
        validator: (value) => ['ghost', 'section', 'solid', 'outline', 'text', 'link'].includes(value), // Ensure valid styles
    },
})
</script>

<template>
    <!-- Button element -->
    <button :disabled="disabled" v-if="type !== 'link'" :name="ariaLabel || label" tabindex="0" role="button"
        class="flex gap-1 items-center py-1 rounded-sm transition text-sm" :class="{
            'flex-row-reverse': trailing,
            'px-2': !inline,
            'bg-transparent font-semibold px-4 py-2 w-full hover:bg-slate-300': type === 'section',   // Section style
            'bg-blue-700 hover:bg-blue-600 text-white': type === 'solid',   // Solid style
            'bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-700 text-slate-700': type === 'ghost', // Ghost style
            'bg-transparent hover:bg-slate-2 text-slate-800 hover:text-slate-600': type === 'text', // Text style
            'border border-blue-700 text-blue-700': type === 'outline'  // Outline style
        }" :aria-label="ariaLabel || label" :title="ariaLabel || label">
        <div v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <span v-if="label">{{ label }}</span>
    </button>

    <!-- Anchor element for link type -->
    <a v-else :href="disabled ? null : dest" class="flex items-center group font-medium dark:text-zinc-300" :class="{
        'cursor-not-allowed text-slate-400 dark:text-zinc-600': disabled,
        'cursor-pointer': !disabled,
        'flex-row-reverse': trailing
    }" :aria-label="ariaLabel || label" :title="ariaLabel || label" @click.prevent="disabled">
        <div class="transition" v-if="$slots.icon"
            :class="trailing ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'">
            <slot name="icon"></slot>
        </div>
        <span class="group-hover:underline" v-if="label">{{ label }}</span>
    </a>
</template>
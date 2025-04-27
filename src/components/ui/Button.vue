<script setup>
import { computed } from 'vue'; // Import computed

const props = defineProps({
  label: String,
  ariaLabel: String,
  rounded: Boolean,
  type: {
    type: String,
    default: 'ghost', // Keep ghost as the default
    // Add a validator for the allowed styles
    validator: (value) => ['solid', 'ghost', 'text'].includes(value)
  }
})

// Computed property to generate the style class
const styleClass = computed(() => `ui-button--${props.type} ${props.rounded ? 'rounded' : ''}`);

</script>

<template>
  <button class="ui-button" :class="styleClass" :aria-label="ariaLabel || label" :title="ariaLabel || label">
    <span v-if="label">{{ label }}</span>
    <slot>

    </slot>
  </button>
</template>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  /* Add some default padding */
  border-radius: 4px;
  /* Add a subtle border-radius */
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  /* Smooth transitions */
  border: 1px solid transparent;
  /* Base border */
  background-color: transparent;
  /* Base background */
  color: inherit;
  /* Inherit text color by default */
  width: max-content;
  /* Keep this if needed */
  text-decoration: none;
  /* Remove underline from potential link usage */
  line-height: 1;
  /* Ensure consistent line height */
}

.rounded {
  border-radius: 200rem !important;
}

/* --- Style Variants --- */

/* Solid Style */
.ui-button--solid {
  background-color: #007bff;
  /* Example solid background */
  color: white;
  /* Example solid text color */
  border-color: #007bff;
  /* Match border to background */
}

.ui-button--solid:hover {
  background-color: #0056b3;
  /* Darker on hover */
  border-color: #0056b3;
}

.ui-button--solid:active {
  background-color: #004085;
  /* Even darker when pressed */
  border-color: #004085;
}

/* Ghost Style (Default) */
.ui-button--ghost {

  /* Example ghost border */
  color: #007bff;
  /* Example ghost text color */
  background-color: #efefef;
}

.ui-button--ghost:hover {
  background-color: rgba(0, 123, 255, 0.1);
  /* Subtle background on hover */
  border-color: #007bff;
}

.ui-button--ghost:active {
  background-color: rgba(0, 123, 255, 0.2);
}


/* Text Style */
.ui-button--text {
  border-color: transparent;
  background-color: transparent;
  color: #007bff;
  /* Example text color */
  padding: 0.5em 0.5em;
  /* Maybe less horizontal padding for text */
}

.ui-button--text:hover {
  background-color: rgba(0, 123, 255, 0.1);
  /* Subtle background on hover */
  text-decoration: underline;
  /* Add underline on hover for text */
}

.ui-button--text:active {
  background-color: rgba(0, 123, 255, 0.2);
}

/* Optional: Style for slotted content like icons */
.ui-button :slotted(svg) {
  margin-right: 0.5em;
  /* Add space if label is also present */
}

.ui-button :slotted(svg:only-child) {
  margin-right: 0;
  /* Remove space if only icon */
}

.ui-button span+ :slotted(svg) {
  margin-left: 0.5em;
  /* Space if icon is after label */
  margin-right: 0;
}
</style>

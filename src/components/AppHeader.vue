<script setup>
// No script changes needed
</script>
<template>
  <header class="main-header">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  padding: 1rem 2rem;
  /* Adjust padding as needed */
  background-color: var(--main-header-color);
  /* Removed negative margins */
}

.wrapper {
  /* Add any specific wrapper styles if needed, e.g., max-width, margin: auto */
  width: 100%;
  /* Example */
}
</style>

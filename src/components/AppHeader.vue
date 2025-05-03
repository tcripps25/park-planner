<script setup>
// No script changes needed
</script>
<template>
  <header class="main-header">
    <div class="wrapper">
      <span class="app-name">Park Planner
      </span>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  padding: 1rem 2rem 0rem 2rem;
  background-color: var(--main-bg);

  .app-name {
    font-size: 1.4rem;
    font-weight: 600;
  }
}

.wrapper {
  /* Add any specific wrapper styles if needed, e.g., max-width, margin: auto */
  width: 100%;
  /* Example */
  display: flex;
  gap: 1rem;

  justify-content: space-between;
}
</style>

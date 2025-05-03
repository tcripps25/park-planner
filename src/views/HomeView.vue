<script setup>
import HeroSection from '@/components/HeroSection.vue'
import StartScreen from '@/components/StartScreen.vue'



</script>

<template>
  <div class="home-screen">
    <HeroSection />
    <StartScreen />

  </div>
</template>

<style scoped>
.home-screen {
  margin: auto;
  padding: 1rem 2rem 2rem 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  width: 100%;
}
</style>

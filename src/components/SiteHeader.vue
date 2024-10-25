<script setup>
import siteData from '../data/site.json'
</script>

<template>
    <header>
        <div class="flex justify-between p-5">
            <h1 class="text-2xl text-sky-50 font-semibold">{{ siteData.name }}</h1>
        </div>
    </header>
</template>
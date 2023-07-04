<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-3">
    <h1 class="text-6xl text-red-500">{{ error.statusCode }}</h1>
    <h2 v-if="error.statusCode === 404" class="text-2xl text-gray-700">Page Not Found</h2>
    <h2 v-else class="text-2xl text-gray-700">An error occurred</h2>
    <p class="text-lg text-gray-500">{{ error.message }}</p>
    <nuxt-link to="/" class="btn btn-primary">Go to Homepage</nuxt-link>
  </div>
</template>

<script setup>
const route = useRoute()
const error = route.meta.error || { statusCode: 500, message: 'Unknown error' }
</script>

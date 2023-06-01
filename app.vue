<!-- ./app.vue -->
<script setup>
useHead({
  title: 'Kind Robots',
  meta: [
    {
      name: 'description',
      content: 'Coding a better world'
    }
  ]
})
</script>
<template>
  <div>
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

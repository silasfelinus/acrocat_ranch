<template>
  <div v-if="loading" class="w-full flex items-center justify-center py-2">
    Loading...
  </div>
  <div v-else class="w-full flex items-center justify-center bg-gray-100 py-2">
    <select
      v-if="navLinks.length > 0"
      class="border border-gray-200 rounded px-4 py-2"
    >
      <option
        v-for="link in navLinks"
        :key="link.id"
        :value="link.link"
        class="text-gray-600"
      >
        {{ link.title }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const navLinks = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const contentQuery = queryContent('simpleNav')
    const data = await contentQuery.find()
    navLinks.value = data.navigationLinks
  } catch (error) {
    console.error('Error fetching navigation links:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <select v-model="selectedTag" class="form-select">
      <option v-for="tag in tags" :key="tag.id" :value="tag.name">
        {{ tag.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
const tags = ref([])
const selectedTag = ref(null)

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

onMounted(async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/tags`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    tags.value = data
    selectedTag.value = tags.value[0]?.name // Set the first tag as the default selected tag
  } catch (e) {
    console.error('Error fetching tags', e)
  }
})
</script>

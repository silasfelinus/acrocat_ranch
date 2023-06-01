<template>
  <div>
    <select v-model="selectedFile" @change="fetchRandomLine">
      <option v-for="file in files" :key="file.slug">{{ file.slug }}</option>
    </select>
    <p v-if="randomLine">Status: {{ randomLine }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const files = ref([])
const selectedFile = ref(null)
const randomLine = ref(null)
const defaultWildcard = 'DreamScenarios'

onMounted(async () => {
  const contentQuery = queryContent('/wildcards')
  files.value = await contentQuery.find()
})

const fetchRandomLine = async () => {
  if (!selectedFile.value) return
  const contentQuery = queryContent(`/wildcards/${selectedFile.value}`)
  const file = await contentQuery.findOne()
  const lines = file.text.split('\n')
  randomLine.value = lines[Math.floor(Math.random() * lines.length)]
}
</script>

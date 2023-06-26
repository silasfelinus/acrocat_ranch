<template>
  <div class="p-4 bg-white rounded shadow-md">
    <h2 class="text-2xl font-bold">{{ bot.name || "Unnamed Bot" }}</h2>
    <h3 class="text-xl">{{ bot.description || "No description" }}</h3>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="space-y-2">
        <label for="name" class="text-sm font-medium text-gray-700">Name</label>
        <input id="name" v-model="bot.name" required class="input input-bordered">
      </div>

      <div class="my-4">
        <label for="temperature" class="block text-sm font-medium text-gray-700">Temperature</label>
        <input id="temperature" v-model="bot.temperature" type="range" class="slider slider-horizontal">
      </div>

      <div class="my-4">
        <label for="intro" class="block text-sm font-medium text-gray-700">Intro</label>
        <textarea id="intro" v-model="bot.intro" class="input input-bordered w-full"></textarea>
      </div>

<div class="my-4">
  <label for="style" class="block text-sm font-medium text-gray-700">Style</label>
  <textarea id="style" v-model="bot.style" class="input input-bordered w-full"></textarea>
</div>

<div class="my-4">
<label for="image" class="block text-sm font-medium text-gray-700">Image</label>
<input id="image" type="file" @change="handleImageChange" class="input input-bordered">
</div>


<div class="my-4">
  <label for="mask" class="block text-sm font-medium text-gray-700">Mask</label>
  <input id="mask" v-model="bot.mask" type="url" class="input input-bordered">
</div>

<div class="my-4">
  <label for="prompt" class="block text-sm font-medium text-gray-700">Prompt</label>
  <input id="prompt" v-model="bot.prompt" class="input input-bordered">
</div>

<button type="submit" class="btn btn-primary mt-6" :disabled="!isValid || loading">
        <span v-if="loading">Loading...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'
import { useRoute } from 'vue-router'

const botStore = useBotStore()
const bot = ref(botStore.selectedBot || {})
const loading = ref(false)
const route = useRoute()

onMounted(async () => {
  const { id } = route.params
  if (id) {
    loading.value = true
    try {
      const response = await fetch(`/api/bot/${id}`)
      const data = await response.json()
      bot.value = data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
})

const isValid = computed(() => {
  return bot.value.name && bot.value.description && bot.value.prompt
})

const handleSubmit = async () => {
  if (!isValid.value) return

  loading.value = true

  try {
    const method = bot.value.id ? 'PUT' : 'POST'
    const url = bot.value.id ? `/api/bot/${bot.value.id}` : '/api/bot'
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bot.value)
    })
    
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status)
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
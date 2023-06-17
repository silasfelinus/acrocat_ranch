<template>
  <div
    class="card border-2 border-indigo-500 rounded-lg p-4 shadow-lg m-4 cursor-pointer"
  >
    <img
      :src="selectedBot.avatarImage"
      alt="Bot avatar"
      class="h-24 w-24 rounded-full mx-auto"
    />
    <h2 class="text-lg font-bold text-center mt-2">{{ selectedBot.name }}</h2>
    <p class="text-sm text-center mt-2">{{ selectedBot.description }}</p>
    <div v-if="expanded" class="mt-4">
      <p class="text-xs font-bold">Model: {{ selectedBot.model }}</p>
      <p class="text-xs">Post: {{ selectedBot.post }}</p>
      <p class="text-xs">Temperature: {{ selectedBot.temperature }}</p>
      <p class="text-xs">Max Tokens: {{ selectedBot.maxTokens }}</p>
      <p class="text-xs">Prompt: {{ selectedBot.prompt }}</p>
    </div>
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'

const botStore = useBotStore()
const expanded = ref(false)

// Access the currently selected bot
const selectedBot = computed(() => botStore.selectedBot.value)
</script>

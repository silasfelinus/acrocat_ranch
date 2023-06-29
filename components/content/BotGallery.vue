<template>
  <div class="flex flex-wrap justify-around p-8">
    <div
      v-for="bot in bots"
      :key="bot.id"
      class="flex flex-col items-center justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
      @click="selectBot(bot.id)"
    >
      <img :src="bot.avatarImage" class="w-full h-64 object-cover" />
      <h2 class="mt-4 text-2xl font-semibold text-center">{{ bot.name }}</h2>
      <p class="mt-2 text-center">{{ bot.description }}</p>
    </div>
    <BotCard v-if="selectedBot" :bot="selectedBot" />
  </div>
</template>

<script setup lang="ts">
import { Bot } from '../../types/bot'

const bots = ref<Bot[]>([])
const selectedBot = ref<Bot | null>(null)

const fetchBots = async () => {
  try {
    const response = await fetch('/api/bots')
    const data: Bot[] = await response.json()
    bots.value = data
  } catch (error) {
    console.error(error)
  }
}

const selectBot = async (id: number) => {
  try {
    const response = await fetch(`/api/bots/${id}`)
    const data: Bot = await response.json()
    selectedBot.value = data
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchBots)
</script>

<style scoped></style>

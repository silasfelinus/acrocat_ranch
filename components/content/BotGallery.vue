<template>
  <div class="p-10">
    <h1 class="text-4xl mb-10 text-center">Our Chat Bots</h1>
    <div v-if="botStore.error" class="text-center text-red-600">
      <p>An error occurred while fetching bots: {{ botStore.error }}</p>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="bot in botStore.bots"
        :key="bot.id"
        class="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transform transition"
        tabindex="0"
        @click="selectBot(bot)"
      >
        <figure>
          <img
            :src="bot.avatarImage"
            alt="bot avatar"
            class="h-48 w-full object-cover"
          />
        </figure>
        <div class="card-body p-4">
          <h2 class="card-title text-xl">{{ bot.name }}</h2>
          <p class="text-gray-500 mt-2">{{ bot.description }}</p>
          <BotCard
            v-if="botStore.selectedBot && botStore.selectedBot.id === bot.id"
            :bot="botStore.selectedBot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'
import BotCard from './BotCard.vue'

const botStore = useBotStore()
const selectBot = (bot) => {
  botStore.setSelectedBot(bot)
}

onMounted(() => {
  botStore.loadBots().catch((error) => {
    botStore.error = error.message
  })
})

onErrorCaptured((error) => {
  botStore.error = error.message
  return true
})
</script>

<style scoped>
.card:hover,
.card:focus,
.card:active {
  transform: scale(1.03);
}
.card:active {
  transform: scale(0.97);
}
</style>

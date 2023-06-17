<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <BotCard
      v-for="bot in botStore.bots"
      :key="bot.id"
      :name="bot.name"
      :description="bot.description"
      :avatar-image="bot.avatarImage"
      :model="bot.model"
      :post="bot.post"
      :temperature="bot.temperature"
      :max-tokens="bot.maxTokens"
      :messages="bot.messages"
      :class="{ 'ring-4 ring-blue-500': botStore.selectedBot === bot }"
      @click="botStore.selectBot(bot)"
    />
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'

const botStore = useBotStore()
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>

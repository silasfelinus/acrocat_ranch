<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div
      v-for="bot in bots"
      :key="bot.id"
      class="card bordered"
      :class="{ 'border-primary border-2': bot === selectedBot }"
      @click="selectBot(bot)"
    >
      <figure>
        <img :src="bot.avatarImage" alt="Bot avatar" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ bot.name }}</h2>
        <p>{{ bot.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'

const botStore = useBotStore()

const { bots, selectedBot, selectBot } = toRefs(botStore) // Using toRefs to make it reactive

onMounted(() => {
  botStore.fetchBots()
})
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>

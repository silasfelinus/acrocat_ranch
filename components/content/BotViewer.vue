<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div
      v-for="bot in botStore.bots"
      :key="bot.id"
      class="cursor-pointer"
      @click="selectBot(bot.id)"
    >
      <div class="card bordered">
        <figure>
          <img :src="bot.imageUrl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ bot.title }}</h2>
          <p v-if="selectedBot && selectedBot.id === bot.id">
            {{ bot.description }}
          </p>
          <!-- Add more info here when the card is selected -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'

const botStore = useBotStore()
</script>

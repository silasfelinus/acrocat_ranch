<template>
  <div v-if="selectedBot" class="card bordered">
    <figure>
      <img :src="selectedBot.avatarImage" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ selectedBot.name }}</h2>
      <p>{{ selectedBot.description }}</p>
      <p>Type: {{ selectedBot.botType }}</p>
      <p>Model: {{ selectedBot.model }}</p>
      <p>Post: {{ selectedBot.post }}</p>
      <p>Temperature: {{ selectedBot.temperature }}</p>
      <p>Max Tokens: {{ selectedBot.maxTokens }}</p>
      <p>Prompt: {{ selectedBot.prompt }}</p>
      <div v-if="selectedBot.image">
        <p>Image: {{ selectedBot.image }}</p>
      </div>
      <div v-if="selectedBot.mask">
        <p>Mask: {{ selectedBot.mask }}</p>
      </div>
      <div v-if="selectedBot.style">
        <p>Style: {{ selectedBot.style }}</p>
      </div>
      <div v-if="selectedBot.n">
        <p>N: {{ selectedBot.n }}</p>
      </div>
      <div v-if="selectedBot.intro">
        <p>Intro: {{ selectedBot.intro }}</p>
      </div>
      <div v-if="selectedBot.size">
        <p>Size: {{ selectedBot.size }}</p>
      </div>
      <!-- Add more optional info here from the selectedBot -->
    </div>
  </div>
</template>

<script setup>
import { useBotStore } from '../../stores/bots'

const store = useBotStore()
const selectedBot = store.selectedBot
</script>

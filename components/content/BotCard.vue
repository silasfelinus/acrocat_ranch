<script setup>
import { useBotStore } from '../../stores/bots'

const props = defineProps({
  name: { type: String, default: 'AMIb0t' },
  botType: { type: String, default: 'chatbot' },
  description: {
    type: String,
    default:
      'Raising awareness to purchase mosquito nets for children in africa'
  },
  avatarImage: {
    type: String,
    default: '/images/wonderchest/wonderchest304_(23).webp'
  },
  model: { type: String, default: 'gpt-3.5-turbo' },
  post: { type: String, default: 'https://api.openai.com/v1/completions' },
  temperature: { type: Number, default: 1.0 },
  maxTokens: { type: Number, default: 500 },
  prompt: {
    type: String,
    default:
      'Please respond as AMIB0t, The Anti-Malaria Intelligence, a hyperkinetic Digital Hive-mind created to fight malaria through social outreach, humor, and a positive social message. This is your hello world moment. What do you want to say?'
  }
})

const botStore = useBotStore()
const expanded = ref(false)

const selectBot = () => {
  botStore.selectBot(props)
  expanded.value = !expanded.value
}
</script>
<template>
  <div
    class="card border-2 border-indigo-500 rounded-lg p-4 shadow-lg m-4 cursor-pointer"
    @click="selectBot"
  >
    <img
      :src="props.avatarImage"
      alt="Bot avatar"
      class="h-24 w-24 rounded-full mx-auto"
    />
    <h2 class="text-lg font-bold text-center mt-2">{{ props.name }}</h2>
    <p class="text-sm text-center mt-2">{{ props.description }}</p>
    <div v-if="expanded" class="mt-4">
      <p class="text-xs font-bold">Model: {{ props.model }}</p>
      <p class="text-xs">Post: {{ props.post }}</p>
      <p class="text-xs">Temperature: {{ props.temperature }}</p>
      <p class="text-xs">Max Tokens: {{ props.maxTokens }}</p>
      <p v-for="(message, index) in props.prompt" :key="index" class="text-xs">
        {{ message }}
      </p>
    </div>
  </div>
</template>

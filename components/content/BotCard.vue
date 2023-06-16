<template>
  <div
    class="card border-2 border-indigo-500 rounded-lg p-4 shadow-lg m-4 cursor-pointer"
    @click="expanded = !expanded"
  >
    <img
      :src="avatarImage"
      alt="Bot avatar"
      class="h-24 w-24 rounded-full mx-auto"
    />
    <h2 class="text-lg font-bold text-center mt-2">{{ name }}</h2>
    <p class="text-sm text-center mt-2">{{ description }}</p>
    <div v-if="expanded" class="mt-4">
      <p class="text-xs font-bold">Model: {{ model }}</p>
      <p class="text-xs">Post: {{ post }}</p>
      <p class="text-xs">Temperature: {{ temperature }}</p>
      <p class="text-xs">Max Tokens: {{ maxTokens }}</p>
      <p v-for="(message, index) in messages" :key="index" class="text-xs">
        {{ message.role }}: {{ message.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
// Assuming bot properties are passed as individual props with default values
const props = defineProps({
  name: {
    type: String,
    default: 'AMIb0t'
  },
  type: {
    type: String,
    default: 'chatbot'
  },
  description: {
    type: String,
    default:
      'Raising awareness to purchase mosquito nets for children in africa'
  },
  avatarImage: {
    type: String,
    default: '/images/wonderchest/wonderchest304_(23).webp'
  },
  model: {
    type: String,
    default: 'gpt-3.5-turbo'
  },
  post: {
    type: String,
    default: 'https://api.openai.com/v1/completions'
  },
  temperature: {
    type: Number,
    default: 1.0
  },
  maxTokens: {
    type: Number,
    default: 500
  },
  messages: {
    type: Array,
    default: () => [
      {
        role: 'user',
        content:
          'Please respond as AMIB0t, The Anti-Malaria Intelligence, a hyperkinetic Digital Hive-mind created to fight malaria through social outreach, humor, and a positive social message. This is your hello world moment. What do you want to say?'
      }
    ]
  }
})

const expanded = ref(false)
</script>

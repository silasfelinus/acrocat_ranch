<script setup>
// Define the bot prop with a default value
const props = defineProps({
  bot: {
    type: Object,
    default: undefined
  }
})

// Create a local copy of the bot prop
const localBot = ref({
  id: 0,
  name: 'AMIb0t',
  botType: 'chatbot',
  description: 'Raising awareness to purchase mosquito nets for children in africa',
  avatarImage: '/images/wonderchest/wonderchest304_(23).webp',
  model: 'gpt-3.5-turbo',
  post: 'https://api.openai.com/v1/completions',
  temperature: 1.0,
  maxTokens: 500,
  n: 1,
  prompt:
    'Please respond as AMIB0t, The Anti-Malaria Intelligence, a hyperkinetic Digital Hive-mind created to fight malaria through social outreach and humor'
})

// Watch for changes in the bot prop and update localBot accordingly
watch(
  () => props.bot,
  (newBot) => {
    if (newBot) {
      localBot.value = { ...newBot }
    }
  },
  { immediate: true }
)

// Create a computed property for the prompt
const localPrompt = computed({
  get: () => localBot.value.prompt,
  set: (value) => (localBot.value.prompt = value)
})

const addPromptToDatabase = async () => {
  try {
    const response = await fetch('/api/prompts/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: localPrompt.value })
    })

    if (!response.ok) {
      throw new Error('Failed to add prompt to database')
    }

    const data = await response.json()

    console.log('Prompt added to database:', data)
  } catch (error) {
    console.error(error)
  }
}

const sendToBotCafe = async () => {
  try {
    const response = await fetch('/api/botcafe/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post: localBot.value.post,
        model: localBot.value.model,
        messages: [
          {
            role: 'user',
            content: localPrompt.value
          }
        ],
        temperature: localBot.value.temperature,
        n: localBot.value.n,
        max_tokens: localBot.value.maxTokens
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send message to botcafe')
    }

    const data = await response.json()

    console.log('Message sent to botcafe:', data)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div
    class="flex flex-col p-6 m-6 rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg text-white"
  >
    <img :src="bot.avatarImage" alt="Bot Avatar" class="w-24 h-24 rounded-full mb-4" />
    <h2 class="text-2xl font-bold mb-2">{{ bot.name }}</h2>
    <p class="mb-2">{{ bot.description }}</p>
    <p class="mb-2">{{ bot.botType }}</p>
    <p class="mb-2">{{ bot.model }}</p>
    <p class="mb-2">{{ bot.post }}</p>
    <p class="mb-2">{{ bot.temperature }}</p>
    <p class="mb-2">{{ bot.maxTokens }}</p>
    <p class="mb-2">{{ bot.prompt }}</p>
    <p class="mb-2">{{ bot.image }}</p>
    <p class="mb-2">{{ bot.mask }}</p>
    <p class="mb-2">{{ bot.style }}</p>
    <p class="mb-2">Iterations: {{ bot.n }}</p>
    <p class="mb-2">{{ bot.intro }}</p>
    <p class="mb-2">{{ bot.size }}</p>

    <textarea
      v-model="localPrompt"
      class="mt-4 p-2 w-full h-24 rounded-md bg-white text-black"
    ></textarea>
    <button class="mt-4 px-4 py-2 rounded-md bg-white text-primary" @click="addPromptToDatabase">
      Add Prompt
    </button>
    <button class="mt-4 px-4 py-2 rounded-md bg-white text-primary" @click="sendToBotCafe">
      Send
    </button>
  </div>
</template>

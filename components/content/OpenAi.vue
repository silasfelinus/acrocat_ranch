<template>
  <div>
    <AmiCard :title="title" :subtitle="subtitle" />
    <AmiCard :title="'Slogans'" :avatar="'/bueller.webp'">
      <div v-if="response">
        <h2>Response</h2>
        {{ response }}
      </div>
    </AmiCard>
    <AmiCard :title="title" :subtitle="subtitle" />
    <div>
      <h2>Message History</h2>
      <div v-for="message in messages" :key="message.id">
        {{ message.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Configuration, OpenAIApi } from 'openai'

const title = ref('Kind Robots Chat')
const subtitle = ref('Help us generate our slogans')
const messages = ref([])
const response = ref(null)

const post = 'https://api.openai.com/v1/chat/completions'
const ContentType = 'application/json'
const model = 'gpt-3.5-turbo'
const user = 'user'
const leadin =
  'Tell me a motivation blurb for Kind Robots, our foundation dedicated to making positive, uplifting tech'
const temperature = 1
const iterations = 1
const maxTokens = 40

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

onMounted(async () => {
  try {
    const completion = await openai.createChatCompletion({
      model,
      messages: [{ role: user, content: leadin }],
      temperature,
      n: iterations,
      max_tokens: maxTokens
    })

    response.value = completion.data.choices[0].message
    console.log(completion.data.choices[0].message)
  } catch (error) {
    console.error('Error fetching completion:', error)
  }
})
</script>

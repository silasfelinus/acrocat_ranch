<template>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="toggleChat"
    >
      Toggle Chat
    </button>
    <form @submit.prevent="askQuestion">
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          {{ message.role }}: {{ message.content }}
        </li>
        <li v-if="answer">{{ answer.role }}: {{ answer.content }}</li>
      </ul>
      <div>
        <label>
          Question:
          <input v-model="question" type="text" />
        </label>
        <button type="submit">Ask</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import useAnswer
const messages = ref([])
const answer = ref(null)
const question = ref('')

const askQuestion = async () => {
  messages.value.push({
    role: 'user',
    content: question.value
  })
  question.value = ''
  const stream = await getAnswer({ messages: messages.value })
  answer.value = {
    role: 'assistant',
    content: ''
  }
  useChatStream({
    stream,
    onChunk: ({ data }) => {
      answer.value.content += data
    },
    onReady: () => {
      messages.value.push(answer.value)
      answer.value = null
    }
  })
}
</script>

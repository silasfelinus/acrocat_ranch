<template>
  <NuxtErrorBoundary>
    <div
      class="h-screen flex flex-col"
      :style="{ backgroundColor: botDetails.themeColor }"
    >
      <!-- Display screen for bot image -->
      <div class="h-1/2 flex space-x-4 items-center justify-center">
        <div class="avatar">
          <div class="rounded-full w-24 h-24">
            <img :src="botDetails.avatar" />
          </div>
        </div>
        <div class="w-full h-48">
          <img
            class="h-full w-full object-cover"
            :src="botDetails.backgroundImage"
          />
        </div>
      </div>

      <!-- Bot details -->
      <div class="p-4">
        <h1 class="text-2xl font-bold">{{ botDetails.name }}</h1>
        <p>{{ botDetails.description }}</p>
      </div>

      <!-- Message history and input -->
      <div class="flex-grow overflow-auto p-4">
        <div
          v-for="message in messages"
          :key="message.id"
          class="rounded-box p-4"
        >
          <div class="flex items-center space-x-2">
            <img class="h-8 w-8 rounded-full" :src="message.avatar" />
            <span class="font-bold">{{ message.author }}:</span>
          </div>
          <p>{{ message.text }}</p>
        </div>
      </div>

      <div class="border-t-2 border-white p-4">
        <form @submit.prevent="sendMessage">
          <input
            v-model="input"
            class="w-full rounded-lg border-2 p-2"
            type="text"
            placeholder="Type your message..."
          />
        </form>
      </div>

      <!-- 4 large friendly buttons -->
      <div class="grid grid-cols-2 gap-4 p-4">
        <button class="btn btn-lg btn-accent">Button 1</button>
        <button class="btn btn-lg btn-info">Button 2</button>
        <button class="btn btn-lg btn-primary">Button 3</button>
        <button class="btn btn-lg btn-secondary">Button 4</button>
      </div>
    </div>
  </NuxtErrorBoundary>
</template>

<script setup>
const botDetails = ref(null)
const input = ref('')
const messages = ref([])

onMounted(async () => {
  const route = useRoute()
  try {
    botDetails.value = await $content(
      `botcafe/${route.params.personality}`
    ).fetch()
  } catch (error) {
    throw new Error('Failed to load bot details')
  }
})

const sendMessage = () => {
  // Add the new message to the message list
  messages.value.push({
    id: Date.now(),
    author: botDetails.value.name,
    text: input.value,
    avatar: botDetails.value.avatar
  })
  // Clear the input field
  input.value = ''
}
</script>

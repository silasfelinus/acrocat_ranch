<template>
  <div class="container mx-auto my-5">
    <form class="space-y-6" @submit.prevent="sendMessage">
      <!-- User Field -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">User Email</span>
        </label>
        <input
          v-model="form.user"
          type="email"
          placeholder="ami@kindrobots.org"
          class="input input-bordered"
        />
      </div>

      <!-- Messages Field -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Message</span>
        </label>
        <textarea
          v-model="form.messages[0].content"
          placeholder="Type a message here..."
          class="textarea textarea-bordered w-full"
        ></textarea>
      </div>

      <!-- Temperature Field -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Temperature</span>
        </label>
        <input
          v-model="form.temperature"
          type="number"
          min="0"
          max="1"
          step="0.1"
          class="input input-bordered"
        />
      </div>

      <!-- Max Tokens Field -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Max Tokens</span>
        </label>
        <input
          v-model="form.max_tokens"
          type="number"
          min="0"
          max="2048"
          class="input input-bordered"
        />
      </div>

      <!-- Send Button -->
      <div class="form-control">
        <button type="submit" class="btn btn-primary">Send Message</button>
      </div>
    </form>

    <!-- Display the Response -->
    <div v-if="response" class="mt-10">
      <h2 class="text-xl font-semibold">Response</h2>
      <pre class="p-3 bg-gray-200 rounded">{{ response }}</pre>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const baseURL = route.meta.baseURL

// Initial form values
let form = ref({
  user: 'ami@kindrobots.org',
  messages: [
    {
      role: 'user',
      content: ''
    }
  ],
  temperature: 1,
  max_tokens: 100
})

let response = ref(null)

const sendMessage = async () => {
  const url = `${baseURL}/server/middleware/api.js`

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (!result.ok) {
      throw new Error('Network response was not ok')
    }

    response.value = await result.json()
  } catch (error) {
    response.value = 'Error: ' + error.message
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>

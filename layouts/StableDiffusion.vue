<template>
  <div>
    <div class="prompt-box">
      <textarea v-model="prompt" placeholder="Enter a prompt..." />
    </div>

    <div class="selections">
      <!-- Add selection components here -->
    </div>

    <div class="actions">
      <button @click="makeArt">Make Art</button>
    </div>

    <NuxtErrorBoundary>
      <div v-if="error.value" class="error-message">{{ error.value }}</div>

      <div class="art-display">
        <img v-if="artUrl.value" :src="artUrl.value" alt="Generated art" />
      </div>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const prompt = ref('')
const artUrl = ref('')
const error = ref('')

async function makeArt() {
  const { fetch } = useFetch(async () => {
    const data = await fetch('https://cafefred.cafepurr.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        /* Add your request body here */
      })
    })
    if (data.ok) {
      artUrl.value = (await data.json()).url
    }
  })

  try {
    await fetch()
  } catch (e) {
    error.value = e.message
  }
}
</script>

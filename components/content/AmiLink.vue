<template>
  <div class="min-h-screen bg-white flex items-center justify-center">
    <div v-if="loading" class="flex items-center justify-center">
      <img src="/backtree.webp" alt="Loading..." class="h-12 w-12" />
    </div>

    <div v-else class="p-6 max-w-sm w-full bg-white shadow-md rounded-xl">
      <div class="flex items-center space-x-4">
        <SiteLogo />
        <h1 class="text-xl font-semibold">Against Malaria</h1>
      </div>

      <div class="mt-3 text-sm text-gray-600">
        Support our cause. Click the button below to donate.
      </div>

      <div class="mt-6">
        <a
          href="https://againstmalaria.com/amibot"
          class="bg-indigo-500 text-white px-4 py-2 rounded-md"
          @click="openLink"
          >Donate Now</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

const openLink = (e) => {
  e.preventDefault()
  window.open('https://againstmalaria.com/amibot', '_blank')
}
</script>

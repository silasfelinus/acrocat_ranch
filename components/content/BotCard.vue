<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
    <div class="bg-white w-full max-w-2xl p-6 rounded-lg shadow-md">
      <!-- ... other code ... -->
      <button 
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mr-4"
        @click="submit"
      >
        Submit
      </button>
      <button 
        class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        @click="closeCard"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bot } from '@/types/bot'

const props = defineProps<{ bot: Bot }>()
const emit = defineEmits(['close'])

// Setup a reactive internal state based on the prop
const botState = ref<Bot>({...props.bot})

// Watch for changes on prop and update state
watchEffect(() => {
  botState.value = {...props.bot}
}) 

const submit = async () => {
  try {
    const response = await $fetch(botState.value.post as string, {
      method: 'POST',
      body: JSON.stringify(botState.value),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      const responseData = await response.json()
      console.log('Updated successfully', responseData)
    } else {
      console.error('An error occurred:', response.status, response.statusText)
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

const closeCard = () => {
  // emit the close event
  emit('close')
}
</script>

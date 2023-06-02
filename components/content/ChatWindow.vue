<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="toggleChat"
  >
    Toggle Chat
  </button>
</template>

<script setup>
const emit = defineEmits(['toggleChat'])

const toggleChat = () => {
  emit('toggleChat')
}
</script>

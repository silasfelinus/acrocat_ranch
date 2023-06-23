<template>
  <div class="p-4 bg-blue-100 rounded shadow-md cursor-move">
    <label for="text-wall" class="block mb-2">Text Wall:</label>
    <textarea
      id="text-wall"
      v-model="text"
      rows="4"
      class="w-full p-2 rounded shadow-inner cursor-pointer"
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive variable for textarea
const text = ref('')
</script>

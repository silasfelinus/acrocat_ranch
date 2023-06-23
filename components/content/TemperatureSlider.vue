<template>
  <div
    class="flex items-center p-4 bg-indigo-100 rounded shadow-md cursor-move"
  >
    <label for="temperature" class="mr-4">Creativity:</label>
    <input
      id="temperature"
      v-model="value"
      type="range"
      min="0.0"
      max="1.0"
      step="0.1"
      class="flex-grow cursor-pointer"
    />
    <span class="ml-4">{{ value }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive variable for slider
const value = ref(0.5)
</script>

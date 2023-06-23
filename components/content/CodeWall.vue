<template>
  <div class="p-4 bg-blue-100 rounded shadow-md cursor-move">
    <label for="code-wall" class="block mb-2">Code Wall:</label>
    <textarea
      id="code-wall"
      v-model="code"
      rows="4"
      class="w-full p-2 rounded shadow-inner cursor-pointer"
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive variable for textarea
const code = ref('')
</script>

<template>
  <div class="p-4 bg-yellow-100 rounded shadow-md cursor-move">
    <label for="url" class="block mb-2">URL:</label>
    <input
      id="url"
      v-model="url"
      type="text"
      class="w-full p-2 rounded shadow-inner cursor-pointer"
    />
  </div>
</template>

<script setup>
const url = ref('')
</script>

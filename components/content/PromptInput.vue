<template>
  <div class="p-4 bg-red-100 rounded shadow-md cursor-move">
    <label for="prompt" class="block mb-2">Prompt:</label>
    <input
      id="prompt"
      v-model="prompt"
      type="text"
      class="w-full p-2 rounded shadow-inner cursor-pointer"
    />
  </div>
</template>

<script setup>
const prompt = ref('')
</script>

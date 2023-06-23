<template>
  <div class="p-4 bg-purple-100 rounded shadow-md cursor-move">
    <label for="response" class="block mb-2">Response:</label>
    <p id="response" class="w-full cursor-pointer">
      {{ response }}
    </p>
  </div>
</template>

<script setup>
const response = ref('') // You can update this with the response to display
</script>

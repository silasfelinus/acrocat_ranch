<template>
  <div class="p-4 bg-green-100 rounded shadow-md cursor-move">
    <label for="image" class="block mb-2">Image:</label>
    <img
      id="image"
      :src="imageSrc"
      class="w-full object-cover cursor-pointer"
    />
  </div>
</template>

<script setup>
const imageSrc = ref('') // You can update this with the URL of the image to display
</script>

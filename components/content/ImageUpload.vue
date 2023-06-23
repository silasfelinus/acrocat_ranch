<template>
  <div class="p-4 bg-green-100 rounded shadow-md cursor-move">
    <label for="file-upload" class="block mb-2">Upload Image:</label>
    <input
      id="file-upload"
      type="file"
      accept="image/*"
      class="w-full p-2 rounded shadow-inner cursor-pointer"
      @change="onFileChange"
    />
    <img
      v-if="previewImage"
      :src="previewImage"
      class="mt-4 object-cover w-full h-48"
    />
  </div>
</template>

<script setup>
// Reactive variable for image preview
const previewImage = ref('')

const onFileChange = (e) => {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length) return
  createImage(files[0])
}

const createImage = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    previewImage.value = e.target.result
  }
  reader.readAsDataURL(file)
}
</script>

<template>
  <div>
    <div v-for="image in images" :key="image.id">
      <img
        :src="'/public/images/' + image.gallery + '.' + image.type"
        :alt="image.name"
      />
    </div>
  </div>
</template>

<script setup>
const images = ref([])

useFetch(async () => {
  try {
    const data = await $fetch('/api/images')
    images.value = data
  } catch (err) {
    console.error(err)
  }
})
</script>

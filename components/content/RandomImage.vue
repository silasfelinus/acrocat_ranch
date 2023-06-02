<template>
  <div v-if="imageUrl">
    <img :src="imageUrl" :alt="gallery" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// gallery prop (default is 'floof')
const props = defineProps({
  gallery: {
    type: String,
    default: 'floof'
  }
})

const imageUrl = ref('')

onMounted(async () => {
  const response = await fetch(`/images/${props.gallery}/images.json`)
  const data = await response.json()
  const images = data.gallery.split(', ')
  const randomImage = images[Math.floor(Math.random() * images.length)]
  imageUrl.value = `/images/${props.gallery}/${randomImage}`
})
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>

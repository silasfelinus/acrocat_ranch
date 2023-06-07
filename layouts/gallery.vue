<template>
  <div class="gallery-layout" :style="{ backgroundImage: `url(${image})` }">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
    <slot name="galleries" />
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})

const { title, subtitle, image } = toRefs(props)
</script>

<style scoped>
.gallery-layout {
  position: relative;
  padding: 2em;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.title {
  font-size: 2em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.5em;
  font-style: italic;
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 1em;
}
</style>

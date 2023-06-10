<script setup>
const galleries = ref([])
const error = ref(null)
const status = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/api/galleries/')
    if (!response.ok) {
      status.value = response.status
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    galleries.value = await response.json()
  } catch (err) {
    error.value = err.message
  }
})
</script>

<template>
  <div class="flex flex-wrap justify-around">
    <div
      v-for="gallery in galleries"
      :key="gallery.id"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
    >
      <div class="card bordered">
        <figure>
          <img :src="gallery.highlightImage" alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ gallery.name }}</h2>
          <p>{{ gallery.description }}</p>
          <div class="card-actions">
            <button class="btn btn-primary">View Gallery</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="error" class="w-full text-center text-red-500 mt-4">
      Error: {{ error }} Status: {{ status }}
    </div>
  </div>
</template>

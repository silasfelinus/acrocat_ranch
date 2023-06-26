<template>
    <div class="fixed bottom-0 w-full flex justify-center items-center bg-gray-900 p-2">
      <hr class="w-full">
      <div class="w-full carousel rounded-box">
        <div 
          v-for="page in pages" 
          :key="page._id" 
          class="carousel-item w-full flex flex-col items-center justify-center"
        >
          <NuxtLink :to="page._path" class="flex flex-col items-center justify-center">
            <div class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white m-2 transition-all hover:shadow-lg">
              <img :src="page.galleryImage" alt="Gallery Image" class="w-full h-full rounded-full object-cover" v-if="page.galleryImage">
              <p v-else class="text-center">Loading...</p>
            </div>
            <div class="text-white text-center text-sm md:text-base">{{ page.title }}</div>
          </NuxtLink>
        </div>
      </div>
      <hr class="w-full">
    </div>
  </template>
  
  <script setup lang="ts">
  import { Gallery } from '../../types/gallery'
  
  const { find } = queryContent().where({ $not: { _path: '/' } }).sort({ _id: 1 })
  const { data: pages } = await useAsyncData('pages-list', find)
  
  const fetchGalleryImage = async (gallery: Gallery) => {
    const response = await fetch(`/api/galleries/${gallery.name}`)
    const data = await response.json()
    return data.randomImage 
  }
  
  onMounted(async () => {
    if (pages.value) {
      for (const page of pages.value) {
        if (page.gallery) {
          page.galleryImage = await fetchGalleryImage(page.gallery)
        }
      }
    }
  })
  </script>
  
  
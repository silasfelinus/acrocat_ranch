<template>
  <div class="bottom-0 w-full flex justify-center items-center p-2">
    <hr class="w-full" />
    <div class="w-full flex justify-center items-center rounded-box">
      <div
        v-for="page in pages"
        :key="page._id"
        class="w-full flex flex-col items-center justify-center m-2"
      >
        <NuxtLink :to="page._path" class="flex flex-col items-center justify-center">
          <div class="w-24 h-24 md:w-32 md:h-32 rounded-full transition-all hover:shadow-lg">
            <img
              v-if="page.image"
              :src="`/images/${page.image}`"
              alt="Page Image"
              class="w-full h-full rounded-full object-cover"
            />
            <p v-else class="text-center">Loading...</p>
          </div>
          <div class="text-black text-center text-sm md:text-base">{{ page.title }}</div>
        </NuxtLink>
      </div>
    </div>
    <hr class="w-full" />
  </div>
</template>

<script setup lang="ts">
const { find } = queryContent()
  .where({ $not: { _path: '/' } })
  .sort({ _id: 1 })
const { data: pages } = await useAsyncData('pages-list', find)
</script>

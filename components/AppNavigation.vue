<script setup>
import { reactive } from 'vue'
// Define props
const props = defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})

const { randomImage, pickRandomImage } = useRandomImage()

watchEffect(() => {
  props.navigationTree.forEach((item) => {
    const reactiveItem = reactive(item)
    if (item.frontMatter && item.frontMatter.gallery) {
      pickRandomImage(item.frontMatter.gallery)
      reactiveItem.galleryImage = randomImage.value
    }
  })
})
</script>

<template>
  <ul class="space-y-3 list-none p-0">
    <li
      v-for="(item, index) in props.navigationTree"
      :key="index"
      class="flex items-center bg-gray-200 rounded-lg py-3 px-4 space-x-2"
    >
      <NuxtLink
        :to="item._path"
        class="flex items-center text-black no-underline hover:text-gray-500 transition-colors"
      >
        <img
          v-if="item.galleryImage"
          :src="'/images/' + item.galleryImage"
          alt=""
          class="w-8 h-8 object-cover mr-2 border border-gray-300 rounded-full"
        />
        {{ item.title }}
      </NuxtLink>
      <AppNavigation
        v-if="item.children"
        :navigation-tree="item.children"
        class="ml-2"
      />
    </li>
  </ul>
</template>

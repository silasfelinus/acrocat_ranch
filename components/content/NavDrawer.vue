<template>
  <div
    class="fixed bottom-0 left-0 w-full z-50"
    :class="{
      'h-16': navDrawerState.value === 'collapsed',
      'h-40': navDrawerState.value === 'partial',
      'h-60': navDrawerState.value === 'open'
    }"
  >
    <button class="block mx-auto my-2" @click="toggleNavDrawer">Toggle</button>
    <div class="flex justify-around flex-wrap h-1/2 mb-2 overflow-visible">
      <div
        v-for="(item, index) in navigationItems.value"
        :key="index"
        class="w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12"
      >
        <Link :href="item.link">
          <BubbleLink
            :gallery="item"
            :index="index"
            :hovered-index="hoveredIndex.value"
            @hover="handleHover(index)"
            @unhover="handleUnhover"
          />
        </Link>
      </div>
    </div>
  </div>
</template>
<script setup>
// Use `ref` to create reactive state variables
const navigationItems = ref([])
const hoveredIndex = ref(null)
const navDrawerState = ref('collapsed')

const handleHover = (index) => {
  hoveredIndex.value = index
}

const handleUnhover = () => {
  hoveredIndex.value = null
}

const toggleNavDrawer = () => {
  const states = ['collapsed', 'partial', 'open']
  const currentIndex = states.indexOf(navDrawerState.value)
  navDrawerState.value = states[(currentIndex + 1) % states.length]
}

onMounted(async () => {
  const app = useNuxtApp()
  try {
    const navigationData = await app.$content('/json/nav').fetch()

    if (
      navigationData &&
      navigationData.links &&
      Array.isArray(navigationData.links)
    ) {
      navigationItems.value = navigationData.links
    } else {
      console.error(
        'Fetched data does not contain a links array:',
        navigationData
      )
    }
  } catch (error) {
    console.error('Error fetching content:', error)
  }
})
</script>

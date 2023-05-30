<template>
  <div
    class="fixed bottom-0 left-0 w-full z-50"
    :class="{
      'h-16': settings.navDrawerState === 'collapsed',
      'h-40': settings.navDrawerState === 'partial',
      'h-60': settings.navDrawerState === 'open'
    }"
  >
    <button class="block mx-auto my-2" @click="toggleNavDrawer">Toggle</button>
    <div class="flex justify-around flex-wrap h-1/2 mb-2 overflow-visible">
      <div
        v-for="(item, index) in navigationItems"
        :key="index"
        class="w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/12"
      >
        <Link :href="item.link">
          <BubbleLink
            :gallery="item"
            :index="index"
            :hovered-index="hoveredIndex"
            @hover="handleHover(index)"
            @unhover="handleUnhover"
          />
        </Link>
      </div>
    </div>
  </div>
</template>

<script setup>
import BubbleLink from './BubbleLink.vue'

const settings = useSettingsStore()
const navigationItems = ref([])
const hoveredIndex = ref(null)

const handleHover = (index) => {
  hoveredIndex.value = index
}

const handleUnhover = () => {
  hoveredIndex.value = null
}

const toggleNavDrawer = () => {
  settings.toggleNavDrawer()
}

onMounted(async () => {
  try {
    const navigationResponse = await fetch('/navigation')
    const navigationData = await navigationResponse.json()

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
    console.error('Error fetching JSON files:', error)
  }
})
</script>

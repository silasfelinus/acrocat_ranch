<template>
  <li class="space-y-4">
    <div :class="cardClass">
      <NuxtLink
        :to="link"
        class="block text-center text-2xl font-semibold leading-tight text-black overflow-hidden overflow-ellipsis mb-4"
      >
        <template v-if="state === 'icon'">
          <icon :icon="icon"></icon>
        </template>
        {{ title }}
      </NuxtLink>

      <template v-if="state === 'image' || state === 'full'">
        <div class="col-span-1">
          <img
            :src="image || gallery || '/images/backtree.webp'"
            alt="Section Image"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="col-span-3 p-4 bg-secondary text-black rounded">
          <NuxtLink
            :to="link"
            class="block text-center text-2xl font-semibold leading-tight text-black overflow-hidden overflow-ellipsis mb-4"
          >
            {{ title }}
          </NuxtLink>
          <p class="text-black">{{ details }}</p>
        </div>
      </template>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  state: {
    type: String,
    default: 'full',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  details: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  gallery: {
    type: String,
    default: ''
  }
})

const cardClass = computed(() => {
  let baseClass =
    'transform transition-all duration-200 hover:scale-105 bg-primary rounded-lg shadow-lg overflow-hidden grid grid-cols-4 gap-4'
  if (props.state.value === 'collapsed') {
    return `${baseClass} hidden`
  } else if (props.state.value === 'icon') {
    return `${baseClass} grid-cols-1`
  } else if (props.state.value === 'image') {
    return `${baseClass} grid-cols-2`
  } else {
    return baseClass
  }
})
</script>

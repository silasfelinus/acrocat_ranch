<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <ul class="navigation space-y-4">
    <li
      v-for="(item, index) in navigationTree"
      :key="index"
      class="text-lg text-primary-500"
    >
      <NuxtLink
        :to="item._path"
        class="font-semibold hover:text-primary-700 transition-colors"
      >
        {{ item.title }}
      </NuxtLink>
      <NavigationWidget
        v-if="item.children"
        :navigation-tree="item.children"
        class="sub-navigation space-y-2 mt-2"
      />
    </li>
  </ul>
</template>

<style>
.navigation li {
  list-style-type: '_ ';
}

.navigation ul {
  margin-left: 0.8rem;
}
</style>

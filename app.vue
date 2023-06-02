<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div>
    <SiteHeader />
    <main class="text-left">
      <nav>
        <AppNavigation :navigation-tree="navigation" />
      </nav>
      <NuxtPage class="prose text-left" />
    </main>
  </div>
</template>

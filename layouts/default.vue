<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden relative">
    <header class="fixed top-0 left-0 right-0 z-30">
      <SiteHeader />
    </header>
    <div>
      <nav
        class="w-64 bg-white p-4 overflow-auto h-full transition-all duration-300 shadow-lg rounded-r-lg"
      >
        <NavigationWidget :navigation-tree="navigation" />
      </nav>
      <main
        class="px-8 py-4 z-20 ml-4 rounded-lg shadow-lg bg-white p-4 flex-grow"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

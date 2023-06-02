<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden relative">
    <SoapBubbles class="absolute w-full h-full z-10" />

    <SiteHeader class="z-20" />

    <div class="flex-grow flex overflow-hidden z-20">
      <aside
        class="w-64 bg-gray-200 overflow-auto transition-all duration-300 ease-in-out"
        :class="{ '-translate-x-full': !isSidebarOpen }"
      >
        <AppNavigation :navigation-tree="navigation" />
      </aside>

      <main class="flex-grow overflow-auto px-8 py-4">
        <RandomImage class="mb-4" />
        <NuxtPage class="prose text-left" />
      </main>
    </div>

    <div class="fixed bottom-4 left-[calc(4rem + 1rem)] z-20">
      <AmiLink />
    </div>

    <div class="fixed bottom-4 right-4 z-20">
      <ChatWindow />
    </div>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(true)

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<style>
@media (max-width: 768px) {
  aside {
    position: fixed;
    z-index: 100;
  }
}
</style>

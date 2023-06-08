<template>
  <div class="h-screen flex flex-col">
    <header class="fixed top-0 left-0 right-0 z-30">
      <SiteHeader />
    </header>
    <div class="flex-grow flex flex-row">
      <nav
        class="w-64 bg-white p-4 overflow-y-auto transition-all duration-300 shadow-lg rounded-r-lg max-h-screen"
      >
        <NavigationWidget :navigation-tree="navigation" />
      </nav>
      <div class="flex-grow bg-gray-100 p-4 overflow-auto">
        <NuxtLayout>
          <main class="prose mx-auto">
            <ContentDoc />
          </main>
        </NuxtLayout>
      </div>
      <div
        class="w-64 bg-white p-4 overflow-auto h-full transition-all duration-300 shadow-lg rounded-l-lg"
      >
        <div class="rounded-lg bg-gray-200 p-4">
          <!-- Image viewport -->
          <img
            src="/images/background/background001.webp"
            alt="Art"
            class="object-cover h-64 w-full rounded-lg"
          />
        </div>
        <div class="mt-4">
          <DatabaseManager />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

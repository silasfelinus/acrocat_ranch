<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden relative">
    <SoapBubbles class="absolute w-full h-full z-10" />

    <SiteHeader class="z-20" />

    <div class="flex-grow flex overflow-hidden z-20">
      <aside class="sidebar">
        <AppNavigation :navigation-tree="navigation" />
      </aside>

      <main class="flex-grow overflow-auto px-8 py-4">
        <RandomImage class="mb-4" />
        <NuxtPage class="prose text-left hero-layout" />
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
import { ref } from 'vue'

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<style>
/* General styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Layout styles */
.sidebar {
  width: 280px; /* Adjust the width as desired */
  background-color: #f2f2f2;
  overflow-y: auto;
}

main {
  flex-grow: 1;
  padding: 24px;
}

.prose {
  max-width: 800px;
  margin: 0 auto;
}

/* Positioning styles */
.h-screen {
  height: 100vh;
}

.fixed {
  position: fixed;
}

.bottom-4 {
  bottom: 4px;
}

.right-4 {
  right: 4px;
}

.z-20 {
  z-index: 20;
}

/* Responsive styles */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .main-container {
    margin-left: 0;
  }

  .fixed {
    position: static;
  }

  .right-4 {
    right: 4px;
  }
}
</style>

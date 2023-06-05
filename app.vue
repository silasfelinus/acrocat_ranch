<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden relative">
    <SoapBubbles class="absolute w-full h-full z-10" />
    <SiteHeader class="z-20" />

    <div class="flex-grow flex z-20">
      <nav class="w-1/3 bg-gray-100 p-4">
        <NavigationWidget :navigation-tree="navigation" />
        <ChatWindow :messages="messages" @send-message="handleSendMessage" />
      </nav>

      <main class="flex-grow overflow-auto px-8 py-4">
        <NuxtPage class="prose text-left hero-layout" />
      </main>
    </div>

    <footer class="fixed bottom-4 right-4 z-20">
      <AmiLink />
    </footer>
  </div>
</template>

<script setup>
const messages = ref([])

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

const handleSendMessage = async (content) => {
  const userMessage = { role: 'user', content }
  messages.value.push(userMessage)

  const responses = await createChatCompletion({
    model: 'text-davinci-003',
    messages: messages.value
  })
  messages.value.push(...responses)
}
</script>

<style>
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
  width: 400px; /* Adjust the width as desired */
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

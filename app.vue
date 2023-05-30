<template>
  <div class="#app">
    <SiteHeader />
    <ThemeChange />
    <NuxtErrorBoundary>
      <main class="prose">
        <ContentDoc />
        <ThemeDemo />
      </main>
    </NuxtErrorBoundary>
  </div>
</template>
